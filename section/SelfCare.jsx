import React from 'react'
import Image from 'next/image'
import selfcare from '@/temp/selfcare'
import Link from 'next/link'
import banner from '@/public/images/IMG_70m.jpg'

const SelfCare = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center'>
        <hr className='w-full border-black'></hr>
        <div className='flex w-full h-auto'>
          <div className='group w-[20vw] h-[85vh] border-r border-black flex flex-col items-center pt-[8vh] space-y-[12vh] overflow-hidden'>
            {selfcare.map((item,i) => (
              <Link key={i} className='text-black w-[30vw] text-center text-[1.5rem] font-extrabold rotate-[-90deg] hover:border border-black rounded-[1.1rem] shadow-xl ' href={'#'}>{item.name}</Link>
            ))}
          </div>
          <div className='w-[80vw] h-[85vh] relative'>
              <Image src={banner} alt='https://unsplash.com/@fabulu75' style={{objectFit: "cover"}} className='h-full'/>
          </div>
        </div>

    </div>
  )
}

export default SelfCare