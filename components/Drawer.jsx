"use client"

import React from 'react'
import { useRouter } from 'next/navigation';
import navbar from '@/temp/navbar';
import Link from 'next/link'


const Drawer = ({isVisible}) => {
  const router = useRouter();
  const menuStyle = {
    transform: isVisible ? 'translateX(0)' : 'translateX(-85vw)',
    transition: 'transform 1s ease',
  }

  return (
    <div className='fixed z-100 top-[10.4vh] px-[10vw] pt-[7vh] w-[86vw] h-[80vh] backdrop-blur-lg right-[-85vw] ' style={menuStyle}>
    <div className='relative left-[27vw]'>
      <i class="bi bi-clipboard2-fill text-black opacity-50 text-[3rem]"></i>
    </div>
      <ul className='space-y-[4vw]'>
        {navbar.map((item) => ( 
          <li key={item.name} className='bg-black opacity-50 rounded-lg h-[4vh] pl-[3vw] py-[2vh] flex items-center'>
            <Link href={item.link} className='text-[1.8rem]'> 
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className='relative w-[40vw] top-[13vh]  left-[13vw] flex space-x-[10vw] h-[5vh] rounded-lg pt-[0.7vh] bg-black opacity-50 items-center justify-center mt-[3vh]'>
        <Link href={'#'}><i className="bi bi-tiktok "></i></Link>
        <Link href={'3'}><i className="bi bi-telephone-fill"></i></Link>
        <Link href={'3'}><i className="bi bi-instagram"></i></Link>
      </div>
    </div>
  );
};

export default Drawer;