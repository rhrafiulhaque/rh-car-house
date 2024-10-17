import React from "react";

const HowitWorks = () => {
  return (
    <div className="bg-[#FFF4F4]">
      <div className="container m-auto">
        <div className=" pt-[80px] px-4 pb-[120px]">
          <div className="text-center">
            <h1 className="text-5xl font-bold py-5">How it works </h1>
            <p className="text-xl pb-16">
              Browse our extensive vehicle listings, connect with trusted
              dealers, <br />
              negotiate your terms, and finalize your purchase effortlessly.
            </p>
          </div>

          <div className="lg:flex ">
            <div className="text-center flex flex-col items-center relative">
              <img src="/assets/image/works_flow_01.png" alt="" />
              <h1 className="font-bold text-3xl py-5 ">Customer Support</h1>
              <p className="px-[30px] py-[20px] text-md ">
                Our dedicated customer support team is available to assist you
                at every step, ensuring a smooth and satisfying experience.
              </p>
              <div className="absolute md:absolute hidden lg:block top-14 -right-28">
                <img
                  className="w-full h-full"
                  src="/assets/image/works_flow_arrow_01.png"
                  alt=""
                />
              </div>
            </div>

            <div className="text-center flex flex-col items-center">
              <img src="/assets/image/works_flow_02.png" alt="" />
              <h1 className="font-bold text-3xl py-5 ">
                Best Price Guaranteed
              </h1>
              <p className="px-[30px] py-[20px] text-md ">
                We promise the best prices on all vehicles, giving you
                confidence in your purchase and ensuring great value.
              </p>
            </div>

            <div className="text-center flex flex-col items-center relative">
              <div className="absolute hidden lg:block top-14 -left-20">
                <img
                  className="w-full h-full"
                  src="/assets/image/works_flow_arrow_02.png"
                  alt=""
                />
              </div>
              <img src="/assets/image/works_flow_03.png" alt="" />
              <h1 className="font-bold text-3xl py-5 ">Many Locations</h1>
              <p className="px-[30px] py-[20px] text-md ">
                With numerous locations worldwide, you can easily access our
                vast inventory and services, making vehicle shopping convenient
                and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
