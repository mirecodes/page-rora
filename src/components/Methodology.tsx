import React from 'react';

export const Methodology: React.FC = () => {
  return (
    <section className="section">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Methodology</h2>
            
            <div className="content has-text-justified">
              <p>
                We propose an interactive pipeline that reconstructs articulated objects from a single input video.
                Our approach leverages a hybrid representation combining 3D Gaussian Splatting for photorealistic rendering and mesh-based geometry for reliable physical interaction.
              </p>
            </div>

            <div className="has-text-centered" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <img src="/static/images/pipeline_figure.png" alt="Method Overview" width="100%" style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};