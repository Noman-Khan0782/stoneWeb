import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { IoTime } from "react-icons/io5";
import { ImYoutube2 } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoDiamondSharp } from "react-icons/io5";
import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <>
    <section id="footer">
      <div
        className="w-full bg-black m-auto grid lg:grid-cols-3 grid-cols-1 justify-between items-start
    lg:gap-28 gap-16 lg:p-20 p-10 "
      >
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-white text-[40px] font-semibold ">
            Let's Start Working Together get in touch!
          </h1>
          <button
            className="bg-yellow-500 px-6 py-4 rounded-full text-black 
        font-semibold hover:bg-white hover:text-"
          >
            Get Start Now!
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white font-semibold text-2xl">
            Contact Information
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3">
              <FaMapLocationDot className="text-yellow-500 lg:size-14 size-10" />
              <span className="text-slate-100 text-[16px]">
                "ZN Treasures Of The Earth" , Shop No.32 , Main Saddar Bazar ,
                Peshawar
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaPhoneVolume className="text-yellow-500 lg:size-8 size-6" />
              <span className="text-slate-100 text-[16px]">
                +92 3020906151 , +92 3139137173{" "}
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <MdMarkEmailRead className="text-yellow-500 lg:size-9 size-7" />
              <span className="text-slate-100 text-[16px]">
                suport@zntresureoftheworld.com
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <IoTime className="text-yellow-500 lg:size-9 size-7" />
              <span className="text-slate-100 text-[16px]">10:00 - 20:00</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white font-semibold text-2xl">
            Follow and Subscribe
          </h1>
          <div className="flex flex-col justify-center items-start gap-4">
            <p className="flex justify-center items-center gap-3">
              <ImYoutube2 className="text-yellow-500 lg:size-12 size-10" />
              <span className="text-slate-100 text-[16px]">
                "ZN Treasures Of The Earth"
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <ImFacebook2 className="text-yellow-500 lg:size-8 size-6" />
              <span className="text-slate-100 text-[16px]">
                ZN Treasures Of The Earth{" "}
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaInstagramSquare className="text-yellow-500 lg:size-9 size-7" />
              <span className="text-slate-100 text-[16px]">
                ZN Treasures Of The Earth
              </span>
            </p>
            <p className="flex justify-center items-center gap-3">
              <FaTwitterSquare className="text-yellow-500 lg:size-9 size-7" />
              <span className="text-slate-100 text-[16px]">
                ZN Treasures Of The Earth
              </span>
            </p>
          </div>
        </div>
      </div>

      <section
        className="w-full bg-black border-y-2 border-slate-700 
      gride-lg:gride-cols-3 gride-cols-1 justify-between items-center 
      lg:gap-28 gap-8 px-20 py-6"
      >
        <div>
          <h1 className="text-white text-[17px] text-center">
            Copyright 2024 , ZN Treasures Of The Earth , All Rights Reserved
          </h1>
        </div>
        <div>
          <p className="text-white text-4xl font-bold text-center">
            Z <span className="text-yellow-400 italic">N </span>
            <span></span>
          </p>
          <p className="text-white text-4xl font-bold text-center flex justify-center items-center">
            <IoDiamondSharp />
          </p>
        </div>
        <div className="flex lg:justify-end justify-center items-center gap-4">
          <ImYoutube2 className="text-yellow-500 lg:size-12 size-10" />
          <ImFacebook2 className="text-yellow-500 lg:size-8 size-6" />
          <FaInstagramSquare className="text-yellow-500 lg:size-9 size-7" />
          <FaTwitterSquare className="text-yellow-500 lg:size-9 size-7" />
        </div>
      </section>
    </section>

    <div id="icon-box" className="bg-blue-400 text-black p-3 rounded-full
    hover:bg-yellow-500 hover:text-black cursor-pointer fixed lg:bottom-6 right-6
    bottom-6">
<Link to="hero" spy={true} offset={-100} smooth={true}>
    <FaArrowUp className="w-[35px] h-[35px]" />
  </Link>
    </div>
  
    </>
  );
};

export default Footer;
