"use server";

import { signOut } from "@/auth";

export const logout = async () => {
  //Logika untuk server jika ingin ditambahkan
  await signOut();
};
