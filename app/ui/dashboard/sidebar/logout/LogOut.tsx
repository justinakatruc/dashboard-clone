"use client";

import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

function LogOut() {
  const handleLogOut = () => {
    signOut({ callbackUrl: "/login" }); // redirect after logout
  };

  return (
    <button
      onClick={handleLogOut}
      className="mt-4 flex items-center gap-2 text-red-500 hover:text-red-700"
      type="button"
    >
      <MdLogout />
      Logout
    </button>
  );
}

export default LogOut;
