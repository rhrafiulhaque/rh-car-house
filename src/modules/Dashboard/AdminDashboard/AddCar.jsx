import React from "react";
import AdminDashboardLayout from "./AdminDashboardLayout";

const AddCar = () => {
  return (
    <AdminDashboardLayout>
      <div className="p-5">
        <form className="mx-auto my-5 w-full max-w-[740px] rounded-xl border border-[#fefeff]  p-9 max-md:px-4 lg:my-10 lg:p-11 ">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Add A Beautiful Car
          </h2>

          <div className="space-y-9 text-white lg:space-y-10">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="name">Car Name</label>
              <input
                className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="engine">Car Engine</label>
              <input
                className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                type="text"
                name="engine"
                id="engine"
                required
              />
            </div>

            <div className="flex gap-9">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="modelYear">Car Model Year</label>
                <input
                  className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                  type="text"
                  name="modelYear"
                  id="modelYear"
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="cc">Car CC</label>
                <input
                  className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                  type="cc"
                  name="cc"
                  id="cc"
                  required
                />
              </div>
            </div>

            <div className="flex gap-9">
              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="color">Color</label>
                <input
                  className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                  type="text"
                  name="color"
                  id="color"
                  required
                />
              </div>

              <div className="space-y-2 lg:space-y-3">
                <label htmlFor="milage">Milage</label>
                <input
                  className="block w-full rounded-md border border-[#f6f9ff] bg-transparent  px-3 py-2.5"
                  type="milage"
                  name="milage"
                  id="milage"
                  required
                />
              </div>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="ac_nonac">AC/Non-AC</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-black border border-[#f6f9ff]   px-3 py-2.5"
                name="ac_nonac"
                id="ac_nonac"
                required
              >
                <option value="">Select Option</option>
                <option value="Ac">AC</option>
                <option value="Non Ac">Non AC</option>
              </select>
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="description">Car Description</label>
              <textarea
                className="block bg-transparent border border-[#f6f9ff] min-h-[120px] w-full rounded-md  px-3 py-2.5 lg:min-h-[180px]"
                type="text"
                name="description"
                id="description"
                required
              ></textarea>
            </div>
          </div>

          <div className="mt-16 flex justify-center lg:mt-20">
            <button
              type="submit"
              className="rounded bg-[#2D323F] px-4 py-2 text-white transition-all hover:opacity-80 duration-300"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </AdminDashboardLayout>
  );
};

export default AddCar;
