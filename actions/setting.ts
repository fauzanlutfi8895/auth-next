"use server";

import * as z from "zod";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { getUserByEmail, getUserById } from "@/data/user";
import { SettingSchema } from "@/schemas";
import { generateVerificationToken } from "@/lib/token";
import { sendVerificationEmail } from "@/lib/mail";
import bcrypt from "bcryptjs";

export const settings = async (values: z.infer<typeof SettingSchema>) => {
  const user = await currentUser();
  if (!user) {
    return { error: "Unauthorized" };
  }

  const dbUser = await getUserById(user.id as string);
  if (!dbUser) {
    return { error: "Unauthorized" };
  }

  //kalau client-side gagal, tidak akan mengirimkan apapun
  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.password = undefined;
    values.isTwoFactorEnabled = undefined;
  }

  if (values.email && values.email !== user.email) {
    const existingUser = await getUserByEmail(values.email);
    if (existingUser && existingUser.id !== user.id) {
      return { error: "Email already in use!" };
    }

    const verificationToken = await generateVerificationToken(values.email);
    await sendVerificationEmail(verificationToken.email, verificationToken.token);

    return { success: "Verification email sent!" };
  }

  //Logika ketika input password & newPassword terisi, lakukan pengecekan dengan password sebelumnya, hash newPassword dan
  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = await bcrypt.compare(values.password, dbUser.password);

    if (!passwordMatch) {
      return { error: "Incorrect password" };
    }

    const hashPassword = await bcrypt.hash(values.newPassword, 10);
    values.password = hashPassword;
    values.newPassword = undefined;
  }

  await db.user.update({
    where: {
      id: dbUser.id,
    },
    data: {
      ...values,
    },
  });

  return { success: "Settings Updated!" };
};
