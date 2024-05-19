"use client";

import React from "react";
import Link from "next/link";
import FooterDropDown from "./FooterDropDown";

const Footer = () => {
  return (
    <div className="relative w-full h-auto pt-[2vh]">
      <div className="w-full min-h-[50vh] border border-black rounded-t-[2rem] px-[5vw] pt-[5vh]">
        <p className="text-black mx-auto w-full h-auto inline-block py-[1vh] text-center font-bold text-[1.2rem]">
          Be the first to hear about new treatments, promotions and tips to get
          that feeling.
        </p>
        <div className=" w-[40vw] h-[5vh] top-[5vh] mx-auto flex space-x-[10vw] rounded-lg pt-[0.7vh] bg-black opacity-60 items-center justify-center">
          <Link href={"#"}>
            <i className="bi bi-tiktok "></i>
          </Link>
          <Link href={"3"}>
            <i className="bi bi-telephone-fill"></i>
          </Link>
          <Link href={"3"}>
            <i className="bi bi-instagram"></i>
          </Link>
        </div>
        <div className="py-[3vh]">
          <FooterDropDown title={"Services"} options={""} />
          <FooterDropDown title={"Your Parlour"} options={""} />
          <FooterDropDown title={"Company"} options={""} />
        </div>
        <hr className="w-full border-black" />
      </div>
    </div>
  );
};

export default Footer;
