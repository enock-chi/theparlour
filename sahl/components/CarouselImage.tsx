import React from 'react';
import Image from 'next/image';

type CarouselImageProps = {
  imgPath: string;
  altText?: string;
};

const CarouselImage: React.FC<CarouselImageProps> = ({ imgPath, altText = 'Carousel image' }) => {
  return (
    <div className="relative w-full h-[60vh]">
      <Image
        src={imgPath}
        alt={altText}
        fill 
        style={{ objectFit: 'cover' }} 
      />
    </div>
  );
};

export default CarouselImage;
