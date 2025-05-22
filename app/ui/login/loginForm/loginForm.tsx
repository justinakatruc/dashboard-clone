"use client";

import { authenticate } from "@/app/lib/actions";
import React from "react";

export default function LoginForm() {
  const [state, formAction, loading] = React.useActionState(authenticate, undefined);

  React.useEffect(() => {
    if (state === true) {
      window.location.href = "/dashboard";
    }
  }, [state]);
  return (
    <form
      action={formAction}
      className="flex flex-col gap-8 justify-center items-center bg-[var(--bgSoft)] p-12 rounded-lg w-full max-w-md mx-auto"
    >
      <h1 className="text-2xl font-bold">Login</h1>

      <input
        type="text"
        placeholder="username"
        name="username"
        required
        className="p-4 w-full bg-[var(--bg)] border-2 border-[var(--textSoft)] rounded-md"
      />

      <input
        type="password"
        placeholder="password"
        name="password"
        required
        className="p-4 w-full bg-[var(--bg)] border-2 border-[var(--textSoft)] rounded-md"
      />

      <button
        type="submit"
        className="w-full py-4 bg-green-400 rounded-md cursor-pointer disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Log in"}
      </button>

      {state===false && <p className="text-red-500">Wrong username or password</p>}
    </form>
  );
}
