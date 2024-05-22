import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import about from "../assets/about.jpg";
import { IoDiamond } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";
import { counts } from "../export";
const About = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <>
      <section
        id="about"
        className="w-[90%] m-auto flex lg:flex-row flex-col justify-between 
   items-center gap-28 py-20 "
      >
        <div>
          <img
            data-aos="zoom-in"
            data-aos-delay="200"
            src={about}
            alt=""
            className="lg:w-[1000px] lg:h-[550px] rounded-3xl"
          />
        </div>
        <div
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex flex-col justify-center lg:items-start items-center gap-4"
        >
          <h1 className="text-red-600 text-[23px] font-bold">WHO WE ARE</h1>
          <h1
            className="text-black font-semibold lg:text-[60px] text-[50px]
        lg:leading-[70px] leading-[60px] "
          >
            ZN <IoDiamond  />
            Treasures Of The Earth
          </h1>
          <p className="lg:text-[22px] text-[18px] text-slate-700">
          Welcome to "ZN Treasures Of The Earth", where we make beautiful, high-quality jewelry. 
          Find timeless pieces perfect for celebrating life's special moments.
          </p>

          <div className="flex flex-col justify-center items-start gap-4">
            <p
              data-aos="zoom-in"
              data-aos-delay="400"
              className="text-black flex justify-center
         items-center gap-3 lg:text-2xl"
            >
              <GrFormNext className="size-40 text-yellow-500" />
              To provide High-quality gold, platinum, diamonds, and gemstones and focus 
              on Quality, integrity, customer satisfaction
            </p>
            
            <p
              data-aos="zoom-in"
              data-aos-delay="400"
              className="text-black flex justify-center
         items-center gap-3 lg:text-2xl"
            >
              <GrFormNext className="size-40 text-yellow-500" />
              To provide timeless pieces that celebrate life's special moments.
              High-quality gemstones at competitive prices.
            </p>
            <p
              data-aos="zoom-in"
              data-aos-delay="400"
              className="text-black flex justify-center
         items-center gap-3 lg:text-2xl"
            >
              <GrFormNext className="size-40 text-yellow-500" />
              We offer bespoke Gemstone to match your unique style and preferences.
              Visit us in-store or browse our collection online.
            </p>
          </div>
          <button
            className="bg-orange-500 px-6 py-4 rounded-full text-[17px] 
        font-semibold hover:bg-black text-white"
          >
            Discover More
          </button>
        </div>
      </section>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className=" bg-black w-[90%] m-auto p-20 flex  lg:flex-row flex-col justify-center items-center gap-20 rounded-3xl"
      >
        {counts.map((item, index) => (
          <div data-aos="zoom-in"
            data-aos-delay="200"
            key={index}
            className="flex flex-col text-justify-center items-center gap-10"
          >
            <h1 className="text-7xl text-yellow-400 font-semiboldgap-10 ">
              {item.value}
            </h1>
            <p className="text-white text-xl font-semibold ">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default About;
