"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IconLinkProps {
  item: {
    path: string;
    icon: any;
    title: string;
  };
}

function IconLink({item} : IconLinkProps) {
  const pathname = usePathname();
  return (
    <Link href={item.path} className={`flex items-center gap-2 p-5 ${pathname === item.path ? "bg-[#2e374a]" : ""} rounded-lg hover:bg-[#2e374a] transition-all duration-200`}>
      {item.icon}
      {item.title}
    </Link>
  );
}

export default IconLink;