"use client";

import React from 'react';
import Image from 'next/image';
import images from '@/temp/carousel';
import Masonry from 'react-masonry-css';

const Page = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <div className='w-full h-auto pt-[11vh]'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((image, index) => (
          <div key={index} className="relative w-full mb-4">
            <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-lg"> {/* Adjusted for aesthetics */}
              <Image
                src={image.link}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Page;
