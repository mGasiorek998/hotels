import { useState } from 'react';
import { Image } from 'redux/slices/api/api.types';
import ArrowButton from 'components/atoms/ArrowButton/ArrowButton';
import { Wrapper, HotelImage } from './Carousel.styles';

interface CarouselProps {
  images: Image[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currSlide, setCurrSlide] = useState(0);

  const nextSlide = () => {
    if (currSlide === images.length - 1) {
      setCurrSlide(0);
      return;
    }
    setCurrSlide((prevState) => prevState + 1);
  };

  const prevSlide = () => {
    if (currSlide === 0) {
      setCurrSlide(images.length - 1);
      return;
    }
    setCurrSlide((prevState) => prevState - 1);
  };

  return (
    <Wrapper>
      {images.length > 1 && <ArrowButton handleClick={prevSlide} dir="back" />}
      {[...images].map(({ url, alt }, index) => (
        <HotelImage
          isVisible={index === currSlide}
          key={index}
          src={url}
          alt={alt || `hotel image - ${index + 1}`}
        />
      ))}
      {images.length > 1 && (
        <ArrowButton handleClick={nextSlide} dir="forward" />
      )}
    </Wrapper>
  );
};

export default Carousel;
