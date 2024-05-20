import React, { useEffect } from "react";
import AOS from "aos";
import client from "../assets/clients.png";
import banner from "../assets/herobanner.png";
import img from "../assets/khan.jpg";
import "aos/dist/aos.css";
import { IoDiamond } from "react-icons/io5";
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
      items-center gp-28 py-20 sm:px-20 sm:bg-cover rounded-3xl "
    >
      <div className="flex flex-col justify-center items-start gap-8">
        <h1
          data-aos="zoom-in"
          data-aos-delay=""
          className="text-white font-bold 
        lg:text-[70px] text-[65px] lg:leading-[100px] leading-[80px]"
        >
          ZN
          <IoDiamond />
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay=""
          className="text-white font-bold 
        lg:text-[50px] text-[40px] lg:leading-[100px] leading-[80px]"
        >
          Treasures Of The Earth
        </h1>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-[25px]
         text-white "
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

          <p className="text-white font-bold text-[20px] ">
            Trusted by 5000+ Worldwide Brand and Customers
          </p>
        </div>
      </div>
      <div>
        <img
          data-aos="zoom-in"
          data-aos-delay="1000"
          src={banner}
          className="lg:w-[750px] lg:h-[550px] "
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
