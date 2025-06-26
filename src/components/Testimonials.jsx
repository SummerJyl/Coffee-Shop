import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Navigation, Pagination, Autoplay } from 'swiper/react';


export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial container">
        <div className="heading column">
          <h2>Bliss in Every Cup</h2>
          <p>
            We value your opinion! Share your thoughts about our coffee and service. Your feedback helps us strive for excellence with every cup. We value your input and are committed to crafting an experience that exceeds your expectations.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
  {/* Your SwiperSlide components */}
        </Swiper>

          <SwiperSlide>
            <div className="testimonial">
              <div className="profile">
                <div className="profile-img">
                  <img src="/images/IcedCTG.png" alt="Blend IcedCTG" />
                </div>
                <div className="profile-details">
                  <h3>Joni M.</h3>
                  <p>Artist</p>
                </div>
                <q className="quote">
                  The Bean and Tea is my go-to spot for exceptional coffee. The atmosphere makes it my favorite place to start my day.
                </q>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="profile">
                <div className="profile-img">
                  <img src="/images/IcedCTG.png" alt="Blend IcedCTG" />
                </div>
                <div className="profile-details">
                  <h3>Jylian S.</h3>
                  <p>Landscape Architect</p>
                </div>
                <q className="quote">
                  This cafe is quaint and I frequent several times a week.
                </q>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="profile">
                <div className="profile-img">
                  <img src="/images/IcedCTG.png" alt="Blend IcedCTG" />
                </div>
                <div className="profile-details">
                  <h3>Barbara D.</h3>
                  <p>Artist</p>
                </div>
                <q className="quote">
                  The seasonal blends are great to enjoy at home and gifting.
                </q>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testimonial">
              <div className="profile">
                <div className="profile-img">
                  <img src="/images/IcedCTG.png" alt="Blend IcedCTG" />
                </div>
                <div className="profile-details">
                  <h3>Jeff D.</h3>
                  <p>Connoseiur</p>
                </div>
                <q className="quote">
                  It's always really good getting hyped for work! Especially when it taste oh-so-good!
                </q>
              </div>
            </div>
          </SwiperSlide>
      </div>
    </section>
  );
}