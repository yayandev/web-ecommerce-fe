"use client";
import SidebarAccount from "@/components/layouts/SidebarAccount";
const ChangePasswordView = () => {
  return (
    <div className="flex w-full gap-5">
      <SidebarAccount />
      <div className="flex-1 w-full space-y-3 py-5 sm:py-10">
        <h1 className="text-red-500 font-semibold text-lg">
          Edit Your Profile
        </h1>
        <form action="" className="w-full space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="" className="w-full font-semibold text-sm">
                New Password
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-sm bg-gray-200 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="" className="w-full font-semibold text-sm">
                Confirm New Password
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-sm bg-gray-200 focus:outline-none"
              />
            </div>
          </div>
          <button className="py-2 px-5 rounded hover:opacity-80 bg-red-500 text-white font-semibold">
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePasswordView;
