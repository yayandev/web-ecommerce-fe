"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarAccount = () => {
  const pathname = usePathname();
  return (
    <div className="w-72 px-5 py-5 sm:py-10 hidden sm:flex gap-3 flex-col border-r">
      <Link
        href="/profile"
        className={`font-semibold text-sm hover:text-red-500 ${
          pathname == "/profile" && "text-red-500"
        }`}
      >
        Profile
      </Link>
      <Link
        href="/changepassword"
        className={`font-semibold text-sm hover:text-red-500 ${
          pathname == "/changepassword" && "text-red-500"
        }`}
      >
        Change Password
      </Link>
    </div>
  );
};

export default SidebarAccount;
