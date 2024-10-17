import {
  faLocation,
  faMailBulk,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FacebookSvg from "../SocialSVG/FacebookSvg";
import InstagramSvg from "../SocialSVG/InstagramSvg";
import LinkdinSvg from "../SocialSVG/LinkdinSvg";
import TwitterSvg from "../SocialSVG/TwitterSvg";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1A1A1A] py-[120px] text-white px-4">
        <div className="container m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
            <div className="">
              <img
                className="w-[100px]"
                src="/assets/image/car_logo.png"
                alt=""
              />
              <p>
                RH Car House offers a diverse selection of quality vehicles,
                exceptional customer service, and expert advice. Our commitment
                is to help you find the ultimate car that suits your needs
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold py-4">Contact</h4>
              <div>
                <p>
                  {" "}
                  <FontAwesomeIcon icon={faLocation} className="pr-2" />
                  18/8 Gulshan, Dhaka-1212, Bangladesh
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} className="pr-2" />
                  +8801700*******
                </p>
                <p>
                  <FontAwesomeIcon icon={faMailBulk} className="pr-2" />
                  rhrafiulhaque@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-semibold py-4">Help</h1>
              <ul>
                <li className="list-disc">
                  <a href="">Customer Support</a>
                </li>
                <li className="list-disc">
                  <a href="">Terms & Conditions</a>
                </li>
                <li className="list-disc">
                  <a href="">Privacy Policy</a>
                </li>
              </ul>

              <h4 className="my-2">Follow Us:</h4>
              <div className="flex gap-4 my-4 items-center">
                <div className="bg-[#FFFFFF] px-[10px] py-[10px] text-2xl rounded-full text-black">
                  <FacebookSvg />
                </div>
                <div className="bg-[#FFFFFF] px-[10px] py-[10px] text-2xl rounded-full text-black">
                  <TwitterSvg />
                </div>
                <div className="bg-[#FFFFFF] px-[10px] py-[10px] text-2xl rounded-full text-black">
                  <LinkdinSvg />
                </div>
                <div className="bg-[#FFFFFF] px-[10px] py-[10px] text-2xl rounded-full text-black">
                  <InstagramSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="bg-slate-500 p-4 text-center text-white ">
        Copyright By RH Car House @2024
      </h1>
    </>
  );
};

export default Footer;
