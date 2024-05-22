import React, { useState } from "react";
import { IoDiamondSharp } from "react-icons/io5";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [ismenuopen, setIsMenuopen] = useState(false);
  const toggleMenu = () => {
    setIsMenuopen(!ismenuopen);
  };
  const closeMenu = () => {
    setIsMenuopen(false);
  };
  const naveItems = [
    {
      link: "Home",
      path: "hero",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Contact",
      path: "contact",
    },
    {
      link: "Socail Media",
      path: "footer",
    },

    {
      link: "Services",
      path: "services",
    },
  ];
  return (
    <div
      className="w-full bg-black flex justify-between items-center
    lg:px-16 px-6 py-4 sticky top-0 z-50 "
    >
      <p className="text-white text-4xl font-bold text-center items-start">
        Z <span className="text-yellow-400 italic">N </span>
        <span>
          <IoDiamondSharp className="ms-2" />
        </span>
      </p>
      <ul className="lg:flex justify-center items-center gap-8 hidden ">
        {naveItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-400 hover:text-black text-[15px]"
            to={path}
            spy={true}
            offset={100}
            smooth={true}
          >
            {link}
          </Link>
        ))}
      </ul>
      {/* Moblie menu start */}
      <div
        className="flex justify-center items-center lg:hidden 
      mt-3"
        onClick={toggleMenu}
      >
        <div>
          {ismenuopen ? (
            <FaXmark className="text-white text-3xl cursor-pointer" />
          ) : (
            <GiHamburgerMenu className="text-white text-3xl cursor-pointer" />
          )}
        </div>
      </div>
      <div className={`${ismenuopen ? 'flex' : 'hidden'} w-full h-fit 
      bg-black p-4 absolute top-[72px] left-0`} onClick={closeMenu}>
      <ul className="flex flex-col justify-center items-center gap-2 w-full">
      {naveItems.map(({ link, path }) => (
          <Link
            key={path}
            className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-yellow-400 hover:text-black text-[15px]"
            to={path}
            spy={true}
            offset={100}
            smooth={true}
          >
            {link}
          </Link>
        ))}

      </ul>
    </div>
    </div>
  );
};

export default Header;
