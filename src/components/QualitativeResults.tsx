import React from 'react';
import InteractiveRenderer from './Renderer/InteractiveRenderer';

export const QualitativeResults: React.FC = () => {
  return (
    <section className="section" id="qualitative-results">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Qualitative Results</h2>
            <InteractiveRenderer />
          </div>
        </div>
      </div>
    </section>
  );
};
