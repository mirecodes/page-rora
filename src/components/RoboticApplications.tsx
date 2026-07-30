import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
      <p className="subtitle is-6 mb-4" style={{ color: '#4a5568' }}>
        {platformDescription}
      </p>

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
              <video
                key={item.videoSrc}
                autoPlay={item.isCurrent}
                controls={item.isCurrent}
                muted
                loop
                preload="metadata"
                style={{ width: '100%', borderRadius: '8px', display: 'block', objectFit: 'cover' }}
              >
                <source src={item.videoSrc} type="video/mp4" />
              </video>
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
  const unrealSlides: VideoSlide[] = [
    {
      id: 'ue-1',
      title: 'Dexterous Teleoperation with Inspire Hand',
      videoSrc: 'static/videos/carousel1.mp4',
    },
    {
      id: 'ue-2',
      title: 'VIST Interface Demonstration Data Collection',
      videoSrc: 'static/videos/carousel2.mp4',
    },
    {
      id: 'ue-3',
      title: 'Unreal Engine 5.3 HXR Simulator Interaction',
      videoSrc: 'static/videos/carousel3.mp4',
    },
  ];

  const isaacSlides: VideoSlide[] = [
    {
      id: 'isaac-1',
      title: 'Humanoid Bimanual Teleoperation in Isaac Sim',
      videoSrc: 'static/videos/articulation_video.mp4',
    },
    {
      id: 'isaac-2',
      title: 'Real-Time Control via Meta Quest Controllers',
      videoSrc: 'static/videos/overview_video.mp4',
    },
    {
      id: 'isaac-3',
      title: 'Natural Object Manipulation & Digital Twin Transfer',
      videoSrc: 'static/videos/banner_video.mp4',
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
                To confirm the practical utility of our assets for robotic data collection, 
                we deployed them into two distinct simulation platforms. First, we imported the assets 
                into the HXR Simulator built on Unreal Engine 5.3, enabling dexterous teleoperation with 
                an Inspire Hand via the VIST interface. With this setup, operators can collect demonstration 
                data like real-world interaction. Second, we deployed the assets in NVIDIA Isaac Sim on a humanoid 
                platform, where bimanual robotic hands were controlled in real time using Meta Quest controllers. 
                This allowed operators to naturally interact with the objects as they would in physical reality. 
                These deployments demonstrate that our real-to-sim pipeline effectively bridges the domain gap, 
                providing realistic, articulated assets in simulated environments for advanced robotic applications.
              </p>
            </div>

            {/* Carousel 1: Unreal Engine 5 (HXR Simulator) */}
            <VideoCarousel
              platformTitle="Unreal Engine 5.3 (HXR Simulator)"
              platformDescription="Dexterous teleoperation with Inspire Hand via VIST interface for demonstration data collection."
              slides={unrealSlides}
            />

            {/* Carousel 2: NVIDIA Isaac Sim */}
            <VideoCarousel
              platformTitle="NVIDIA Isaac Sim"
              platformDescription="Humanoid bimanual manipulation controlled in real time using Meta Quest VR controllers."
              slides={isaacSlides}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
