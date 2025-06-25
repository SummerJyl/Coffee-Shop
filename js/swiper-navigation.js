import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.min.css';

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onBeforeInit={(swiper) => {
          // Important part 
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
           
        }}
>
  <SwiperSlide>
    <div class="testimonial text-center">
      <img 
        className="profile-img" mx-auto rounded-full
        src="path/to/image1.jpg" 
        alt="Testimonial 1" />
      <p>Testimonial content here...</p>
    </div>
  </SwiperSlide>

  {/* <!-- Add more SwiperSlide components as needed --> */}
</Swiper>

  {/* Navigation buttons */}
  <div
      ref={prevRef} 
      className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
   ></div> 
   <div
      ref={nextRef} 
      className="swiper-button-prev absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer"
   ></div>        
  </div>
  );
} 