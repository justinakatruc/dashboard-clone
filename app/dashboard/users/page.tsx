import { Suspense } from "react";
import Search from "@/app/ui/dashboard/search/Search";
import Link from "next/link";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
import Image from "next/image";

interface usersProps {
  id: number,
  _id: string,
  img: string,
  username: string,
  email: string,
  createdAt?: string,
  isAdmin?: string,
  isActive?: string,
}

const users: usersProps[] = [
  {
    id: 1,
    _id: "123",
    img: "",
    username: "admin",
    email: "mt123@gmail.com",
  },
  {
    id: 2,
    _id: "1234",
    img: "",
    username: "joey",
    email: "mt1234@gmail.com",
  },
]

function UsersPage() {
  return (
    <div className="flex flex-col gap-4 p-4 bg-(--bgSoft) rounded-xl">
      <div className="flex justify-between">
        <Suspense fallback={<div>Loading search...</div>}>
          <Search placeholder="Search for a user..." />
        </Suspense>
        <Link href="/dashboard/users/add">
          <button className="bg-[#5d57c9] text-black p-2 rounded-lg text-sm">Add New</button>
        </Link>
      </div>
      <table className="w-full ml-4">
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map(user=>(
            <tr key={user._id}>
              <td>
                <div className="flex gap-4 mt-4">
                  <Image 
                    src={user.img || "/noavatar.png"} 
                    alt="" 
                    width={40} 
                    height={40} 
                    className="rounded-full" 
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user.createdAt?.toString().slice(4, 16)}</td>
              <td>{user.isAdmin ? "Admin" : "Client"}</td>
              <td>{user.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className="flex gap-2 items-center">
                  <Link href={`/dashboard/users/${user.id}`}>
                    <button className={"bg-green-900 py-1 px-2 rounded-lg cursor-pointer"}>
                      Edit
                    </button>
                  </Link>
                  <form /*action={deleteUser}*/>
                    <input type="hidden" name="id" value={user.id} />
                    <button className={"bg-red-900 py-1 px-2 rounded-lg cursor-pointer"}>
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Suspense fallback={<div>Loading pagination...</div>}>
        <Pagination count={1}/>
      </Suspense>
    </div>
  );
}

export default UsersPage