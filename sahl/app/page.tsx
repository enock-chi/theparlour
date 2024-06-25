import Image from "next/image";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen pt-[3vh] px-[5vw]">
      <div className="block md:hidden flex-col w-full h-full overflow-hidden ">
        <div className="flex flex-col w-full items-center justify-center pb-[2vh]"><span className="font-extrabold text-blue-950 text-2xl outline-text">Home of,</span><span className="font-extrabold text-blue-950 text-2xl outline-text">Fives Hockey</span></div>
        <div className="w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl"><Carousel /></div>
        <div className=" w-full pt-[6vh] space-y-[2vh]">
        <div className="flex w-full h-[6vh]">
          <button className="w-1/2 h-full bg-white text-blue-950 rounded-l-xl font-extrabold">Register</button>
          <button className="w-1/2  h-full bg-blue-950 rounded-r-xl text-white font-extrabold" >Login</button>
        </div>
        <button className="w-full h-[6vh] bg-orange-600 rounded-xl text-blue-950 font-extrabold">Fixtures</button>
      </div>
      </div>
      
      {/**==============================================Please Try Mobile========================================= */}
      <div className="hidden md:flex w-[20vw] h-[10vh] border border-blue-950 justify-center items-center rounded-2xl">
        <p className="text-blue-950 text-center">Please try mobile view.</p>
      </div>
    </div>
  );
}
