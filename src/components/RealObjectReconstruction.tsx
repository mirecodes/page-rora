import React from 'react';
import InteractiveRenderer from './Renderer/InteractiveRenderer';

export const RealObjectReconstruction: React.FC = () => (
  <section className="section" id="interactive-results">
    <div className="container is-max-desktop">
      <h2 className="title is-3 has-text-centered">1. Interactive Articulation Results</h2>
      <p className="content has-text-justified">Real-world objects reconstructed and articulated by RORA. Select an object and move its joints.</p>
      <InteractiveRenderer manifestFile="scenes_real.json" />
    </div>
  </section>
);
