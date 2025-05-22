"use server";

import { signIn } from "@/app/auth";


export async function authenticate(prevState: unknown, formData: FormData): Promise<boolean> {
  const { username, password } = Object.fromEntries(formData) as { username: string; password: string };
  try {
    await signIn('credentials', { username, password, redirect: false });
    return true;
  } catch (error) {
    return false;
  }
}