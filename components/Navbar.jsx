import React from 'react'
import Image from 'next/image'
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../public/images/IMG_7066.jpg"

export const Navbar = () => {
  
  return (
    <div className='fixed flex justify-center items-center w-full h-[12vh]'>
      <div className='w-[95vw] flex items-center h-[8vh] bg-white rounded-2xl '>
          <div className='w-1/2 pl-[2vw]'>
            <Image alt='logo' src={logo} className='w-[60px] h-[50px] rounded-full'/>
          </div>
          <div className='w-1/2 h-[2vh] flex items-center pr-[3vw]'>
             <i className="bi bi-menu-button-wide text-black text-[1.5rem] ml-auto"></i>
          </div>
      </div>       
    </div>
  )
}
