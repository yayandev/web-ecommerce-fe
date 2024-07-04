"use client";
import SidebarAccount from "@/components/layouts/SidebarAccount";
const ProfileView = () => {
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
                First Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-sm bg-gray-200 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="" className="w-full font-semibold text-sm">
                Last Name
              </label>
              <input
                type="text"
                className="w-full p-2 rounded-sm bg-gray-200 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="" className="w-full font-semibold text-sm">
                Email
              </label>
              <input
                type="email"
                className="w-full p-2 rounded-sm bg-gray-200 focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="" className="w-full font-semibold text-sm">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full p-2 rounded-sm bg-gray-200 focus:outline-none"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label htmlFor="" className="w-full font-semibold text-sm">
                Address
              </label>
              <textarea
                name=""
                id=""
                rows={5}
                className="w-full p-2 rounded-sm bg-gray-200 focus:outline-none"
              ></textarea>
            </div>
            <div className="space-y-1">
              <label htmlFor="" className="w-full font-semibold text-sm">
                Gender
              </label>
              <div className="flex gap-2">
                <div className="flex gap-2">
                  <input
                    type="radio"
                    checked
                    id="lk"
                    value="laki-laki"
                    name="gender"
                  />
                  <label htmlFor="lk" className="text-gray-500">
                    Laki laki
                  </label>
                </div>
                <div className="flex gap-2">
                  <input type="radio" id="p" value="perempuan" name="gender" />
                  <label htmlFor="p" className="text-gray-500">
                    Perempuan
                  </label>
                </div>
              </div>
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

export default ProfileView;
