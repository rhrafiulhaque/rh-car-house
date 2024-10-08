import React from "react";

const SingleBlog = () => {
  return (
    <div className="p-5">
      <img
        className="w-full h-[250px] object-cover"
        src="https://img.freepik.com/free-photo/young-man-choosing-car-car-salon_1303-28478.jpg"
        alt=""
      />
      <div className="flex justify-between pt-1">
        <p className="text-base text-gray-400">Oct 15,2023</p>
        <p className="text-base text-gray-400">By RH Car House</p>
      </div>
      <h1 className="text-2xl font-semibold py-3">
        Car Dealership or Vehicle Distribution
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
        molestiae temporibus quisquam maxime a minima officia nobis reiciendis!
        Provident, blanditiis.
      </p>
    </div>
  );
};

export default SingleBlog;
