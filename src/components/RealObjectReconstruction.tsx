import React from 'react';
import InteractiveRenderer from './Renderer/InteractiveRenderer';

export const RealObjectReconstruction: React.FC = () => {
  return (
    <section className="section" id="real-object-reconstruction">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Real Object Reconstruction</h2>
            <InteractiveRenderer manifestFile="scenes_real.json" />
          </div>
        </div>
      </div>
    </section>
  );
};
