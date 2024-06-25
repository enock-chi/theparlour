'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = () => {
    setNavOpen(prev => !prev);
  };

  return (
    <div 
      className="absolute z-50 w-[90vw] min-h-[8vh] top-0 left-1/2 transform -translate-x-1/2 mt-[2vh] border-orange-600 border-2 rounded-2xl flex flex-col items-center" 
       style={{ position: 'relative' }}
    >
      <style>
    {`
      .background-flip::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url("/images/ST-bg-image.jpg");
        background-size: cover;
        background-position: center;
        transform: rotate(180deg);
        z-index: -1;
      }
    `}
  </style>
      <div className="w-full flex justify-between items-center h-[8vh] px-4">
        <div className="block md:hidden">
          <Link className='no-underline' href={'/'}>
          <span className="font-bold text-orange-600 py-[1vh] rounded-xl">
            Southern <span className="text-blue-950 outline-text">Trappers</span>
          </span>
          </Link>
        </div>
        <nav className="space-x-[2vw]">
          <button 
            className="bi bi-menu-button-wide text-orange-600 text-2xl"
            onClick={handleNavClick}
            aria-expanded={navOpen}
            aria-controls="nav-menu"
          />
        </nav>
      </div>
      <div className={`transition-all duration-1000 ease-in-out ${navOpen ? 'h-[32vh]' : 'h-0'} overflow-hidden w-full`}>
        <hr className="mx-auto w-[78vw] border-orange-600 pb-[2vh] border-[.3rem]" />
        {navOpen && (
          <div className="h-full w-full">
            <ul className="space-y-[2vh] w-full h-auto list-disc pl-[10vw] text-orange-600">
              <li>
                <Link href="/Logs" className="font-extrabold text-orange-600">Logs</Link>
              </li>
              <li>
                <Link href="/Stats" className="font-extrabold text-orange-600">Stats</Link>
              </li>
              <li>
                <Link href="/Teams" className="font-extrabold text-orange-600">Teams</Link>
              </li>
              <li>
                <Link href="/Updates" className="font-extrabold text-orange-600">Updates</Link>
              </li>
              <li>
                <Link href="/News" className="font-extrabold text-orange-600">News</Link>
              </li>
            </ul>

          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
