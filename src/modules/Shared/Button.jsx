import React from "react";

const Button = ({ message }) => {
  return (
    <button className="bg-[#FF3426] px-[20px] py-[10px]  text-white border border-[#FF3426] rounded hover:bg-white hover:text-[#FF3426] duration-300 ">
      {message}
    </button>
  );
};

export default Button;
