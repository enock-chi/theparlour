"use client";

import React, { useState } from "react";
import Image from "next/image";
import selfcare from "@/temp/selfcare";
import Link from "next/link";
import banner from "@/public/images/IMG_70.jpg";

const SelfCare = () => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(selfcare[active]);

  return (
    <div className="w-full h-auto flex flex-col justify-center">
      <hr className="w-full border-black"></hr>
      <div className="flex w-full h-auto">
        <div className="group w-[20vw] h-[85vh] border-r border-black flex flex-col items-center pt-[8vh] space-y-[12vh] overflow-hidden">
          {selfcare.map((item, i) => (
            <button
              key={i}
              className="border-none text-black w-[30vw] text-center text-[1.5rem] font-extrabold rotate-[-90deg] group-hover:border rounded-[1.1rem] shadow-xl"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="w-[80vw] h-[85vh] relative flex items-center justify-center">
          <Image
            src={banner}
            alt="https://unsplash.com/@fabulu75"
            style={{ objectFit: "cover" }}
            className="h-full"
          />
          <div className="grid grid-cols-2 gap-2 absolute top-0 w-[80vw] h-full p-4 items-center justify-center">
            {images.icons.map((item, i) => (
              <div
                key={i}
                className="backdrop-blur-lg flex items-center justify-center rounded-2xl"
              >
                <Image
                  src={`/images/${item.name}`}
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCare;
