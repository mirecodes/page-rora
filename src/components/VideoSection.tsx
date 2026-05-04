import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
// @ts-expect-error no types for css
import 'swiper/css';
// @ts-expect-error no types for css
import 'swiper/css/navigation';
// @ts-expect-error no types for css
import 'swiper/css/pagination';

export const VideoSection: React.FC = () => {
  return (
    <>
      {/* Youtube video */}
      <section className="hero is-small is-light">
        <div className="hero-body">
          <div className="container">
            {/* Paper video. */}
            <h2 className="title is-3">Video Presentation</h2>
            <div className="columns is-centered has-text-centered">
              <div className="column is-four-fifths">
                <div className="publication-video">
                  {/* TODO: Replace with your YouTube video ID */}
                  <iframe 
                    src="https://www.youtube.com/embed/JkaxUblCGz0" 
                    frameBorder="0" 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen
                    title="Video Presentation"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video carousel */}
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-3">Another Carousel</h2>
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
                <div className="item item-video1" style={{ height: '500px' }}>
                  {/* TODO: Add poster image for better preview */}
                  <video id="video1" controls muted loop height="100%" preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    {/* Your video file here */}
                    <source src="static/videos/carousel1.mp4" type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item item-video2" style={{ height: '500px' }}>
                  {/* TODO: Add poster image for better preview */}
                  <video id="video2" controls muted loop height="100%" preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    {/* Your video file here */}
                    <source src="static/videos/carousel2.mp4" type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="item item-video3" style={{ height: '500px' }}>
                  {/* TODO: Add poster image for better preview */}
                  <video id="video3" controls muted loop height="100%" preload="metadata" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                    {/* Your video file here */}
                    <source src="static/videos/carousel3.mp4" type="video/mp4" />
                  </video>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};
