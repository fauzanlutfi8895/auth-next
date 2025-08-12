// Menambah properti kustom pada objek Session dan User di NextAuth.js (untuk menyimpan informasi tambahan)
import NextAuth, { type DefaultSession } from "next-auth";

//Membuat "cetak biru" baru dari objek user & menambahkan objek tambahan
export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER";
  isTwoFactorEnabled: boolean;
  isOAuth: boolean;
};

//Pernyataan deklarasi ke modul "next-auth"
declare module "next-auth" {
  //ngubah isi session tidak DefaultSession lagi, tapi menjadi ExtendedUser
  interface Session {
    user: ExtendedUser;
  }
}
