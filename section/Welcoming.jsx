import React from 'react'
import Image from 'next/image'
import logo from "../public/images/IMG_7057.png"

export const Welcoming = () => {
  return (
    <div className='w-full h-screen bg-black flex flex-col items-center pt-[13vh]'>
        <div className='w-full h-[25vh] flex flex-col items-center'>
            <div className='w-[75vw] flex flex-col'>
                <h3 className='font-extrabold text-[2rem]'>Tamia&apos;s</h3>
                <h3 className='font-extrabold text-[2rem] bg-white text-black text-right pr-[2vw] rounded-lg'> Beauty</h3>
                <h3 className='font-extrabold text-[2rem]'>Parlour</h3>
            </div>
        </div>
        <div className='w-[92vw] h-[58vh] bg-white rounded-xl'>
            <div className='pt-[2vh]'>
                <Image alt='Lady' src={logo} className='w-[30vw]'/>
            </div>
            <div className='relative flex flex-col justify-center items-center w-full p-[4vw]'>
                <h1 className='text-black font-extrabold text-sm absolute top-[-8vh] left-[24vw]'>Welcome to Tamia&apos;s Beauty Parlour.</h1>
                <p className='text-black text-center p-[2.5vw]'>
                    Our team&apos;s relentless passion for excellence ensures each visit is a transformative journey, tailored to your unique essence. Step into a realm of beauty redefined, where every moment is an opportunity for discovery and refinement. Here, your beauty isn&apos;t just celebrated—it&apos;s meticulously curated, a masterpiece of design and sophistication.
                </p>
            </div>
        </div>
    </div>
  )
}
