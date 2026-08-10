import React from 'react';

import { BlobVideo } from './BlobVideo';

export const Hero: React.FC = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container is-max-desktop">
            <div className="columns is-centered">
              <div className="column has-text-centered">
                {/* TODO: Replace with your paper title */}
                <h1 className="title is-1 publication-title">
                  RORA: Realistic Object Reconstruction with Articulation
                </h1>
                <div className="is-size-4 publication-authors" style={{ fontWeight: 600, color: '#2b5876', marginTop: '1rem', marginBottom: '2rem' }}>
                  <span className="author-block">Anonymous Authors</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser video (Overview) */}
      <section className="hero teaser" id="overview">
        <div className="container is-max-desktop">
          <div className="hero-body">
            <h2 className="title is-3 has-text-centered mb-5">Overview</h2>
            <BlobVideo id="tree" autoPlay controls muted loop height="100%" src="./static/videos/overview.mp4" />
            <div className="content has-text-justified mt-4">
              <p>
                We propose <strong>Realistic Object Reconstruction with Articulation (RORA)</strong>, 
                an end-to-end pipeline for real-to-sim articulated object reconstruction from a single static 
                video input. RORA exports a hybrid representation coupling 3D Gaussian Splatting (3DGS) for 
                photorealistic rendering and URDF meshes for physical simulation. By Automatic Joint Suggestion Algorithm
                with interactive human-in-the-loop (HIL) fine-tuning, RORA enables precise, 
                simulation-ready asset creation for complex multi-joint objects and chained linkages without 
                requiring dynamic motion scanning.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End teaser video */}
    </>
  );
};
