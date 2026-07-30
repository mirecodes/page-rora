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
                As shown in the pipeline figure below, the overall framework of RORA consists of 6 stages: 
                (1) Initial-Reconstruction, (2) Refinement, (3) Decomposition, (4) Segmentation, 
                (5) Articulation, and (6) Export Stage. Stages 4 and 5 incorporate interactive user decisions for 
                segmentation and joint articulation. Through these stages, users can promptly build simulation-ready 
                articulated assets. For more technical details, please refer to our paper.
              </p>
            </div>

            <div className="has-text-centered" style={{ marginTop: '2rem', marginBottom: '2rem' }}>
              <img src="static/images/pipeline/pipeline_figure.png" alt="Method Overview" width="100%" style={{ borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};