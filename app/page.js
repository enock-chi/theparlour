import Image from "next/image";
import banner from '../public/images/IMG_8831.png'
import { Welcoming } from "@/section/Welcoming"

export default function Home() {
  return (
    <div className="flex flex-col w-full h-auto pt-[11vh]">
      <div className="relative w-1/2 h-[77.7vh] bg-pink-500">
          <div className="absolute top-[2vh] px-[15vw] flex flex-col justify-center bg-white w-[70vw] h-[15vh] border border-pink-500 left-[14vw] rounded-lg">
            <h3 className='font-extrabold text-[1.4rem] text-pink-500'>Tamia&apos;s</h3>
            <h3 className='font-extrabold text-[1.4rem] bg-pink-500 h-[5vh] align-center text-right pr-[2vw] rounded-lg pt-[0.5vh]'> Beauty</h3>
            <h3 className='font-extrabold text-[1.4rem] text-pink-500'>Parlour</h3>
          </div>
      </div>
      <div className="w-[90vw] absolute pt-[16.9vh] left-[5vw]">
        <Image alt='banner' src={banner} className=" right-[1vh]" />
      </div>
      <Welcoming />
    </div>
  );
}
