import React, { useRef, useState } from 'react';
 

export const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const carouselRef = useRef(null);

  const nextSlide = () => {
    if (slideIndex < carouselRef.current.children.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(carouselRef.current.children.length - 1);
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${slideIndex * 100}%)` }} ref={carouselRef}>
        <div className="carousel-slide">
          <img src="https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/SlideShows/Large/The-Ros%C3%A9-Collection_3238bf6d-ddcb-4f65-aadb-3eee730fb9c8_052144.jpg?V=10052024092423" alt="Image 1" />
        </div>
        <div className="carousel-slide">
          <img src="https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/SlideShows/Large/Great-Wines-for-Gifting-new_3238bf6d-ddcb-4f65-aadb-3eee730fb9c8_123304.jpg?V=10052024092423" alt="Image 2" />
        </div>
        <div className="carousel-slide">
          <img src="https://d3lhatfimi1ec.cloudfront.net/1E62B4AA-5FF5-4E1E-9CF2-21F6F144B9E4/SlideShows/Large/hello-mumbai-image-banner1_3238bf6d-ddcb-4f65-aadb-3eee730fb9c8_255025.jpg?V=10052024092423" alt="Image 2" />
        </div>
        
      </div>
      <button className="prev-btn" onClick={prevSlide}></button>
      <button className="next-btn" onClick={nextSlide}></button>
    </div>
  );
}
