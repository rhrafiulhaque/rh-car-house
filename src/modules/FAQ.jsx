import React from "react";

const FAQ = () => {
  return (
    <div className="bg-[#FFF4F4]">
      <div className="container m-auto">
        <div className=" lg:py-24 lg:px-28 px-5">
          <div className="text-center py-12">
            <h4 className="text-2xl text-[#FF1E13] font-semibold">
              Frequently Asked Question
            </h4>
            <h1 className="text-4xl font-bold">General Questions</h1>
          </div>
          <div>
            <details className="border border-gray-200 rounded my-5">
              <summary class=" py-3 px-4 cursor-pointer font-semibold text-xl select-none w-full outline-none">
                What is the total cost of ownership?
              </summary>
              <p class="pt-1 pb-3 px-4 bg-white ">
                Understanding the total cost, including insurance, maintenance,
                and fuel, is crucial. This gives you a clearer picture of your
                long-term financial commitment and helps avoid surprises after
                the purchase.
              </p>
            </details>
            <details className="border border-gray-200 rounded my-5">
              <summary class="  py-3 px-4 cursor-pointer font-semibold text-xl select-none w-full outline-none">
                Should I buy new or used?
              </summary>
              <p class="pt-1 pb-3 px-4 bg-white">
                New cars offer the latest features and warranties, while used
                cars can be more affordable and depreciate less. Weigh your
                budget, needs, and long-term goals to make the best choice.
              </p>
            </details>
            <details className="border border-gray-200 rounded my-5">
              <summary class="  py-3 px-4 cursor-pointer font-semibold text-xl select-none w-full outline-none">
                How do I finance my purchase?
              </summary>
              <p class="pt-1 pb-3 px-4 bg-white">
                Explore various financing options like loans, leasing, or
                dealership financing. Compare interest rates and terms to find
                the best fit for your budget and ensure you understand all
                associated costs.
              </p>
            </details>
            <details className="border border-gray-200 rounded my-5">
              <summary class="  py-3 px-4 cursor-pointer font-semibold text-xl select-none w-full outline-none">
                What should I look for during a test drive?
              </summary>
              <p class="pt-1 pb-3 px-4 bg-white">
                Pay attention to comfort, visibility, and noise levels. Test
                acceleration, braking, and handling to ensure the car meets your
                expectations. A thorough test drive helps you feel confident in
                your decision.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
