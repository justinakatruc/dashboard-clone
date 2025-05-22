import IconLink from "./iconlink/IconLink";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";
import Image from "next/image";
import { signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];



function SideBar() {
  return (
    <div className="sticky top-0 bg-(--bgSoft) min-h-svh flex flex-col gap-4 py-10 px-5">
      <div className="flex items-center gap-5">
        <Image className="rounded-full" src={"/noavatar.png"} width={50} height={50} alt={"user-avatar"}/>
        <span className="text-md">admin</span>
      </div>
      <ul className="flex flex-col">
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className="text-(--textSoft) font-bold text-sm">{cat.title}</span>
            <ul className="flex flex-col gap-1">
              {cat.list.map((item) => (
                <IconLink key={item.title} item={item} />
              ))}
            </ul>
          </li>
        ))}
        <form action={async () => {
        "use server";
        await signOut({redirectTo: "/login"});
      }}>      
        <button className="mt-4 flex items-center gap-2 text-red-500 hover:text-red-700">
          <MdLogout />
          Logout
        </button>
      </form>
      </ul>
    </div>
  );
}

export default SideBar;