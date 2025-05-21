import { signIn } from "next-auth/react";

export async function authenticate(formData: FormData): Promise<string> {
  const { username, password } = Object.fromEntries(formData);

  const result = await signIn("credentials", {
    username,
    password,
    redirect: false,
  });

  if (result?.error) {
    return "Wrong username or password";
  }

  return "Logged in";
}
