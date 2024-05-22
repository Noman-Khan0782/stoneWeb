import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import contact from "../assets/contact.png";

export const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  }, []);
  return (
    <section
      id="contact"
      className="w-[90%] m-auto flex lg:flex-row flex-col justify-between 
    items-center gap-28 py-20"
    >
      <div data-aos="zoom-in" data-aos-delay="" className="lg:w-[50%] w-full">
        <img src={contact} alt="" />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="lg:w-[50%] w-full flex flex-col justify-center items-start
       gap-8 lg:p-16 p-8 bg-black rounded-3xl"
      >
        <h1 className="text-white text-[40px] font-semibold">Let's Talk Your Project
        </h1>
        <div id="formbox" className="w-full bg-transparent flex flex-col justify-center 
        items-center gap-4">
          <input type="text" placeholder="Please Enter Your FullName" className="w-full bg-slate-900 px-6 py-4 
          rounded-xl text-white"/>
          <input type="email" placeholder="Please Enter Your Email" className="w-full bg-slate-900 px-6 py-4 
          rounded-xl text-white" />
          <input type="number" placeholder="Please Enter Your Contact Number" className="w-full bg-slate-900 px-6 py-4 
          rounded-xl text-white"/>
          <textarea name="" id="" placeholder="Please Enter Your Message" rows="6" className="w-full bg-slate-900 px-6 py-4 
          rounded-xl text-white"></textarea>
          <button className="bg-yellow-500 text-white w-full px-6 py-4 
          rounded-md hover:bg-orange-500
          font-semibold">Submite Now</button>
        </div>
      </div>
    </section>
  );
};
