import { faDochub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AdminDashboardLayout from "./AdminDashboardLayout";

const AdminDashboardHome = () => {
  return (
    <AdminDashboardLayout>
      <div>
        <div className="grid grid-cols-3 gap-6 mt-5">
          <div className="bg-white rounded-xl flex py-5 px-5 ">
            <FontAwesomeIcon
              icon={faDochub}
              className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
            />
            <div className="pl-[15px]">
              <h1 className="text-3xl font-bold">75</h1>
              <p className="text-xl">Total Orders</p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex py-5 px-5 ">
            <FontAwesomeIcon
              icon={faDochub}
              className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
            />
            <div className="pl-[15px]">
              <h1 className="text-3xl font-bold">75</h1>
              <p className="text-xl">Total Orders</p>
            </div>
          </div>
          <div className="bg-white rounded-xl flex py-5 px-5 ">
            <FontAwesomeIcon
              icon={faDochub}
              className="text-2xl  bg-[#D9F3EA] p-4 rounded-full "
            />
            <div className="pl-[15px]">
              <h1 className="text-3xl font-bold">75</h1>
              <p className="text-xl">Total Orders</p>
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default AdminDashboardHome;
