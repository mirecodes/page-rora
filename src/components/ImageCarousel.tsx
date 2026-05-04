import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-expect-error no types for css
import 'swiper/css';
// @ts-expect-error no types for css
import 'swiper/css/navigation';
// @ts-expect-error no types for css
import 'swiper/css/pagination';

export const ImageCarousel: React.FC = () => {
  return (
    <section className="hero is-small">
      <div className="hero-body">
        <div className="container">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            className="results-carousel"
          >
            <SwiperSlide>
              <div className="item has-text-centered">
                {/* TODO: Replace with your research result images */}
                <img src="static/images/carousel1.jpg" alt="First research result visualization" loading="lazy" />
                {/* TODO: Replace with description of this result */}
                <h2 className="subtitle has-text-centered" style={{ marginTop: '1rem' }}>
                  First image description.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item has-text-centered">
                <img src="static/images/carousel2.jpg" alt="Second research result visualization" loading="lazy" />
                <h2 className="subtitle has-text-centered" style={{ marginTop: '1rem' }}>
                  Second image description.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item has-text-centered">
                <img src="static/images/carousel3.jpg" alt="Third research result visualization" loading="lazy" />
                <h2 className="subtitle has-text-centered" style={{ marginTop: '1rem' }}>
                  Third image description.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="item has-text-centered">
                <img src="static/images/carousel4.jpg" alt="Fourth research result visualization" loading="lazy" />
                <h2 className="subtitle has-text-centered" style={{ marginTop: '1rem' }}>
                  Fourth image description.
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
