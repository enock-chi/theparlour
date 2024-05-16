import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <div className="relative w-full h-auto">
      <div className="w-full h-[80vh] relative overflow-hidden rounded-b-[3rem] shadow-2xl">
        <Image
          src={"/images/booking.jpg"}
          alt=""
          fill={true}
          className="rounded-b-[3rem]"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute top-0 pt-[17.5vh] px-[3vw] w-full h-auto">
        <h1 className="backdrop-blur-md text-black inline-block p-3 font-bold text-[2rem] rounded-2xl border border-black">
          Tamia&apos;s Beauty Parlour
        </h1>
        <p className="text-black text-[1.3rem] px-3 mt-[2vh] rounded-2xl backdrop-blur-sm">
          <span className="font-bold ">Get the Feeling! </span>
          Unwind, rejuvenate, and enjoy the luxurious care you deserve. Every
          moment with us is a moment to treasure.
        </p>
        <hr className="mt-[5vh] w-full border-black" />
        <hr className="mt-[2vh] w-full border-black" />
        <button className="text-white bg-black mt-[5vh] font-extrabold rounded-lg text-[1.2rem] p-2 shadow-2xl">
          <span className="text-gray-500">Book</span> treatment online
        </button>
      </div>
    </div>
  );
};

export default page;
