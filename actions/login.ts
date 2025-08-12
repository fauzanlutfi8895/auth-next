"use server";

import * as z from "zod";
import { AuthError } from "next-auth";

import { db } from "@/lib/db";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { generateVerificationToken, generateTwoFactorToken } from "@/lib/token";
import { getUserByEmail } from "@/data/user";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { getTwoFactorConfirmationByUserId } from "@/data/two-factor-confirmation";
import { LoginSchema } from "@/schemas";
import { sendVerificationEmail, sendTwoFactorTokenEmail } from "@/lib/mail";
import { signIn } from "@/auth";
import bcrypt from "bcryptjs";

export const login = async (values: z.infer<typeof LoginSchema>, callbackUrl?: string | null) => {
  const validateFields = LoginSchema.safeParse(values);

  if (!validateFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, code } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: "Email does not exist!" };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(existingUser.email);

    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return { success: "Confirmation email sent!" };
  }

  // --- LOGIKA KUNCI UTAMA: Pengecekan Password DULU ---
  const passwordsMatch = await bcrypt.compare(password, existingUser.password);

  if (!passwordsMatch) {
    // Jika password salah, langsung kembalikan error
    return { error: "Invalid credentials" };
  }

  // Logika Otentikasi Dua Faktor (2FA)
  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      // Ini adalah tahap kedua: pengguna memasukkan kode 2FA
      const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);
      if (!twoFactorToken || twoFactorToken.token !== code) {
        return { error: "Invalid code!" };
      }

      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) {
        return { error: "Code expired" };
      }

      // Hapus token lama dan buat konfirmasi
      await db.twoFactorToken.delete({ where: { id: twoFactorToken.id } });
      const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({ where: { id: existingConfirmation.id } });
      }
      await db.twoFactorConfirmation.create({ data: { userId: existingUser.id } });
    } else {
      // --- TAHAP PERTAMA: MENGIRIM KODE 2FA ---
      // Jika 2FA diaktifkan dan belum ada kode, kirim kode baru
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);
      return { twoFactor: true }; // Mengembalikan sinyal ke client untuk menampilkan form 2FA
    }
  }

  // Alur pengguna yang tidak mengaktifkan 2FA
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
};
