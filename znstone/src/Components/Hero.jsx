import React, { useEffect } from "react";
import AOS from "aos";
import client from "../assets/clients.png";
import banner from "../assets/zeenat.jpg";
import img from "../assets/khan.jpg";
import noman from "../assets/noman.jpg";
import "aos/dist/aos.css";
// import { IoDiamond } from "react-icons/io5";
import { IoDiamondSharp } from "react-icons/io5";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${img})` }}
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between 
      items-center gp-28 py-20 sm:px-20 sm:bg-cover rounded-3xl bg-blur-md "
    >
      <div className="flex flex-col justify-center items-start gap-8">
        <p
          data-aos="zoom-in"
          data-aos-delay=""
          className="text-white lg:text-6xl text-5xl font-bold text-center items-start lg:ml-50 ml-28 bg-black rounded-2xl"
        >
          Z <span className="text-yellow-400 italic">N </span>
          <span>
            <IoDiamondSharp className="ms-5" />
          </span>
        </p>
        <h1
          data-aos="zoom-in"
          data-aos-delay=""
          className="text-black font-bold text-center
        lg:text-[50px] text-[43px] lg:leading-[100px] leading-[80px]"
        >
          Treasures Of The Earth
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-[25px]
         text-white  bg-gray-500 rounded-3xl pl-3"
        >
          Thank you for considering our exquisite collection of precious stones.
          We are here to assist you in finding the perfect gem that meets your
          highest expectations.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          className="bg-orange-400 px-6 py-4 rounded-full 
    text-[17px] font-semibold hover:bg-black hover:text-white "
        >
          Get Started Now
        </button>
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="flex lg:flex-row flex-col justify-center 
          lg:items-center items-start gap-7"
        >
          <img src={client} alt="" />

          <p className="text-black font-bold text-[20px] bg-yellow-400 rounded-lg pl-6 ">
            Trusted by 5000+ Worldwide Brand and Customers
          </p>
        </div>
      </div>
      <div className="flex flex-cols lg:gap-2 lg:pr-6">
        <img
          data-aos="zoom-in"
          data-aos-delay="1000"
          src={banner}
          className="lg:w-[400px] w-[150px] lg:h-[200px] rounded-full "
          alt=""
        />

        <img
          data-aos="zoom-in"
          data-aos-delay="1000"
          src={noman}
          className="lg:w-[400px] w-[150px] lg:h-[200px] rounded-full "
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
