import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';

<Swiper
  spaceBetween={50}
  slidesPerView={1}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
>
  <SwiperSlide>
    <div class="testimonial">
      <img class="profile-img" src="path/to/image1.jpg" alt="Testimonial 1" />
      <p>Testimonial content here...</p>
    </div>
  </SwiperSlide>
  {/* <!-- Add more SwiperSlide components as needed --> */}
</Swiper>
