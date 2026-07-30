import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section className="section" id="introduction-video">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Introduction Video</h2>
            <div className="content has-text-centered my-4">
              <video autoPlay controls muted loop width="100%" preload="metadata">
                <source src="static/videos/articulation_video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="content has-text-justified">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
