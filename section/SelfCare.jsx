"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import selfcare from "@/temp/selfcare";
import Link from "next/link";
import banner from "@/public/images/IMG_70.jpg";

const SelfCare = () => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(selfcare[active]);
  const [loaded, setLoaded] = useState([]);

  useEffect(() => {
    setImages(selfcare[active]);
    setLoaded(new Array(selfcare[active].icons.length).fill(false));
  }, [active]);

  const handleBarClick = (key) => {
    setActive(key);
  };

  const handleImageLoad = (index) => {
    setLoaded((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center">
      <hr className="w-full border-black"></hr>
      <div className="flex w-full h-auto">
        <div className="group w-[20vw] h-[85vh] border-r border-black flex flex-col items-center pt-[8vh] space-y-[12vh] overflow-hidden">
          {selfcare.map((item, i) => (
            <button
              key={i}
              className={`${
                active === i ? "border border-black" : "border-none"
              } text-black w-[30vw] text-center text-[1.5rem] font-extrabold rotate-[-90deg] group-hover:border rounded-[1.1rem] shadow-xl`}
              onClick={() => handleBarClick(i)}
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
              <button
                key={i}
                className="backdrop-blur-lg flex items-center justify-center rounded-2xl border border-white"
              >
                <Image
                  src={`/images/${item.name}`}
                  alt=""
                  width={200}
                  height={200}
                  className={`image transition-opacity duration-[2s] ${
                    loaded[i] ? "" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad(i)}
                  priority
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfCare;
