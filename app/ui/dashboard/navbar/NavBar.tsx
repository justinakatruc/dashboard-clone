"use client";
import { usePathname } from "next/navigation";
import { MdSearch, MdOutlineChat, MdNotifications, MdPublic } from 'react-icons/md';

function NavBar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center justify-between px-6 py-5 bg-(--bgSoft) rounded-xl">
      <span className="capitalize text-(--textSoft) font-bold">{pathname.split("/").pop()}</span>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 bg-[#2e374a] p-2 rounded-xl">
          <MdSearch />
          <input type="text" placeholder="Search..." className="font-light text-sm text-(--text)"/>
        </div>
        <div className="flex items-center gap-6 text-xl">
          <MdOutlineChat />
          <MdNotifications />
          <MdPublic />
        </div>
      </div>
    </div>
  );
}

export default NavBar;