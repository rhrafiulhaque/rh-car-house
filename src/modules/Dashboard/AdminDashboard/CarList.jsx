import { faEdit, faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdminDashboardLayout from "./AdminDashboardLayout";

const CarList = () => {
  return (
    <AdminDashboardLayout>
      <div className="p-5 text-white ">
        <div className="mx-auto my-5 w-full rounded-xl p-9 max-md:px-4 lg:my-10 lg:p-11 ">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Car List
          </h2>
          <table class="w-full lg:block text-sm text-left rtl:text-right dark:text-gray-400 ">
            <thead class="text-xs  uppercase bg-transparent border-b border-white ">
              <tr>
                <th scope="col" class="px-2 py-3">
                  SL
                </th>
                <th scope="col" class="px-2 py-3">
                  Car Name
                </th>
                <th scope="col" class="px-2 py-3">
                  Car Engine
                </th>
                <th scope="col" class="px-2 py-3">
                  Car Model Year
                </th>
                <th scope="col" class="px-2 py-3">
                  Car CC
                </th>
                <th scope="col" class="px-2 py-3">
                  Milage
                </th>
                <th scope="col" class="px-2 py-3">
                  Color
                </th>
                <th scope="col" class="px-2 py-3">
                  AC/Non-AC
                </th>
                <th scope="col" class="px-2 py-3">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-transparent border-b  ">
                <th scope="row" class="px-2 py-4 font-medium   dark:text-white">
                  01
                </th>
                <td class="px-2 py-4">Alion GTX</td>
                <td class="px-2 py-4">Toyota</td>
                <td class="px-2 py-4">$2999</td>
                <td class="px-2 py-4">1500</td>
                <td class="px-2 py-4">150</td>
                <td class="px-2 py-4">White</td>
                <td class="px-2 py-4">AC</td>
                <td class="px-2 py-4">
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="hover:text-green-400 duration-300 transition cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="hover:text-red-500 duration-300 transition cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      className="hover:text-red-500 duration-300 transition cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
              <tr class="bg-transparent border-b  ">
                <th scope="row" class="px-2 py-4 font-medium   dark:text-white">
                  01
                </th>
                <td class="px-2 py-4">Alion GTX</td>
                <td class="px-2 py-4">Toyota</td>
                <td class="px-2 py-4">$2999</td>
                <td class="px-2 py-4">1500</td>
                <td class="px-2 py-4">150</td>
                <td class="px-2 py-4">White</td>
                <td class="px-2 py-4">AC</td>
                <td class="px-2 py-4">
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="hover:text-green-400 duration-300 transition cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="hover:text-red-500 duration-300 transition cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      className="hover:text-red-500 duration-300 transition cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
              <tr class="bg-transparent border-b  ">
                <th scope="row" class="px-2 py-4 font-medium   dark:text-white">
                  01
                </th>
                <td class="px-2 py-4">Alion GTX</td>
                <td class="px-2 py-4">Toyota</td>
                <td class="px-2 py-4">$2999</td>
                <td class="px-2 py-4">1500</td>
                <td class="px-2 py-4">150</td>
                <td class="px-2 py-4">White</td>
                <td class="px-2 py-4">AC</td>
                <td class="px-2 py-4">
                  <div className="flex gap-2">
                    <FontAwesomeIcon
                      icon={faEdit}
                      className="hover:text-green-400 duration-300 transition cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      className="hover:text-red-500 duration-300 transition cursor-pointer"
                    />
                    <FontAwesomeIcon
                      icon={faEye}
                      className="hover:text-red-500 duration-300 transition cursor-pointer"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Mobile Responsive on Table */}

          <div className="lg:hidden md:hidden block">
            <div className="border border-white rounded-2xl mx-auto px-3 py-4 space-y-1 my-7">
              <div className="flex gap-6 items-center ">
                <img
                  src="/assets/image/cars/car_3.jpg"
                  className="h-[70px] w-[70px]"
                  alt=""
                />
                <h1>
                  <span>Axios GTR</span>
                </h1>
              </div>
              <p>Car Model- 2024Y</p>
              <p>Car Engine- GTX 4v</p>
              <p className="text-lg font-bold text-red-400">$48000</p>
              <button className="border border-gray-200 rounded-md text-base px-4 py-2 bg-transparent hover:bg-white hover:text-gray-500">
                Details
              </button>
            </div>
            <div className="border border-white rounded-2xl mx-auto px-3 py-4 space-y-1 my-7">
              <div className="flex gap-6 items-center ">
                <img
                  src="/assets/image/cars/car_3.jpg"
                  className="h-[70px] w-[70px]"
                  alt=""
                />
                <h1>
                  <span>Axios GTR</span>
                </h1>
              </div>
              <p>Car Model- 2024Y</p>
              <p>Car Engine- GTX 4v</p>
              <p className="text-lg font-bold text-red-400">$48000</p>
              <button className="border border-gray-200 rounded-md text-base px-4 py-2 bg-transparent hover:bg-white hover:text-gray-500">
                Details
              </button>
            </div>
            <div className="border border-white rounded-2xl mx-auto px-3 py-4 space-y-1 my-7">
              <div className="flex gap-6 items-center ">
                <img
                  src="/assets/image/cars/car_3.jpg"
                  className="h-[70px] w-[70px]"
                  alt=""
                />
                <h1>
                  <span>Axios GTR</span>
                </h1>
              </div>
              <p>Car Model- 2024Y</p>
              <p>Car Engine- GTX 4v</p>
              <p className="text-lg font-bold text-red-400">$48000</p>
              <button className="border border-gray-200 rounded-md text-base px-4 py-2 bg-transparent hover:bg-white hover:text-gray-500">
                Details
              </button>
            </div>
            <div className="border border-white rounded-2xl mx-auto px-3 py-4 space-y-1 my-7">
              <div className="flex gap-6 items-center ">
                <img
                  src="/assets/image/cars/car_3.jpg"
                  className="h-[70px] w-[70px]"
                  alt=""
                />
                <h1>
                  <span>Axios GTR</span>
                </h1>
              </div>
              <p>Car Model- 2024Y</p>
              <p>Car Engine- GTX 4v</p>
              <p className="text-lg font-bold text-red-400">$48000</p>
              <button className="border border-gray-200 rounded-md text-base px-4 py-2 bg-transparent hover:bg-white hover:text-gray-500">
                Details
              </button>
            </div>
          </div>
          {/* Mobile Responsive on Table */}
        </div>
      </div>
    </AdminDashboardLayout>
  );
};

export default CarList;
