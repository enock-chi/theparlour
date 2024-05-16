"use client";

import React, { useState } from "react";
import Image from "next/image";
import Drawer from "./Drawer";
import logo from "../public/images/IMG_7066.jpg";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const [bar, setBar] = useState(true);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="fixed z-50 flex justify-center items-center w-screen h-[13vh]">
      <div className="w-[95vw] flex items-center h-[8vh] bg-white rounded-2xl ">
        <div className="w-[47vw] pl-[2vw]">
          <Image
            alt="logo"
            src={logo}
            className="w-[60px] h-[50px] rounded-full"
          />
        </div>
        <div className="w-[47vw] h-[2vh] flex justify-center pr-[3vw]">
          {isMobileMenuOpen ? (
            <i
              className="bi bi-menu-button-wide text-black text-[1.5rem] ml-auto"
              onClick={toggleMobileMenu}
            ></i>
          ) : (
            <i
              className="bi bi-x-diamond text-black text-[1.5rem] ml-auto"
              onClick={toggleMobileMenu}
            ></i>
          )}
        </div>
      </div>
      <Drawer isVisible={isMobileMenuOpen} />
    </div>
  );
};
