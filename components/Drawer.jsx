"use client";

import React from "react";
import { useRouter } from "next/navigation";
import navbar from "@/temp/navbar";
import Link from "next/link";

const Drawer = ({ isVisible }) => {
  const router = useRouter();
  const menuStyle = {
    transform: isVisible ? "translateX(0)" : "translateX(-85vw)",
    transition: "transform 1s ease",
  };

  return (
    <div
      className="fixed z-100 top-[10.6vh] px-[10vw] pt-[7vh] w-[86vw] h-[100vh] backdrop-blur-lg right-[-85vw] rounded-sm"
      style={menuStyle}
    >
      <div className="relative left-[27vw]">
        <i className="bi bi-clipboard2-fill text-black opacity-60 text-[3rem]"></i>
      </div>
      <ul className="space-y-[4vw]">
        {navbar.map((item) => (
          <li
            key={item.name}
            className="bg-black opacity-60 rounded-lg h-auto pl-[3vw] flex items-center"
          >
            <Link href={item.link} className="text-[1.8rem]">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="relative w-[40vw] h-[5vh] top-[5vh] left-[13vw] flex space-x-[10vw] rounded-lg pt-[0.7vh] bg-black opacity-60 items-center justify-center mt-[3vh]">
        <Link href={"https://www.tiktok.com/@tamia.s_beautypalour?_t=8iQoaH5gB8A&_r=1"}>
          <i className="bi bi-tiktok "></i>
        </Link>
        <Link href={"3"}>
          <i className="bi bi-telephone-fill"></i>
        </Link>
        <Link href={"https://www.instagram.com/tamia.s_beautypalour/?hl=en"}>
          <i className="bi bi-instagram"></i>
        </Link>
      </div>
    </div>
  );
};

export default Drawer;
