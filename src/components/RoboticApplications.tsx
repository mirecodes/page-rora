import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BlobVideo } from './BlobVideo';

interface VideoSlide {
  id: string;
  title: string;
  videoSrc: string;
}

interface PlatformCarouselProps {
  platformTitle: string;
  platformDescription: string;
  slides: VideoSlide[];
}

const VideoCarousel: React.FC<PlatformCarouselProps> = ({
  platformTitle,
  platformDescription,
  slides,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mb-6 my-5">
      <h3 className="title is-4 mb-2">{platformTitle}</h3>
      <div className="content has-text-justified mb-4">
        <p>
          {platformDescription}
        </p>
      </div>

      {/* Video Slider Container */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden', padding: '1rem 0' }}>
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          style={{
            position: 'absolute',
            left: '10px',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1e293b',
            transition: 'all 0.2s ease',
          }}
        >
          <FaChevronLeft size={16} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          style={{
            position: 'absolute',
            right: '10px',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.9)',
            boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1e293b',
            transition: 'all 0.2s ease',
          }}
        >
          <FaChevronRight size={16} />
        </button>

        {/* Slides Track: Always [prev, current, next] so current active video is centered */}
        <div style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
          {[
            { ...slides[(currentIndex - 1 + slides.length) % slides.length], isCurrent: false, onClick: prevSlide },
            { ...slides[currentIndex], isCurrent: true, onClick: undefined },
            { ...slides[(currentIndex + 1) % slides.length], isCurrent: false, onClick: nextSlide },
          ].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={item.onClick}
              style={{
                flex: item.isCurrent ? '0 0 54%' : '0 0 22%',
                opacity: item.isCurrent ? 1 : 0.55,
                transform: item.isCurrent ? 'scale(1)' : 'scale(0.88)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: item.isCurrent ? '0 10px 25px rgba(0,0,0,0.15)' : '0 4px 10px rgba(0,0,0,0.05)',
                background: '#f8fafc',
                padding: '8px',
                cursor: item.isCurrent ? 'default' : 'pointer',
              }}
            >
              <div style={{ textAlign: 'center', marginBottom: '8px', fontSize: '0.9rem', fontStyle: 'italic', color: '#475569', fontWeight: 500 }}>
                {item.title}
              </div>
              <BlobVideo
                key={item.videoSrc}
                autoPlay={item.isCurrent}
                controls={item.isCurrent}
                muted
                loop
                src={item.videoSrc}
                style={{ width: '100%', borderRadius: '8px', display: 'block', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '0.5rem' }}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentIndex ? '24px' : '8px',
              height: '8px',
              borderRadius: '4px',
              background: idx === currentIndex ? 'var(--primary-color)' : '#cbd5e1',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const RoboticApplications: React.FC = () => {
  const isaacSlides: VideoSlide[] = [
    {
      id: 'isaac-doorlock-1',
      title: 'Doorlock 1',
      videoSrc: './static/videos/isaac/doorlock_1.mp4',
    },
    {
      id: 'isaac-doorlock-2',
      title: 'Doorlock 2',
      videoSrc: './static/videos/isaac/doorlock_2.mp4',
    },
    {
      id: 'isaac-ext-1',
      title: 'Extinguisher 1',
      videoSrc: './static/videos/isaac/ext_1.mp4',
    },
    {
      id: 'isaac-ext-2',
      title: 'Extinguisher 2',
      videoSrc: './static/videos/isaac/ext_2.mp4',
    },
    {
      id: 'isaac-ext-3',
      title: 'Extinguisher 3',
      videoSrc: './static/videos/isaac/ext_3.mp4',
    },
    {
      id: 'isaac-lamp-1',
      title: 'Lamp 1',
      videoSrc: './static/videos/isaac/lamp_1.mp4',
    },
    {
      id: 'isaac-lamp-2',
      title: 'Lamp 2',
      videoSrc: './static/videos/isaac/lamp_2.mp4',
    },
    {
      id: 'isaac-lamp-3',
      title: 'Lamp 3',
      videoSrc: './static/videos/isaac/lamp_3.mp4',
    },
    {
      id: 'isaac-microwave-a',
      title: 'Microwave A',
      videoSrc: './static/videos/isaac/microwave_a.mp4',
    },
    {
      id: 'isaac-microwave-b',
      title: 'Microwave B',
      videoSrc: './static/videos/isaac/microwave_b.mp4',
    },
    {
      id: 'isaac-microwave-c',
      title: 'Microwave C',
      videoSrc: './static/videos/isaac/microwave_c.mp4',
    },
  ];

  const unrealSlides: VideoSlide[] = [
    {
      id: 'ue-1',
      title: 'Spraying a Potted Plant',
      videoSrc: './static/videos/unreal/Spray.mp4',
    },
    {
      id: 'ue-2',
      title: 'Rotating a Grinder Handle',
      videoSrc: './static/videos/unreal/Grinder.mp4',
    },
    {
      id: 'ue-3',
      title: 'Manipulating a Multi-DoF Box',
      videoSrc: './static/videos/unreal/Box.mp4',
    },
  ];

  return (
    <section className="section" id="robotic-applications">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Robotic Applications</h2>
            
            <div className="content has-text-justified mb-5">
              <p>
                Our end-to-end framework exports readily simulatable, articulated assets which are composed of URDF models 
                and part-level segmented 3D Gaussian Splatting (3DGS) representations. Users can easily import 
                these assets directly into simulation environments supporting Gaussian rendering (e.g., NVIDIA Isaac Sim 
                or Unreal Engine 5). Thorugh this framework, users can promptly create an realistic scene in virtual environment,
                allowing effective data collection for robotic manipulation tasks.
              </p>
            </div>

            {/* Carousel 1: NVIDIA Isaac Sim (First) */}
            <VideoCarousel
              platformTitle="NVIDIA Isaac Sim"
              platformDescription="We deployed the assets in NVIDIA Isaac Sim on a humanoid platform,
              where bimanual robotic hands were controlled in real time using Meta Quest controllers,
              allowing operators to interact with the articulated objects with both hands."
              slides={isaacSlides}
            />

            {/* Carousel 2: Unreal Engine 5.3 (HXR Simulator) (Second) */}
            <VideoCarousel
              platformTitle="Unreal Engine 5.3 (HXR Simulator)"
              platformDescription="We imported the assets into the HXR Simulator built on Unreal Engine 5.3,
              enabling dexterous teleoperation with an Inspire Hand via the VIST interface
              to collect precise manipulation data."
              slides={unrealSlides}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
