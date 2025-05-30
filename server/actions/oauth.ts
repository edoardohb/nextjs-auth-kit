"use server";

import { signIn } from "../auth";

export const oauthSignIn = async (provider: string) => {
  await signIn(provider, { redirectTo: '/dashboard' });
}