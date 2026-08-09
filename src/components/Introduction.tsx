import React from 'react';
import { BlobVideo } from './BlobVideo';

export const Introduction: React.FC = () => {
  return (
    <section className="section" id="introduction-video">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Introduction Video</h2>
            <div className="content has-text-centered my-4">
              <BlobVideo autoPlay controls muted loop width="100%" src="./static/videos/introduction.mp4" />
            </div>
            <div className="content has-text-justified">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
