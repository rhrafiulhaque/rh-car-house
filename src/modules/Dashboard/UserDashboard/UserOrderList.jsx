import UserDashboardLayout from "./UserDahboardLayout";

const UserOrderList = () => {
  return (
    <UserDashboardLayout>
      <div className="p-5 text-white ">
        <div className="mx-auto  w-full rounded-xl p-9 max-md:px-4  ">
          <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
            Order List
          </h2>

          <table class="mx-auto text-sm text-left rtl:text-right dark:text-gray-400 ">
            <thead class="text-xs  uppercase bg-transparent border-b border-white ">
              <tr>
                <th scope="col" class="px-2 py-3">
                  SL
                </th>
                <th scope="col" class="px-2 py-3">
                  Order Id
                </th>
                <th scope="col" class="px-2 py-3">
                  Car Name
                </th>
                <th scope="col" class="px-2 py-3">
                  Car Price
                </th>
                <th scope="col" class="px-2 py-3">
                  Customer Name
                </th>
                <th scope="col" class="px-2 py-3">
                  Customer Email
                </th>
                <th scope="col" class="px-2 py-3">
                  Transaction ID
                </th>
                <th scope="col" class="px-2 py-3">
                  Order Date
                </th>
                <th scope="col" class="px-2 py-3">
                  Order Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-transparent border-b  ">
                <th scope="row" class="px-2 py-4 font-medium   dark:text-white">
                  01
                </th>
                <td class="px-2 py-4">s3j4i8jaifkvndolsf</td>
                <td class="px-2 py-4">Toyota GTX</td>
                <td class="px-2 py-4">$46000</td>
                <td class="px-2 py-4">Sabbir Chowdhury</td>
                <td class="px-2 py-4">sabbir@gmail.com</td>
                <td class="px-2 py-4">2DIOE342F32</td>
                <td class="px-2 py-4">16 October,2024</td>
                <td class="px-2 py-4">
                  <div className="bg-yellow-200 px-4 py-2 rounded-xl text-red-300">
                    Pending
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
    </UserDashboardLayout>
  );
};

export default UserOrderList;
