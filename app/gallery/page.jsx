"use client";

import React from 'react';
import Image from 'next/image';
import images from '@/temp/carousel';
import Masonry from 'react-masonry-css';

const Page = () => {
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-auto pt-[11vh]'>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full" style={{ paddingBottom: '56.25%' }}> {/* 16:9 Aspect Ratio */}
              <Image
                src={image.link}
                alt={image.alt}
                layout="fill"
                objectFit="fit"
                className="absolute inset-0"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default Page;
