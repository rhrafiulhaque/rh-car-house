import React from "react";
import UserDashboardLayout from "./UserDahboardLayout";

const UserProfile = () => {
  return (
    <UserDashboardLayout>
      <div>
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl py-5 ">My Profile</h1>
          <img
            src="/assets/image/person.png"
            className="w-32 h-32 rounded-full"
            alt=""
          />
        </div>

        <form action="" className=" border border-white rounded-xl py-5">
          <div className="space-y-9 px-8 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="name">Name</label>
              <input
                className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="name">Email</label>
              <input
                className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="name">Phone</label>
              <input
                className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                type="number"
                name="phone"
                id="phone"
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="name">Address</label>
              <input
                className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                type="text"
                name="address"
                id="address"
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="name">Gender</label>
              <select
                name=""
                id=""
                className="block w-full rounded-md border border-[#f6f9ff] bg-black  px-3 py-2.5"
              >
                <option
                  className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                  value=""
                >
                  Male
                </option>
                <option
                  className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                  value=""
                >
                  Female
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </UserDashboardLayout>
  );
};

export default UserProfile;
