import Image from "next/image";
import banner from '../public/images/IMG_7055.png'
import { Welcoming } from "@/section/Welcoming"

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full h-auto pt-[15vh]">
      <div className="absolute flex justify-center items-center w-[20vw] h-[11vh] top-[80vh] rounded-full">
        <i class="bi bi-arrow-down-circle text-2xl"></i>
      </div>
      <div className="w-[100vw]">
        <Image alt='banner' src={banner} className=""/>
      </div>
      <Welcoming />
    </div>
  );
}
