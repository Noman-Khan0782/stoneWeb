import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import img from "../assets/khan.jpg";
// import servicesinfo from "../export"
import { MdOutlineReadMore } from "react-icons/md";
import { servicesinfo } from "../export";
const Services = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="services"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between 
   items-center gp-28 py-20 "
    >
      <div
        data-aos="zoom-in"
        data-aos-delay=""
        className=" bg-black lg:p-20 p-10 flex lg:flex-row flex-col 
        justify-center items-center gap-20 rounded-3xl "
      >
        {servicesinfo.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start gap-6"
          >
            <img
              src={item.icon}
              alt=""
              className="  size-40 flex items-center rounded-3xl hover:scale-125 duration-1000 "
            />
            <p
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-[18px] text-red-500 font-semibold"
            >
              {item.Rs}
            </p>

            <h1
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-[26px] text-yellow-400 font-semibold"
            >
              {item.title}
            </h1>
            <h1
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-[18px] text-orange-400 font-semibold"
            >
              Description
            </h1>
            <p
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-[18px] text-white font-semibold"
            >
              {item.about}
            </p>
            <button
              data-aos="zoom-in"
              data-aos-delay="600"
              className="text-orange-400 text-[18px] 
            font-bold flex justify-center items-center gap-3"
            >
              {item.label}
              <MdOutlineReadMore
                className="lg:size-10 size-7"
                data-aos="zoom-in"
                data-aos-delay="600"
              />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
