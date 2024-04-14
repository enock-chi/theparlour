import Image from "next/image";
import banner from '../public/images/IMG_7055.png'
import { Welcoming } from "@/section/Welcoming"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-auto pt-[20vh]">
      <div className="absolute flex justify-center items-center w-[20vw] h-[11vh] top-[72vh] rounded-full">
        <i class="bi bi-arrow-down-circle text-[3rem]"></i>
      </div>
      <div className="w-[100vw]">
        <Image alt='banner' src={banner} className=""/>
      </div>
      <Welcoming />
    </div>
  );
}
