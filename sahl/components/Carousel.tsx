"use client";

import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';

function IndividualIntervalsExample() {
  const images = [
    '/images/ST-boys1.jpg',
    '/images/ST-girls1.jpg',
    '/images/ST-boys1.jpg',
    '/images/ST-girls2.jpg',
  ];

  return (
    <Carousel controls={false} >
      <Carousel.Item interval={4000}>
        <CarouselImage imgPath={images[0]} altText="Image 1" />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <CarouselImage imgPath={images[1]} altText="Image 2" />
      </Carousel.Item>
      <Carousel.Item interval={2000}> 
        <CarouselImage imgPath={images[2]} altText="Image 3" />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <CarouselImage imgPath={images[3]} altText="Image 4" />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
