import React from 'react'
import Image from 'next/image'
import imge from "../public/images/IMG_7057.png"
import bookingImg from "../public/images/IMG7056.jpg"
import Link from 'next/link'


export const Welcoming = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center'>
        <hr className='border border-black border-[0.1px] w-full' />
        <div className='w-full flex items-center justify-center pt-[2vh] pb-[2vh]'>
          <div className='w-[80vw] h-auto border-r border-black'>
              <h1 className='text-center text-black text-[2.2rem] font-extrabold'>Welcome to my Parlour </h1>
              <h2 className='text-pink-500 text-center font-bold text-[1.5rem]'>
                  <span className='text-teal-600'>Discover</span> the essence of bliss
              </h2>
              <p className='text-black text-center mx-auto w-[70vw] text-[1.3rem]'>
                  Elevate your senses, embrace serenity, and unlock the radiant beauty the lies within
              </p>
          </div>
          <div className='mx-auto w-[15vw] flex flex-col space-y-[2vh] justify-center items-center'>
              <i className="bi bi-instagram bg-black w-[8vw] h-[4vh] flex items-center justify-center rounded-lg"></i>
              <i className="bi bi-tiktok bg-black w-[8vw] h-[4vh] flex items-center justify-center rounded-lg"></i>
              <i className="bi bi-telephone bg-black w-[8vw] h-[4vh] flex items-center justify-center rounded-lg"></i>
          </div>
        </div>
        <div className='relative w-full border-t border-black shadow-2xl'>
            <Image alt='The Journy is on' src={bookingImg} className=''/>
            <Link className='absolute underline top-[26vh] text-white left-[35vw] text-[2.3rem]' href={"#"}>Book Now</Link>
        </div>
        
    </div>
  )
}
