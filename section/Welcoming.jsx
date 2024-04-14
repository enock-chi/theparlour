import React from 'react'
import Image from 'next/image'
import imge from "../public/images/IMG_7057.png"


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
        <div className='w-[92vw] h-[60vh] bg-white rounded-xl'>
            <div className='pt-[1vh]'>
                <Image alt='Lady' src={imge} className='w-[30vw]'/>
            </div>
            <div className='relative flex flex-col justify-center items-center w-full p-[4vw]'>
                <h1 className='text-black font-extrabold text-md absolute top-[-8vh] left-[24vw]'>Welcome to Tamia&apos;s Beauty Parlour.</h1>
                <p className='text-black text-center px-[3vw]'>
                    Step into a realm of beauty redefined, where every moment is a symphony of innovation and refinement, dedicated to enhancing your radiance. Welcome to a world where your beauty is not just an outcome but a masterpiece, a culmination of art and technology working seamlessly together.
                </p>
            </div>
        </div>
    </div>
  )
}
