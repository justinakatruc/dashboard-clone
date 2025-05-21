// app/login/page.tsx or /components/LoginForm.tsx
"use client";

import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

export default function LoginForm() {
  const [error, setError] = React.useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };
  React.useEffect(() => {
    // Trigger sign out on component mount
    signOut({ redirect: false });
  }, []);
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 justify-center items-center bg-(--bgSoft) p-12 rounded-lg">
      <h1 className="text-2xl font-bold">Login</h1>
      <input type="text" placeholder="username" name="username" required className="p-4 bg-(--bg) border-2 border-(--textSoft) rounded-md" />
      <input type="password" placeholder="password" name="password" required className="p-4 bg-(--bg) border-2 border-(--textSoft) rounded-md" />
      <button type="submit" className="w-full py-4 bg-green-400 rounded-md cursor-pointer">
        Log in
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
