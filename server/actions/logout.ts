"use server";

import { signOut } from "@/server/auth";

export const handleLogout = async () => {
  await signOut({ redirectTo: "/" });
}