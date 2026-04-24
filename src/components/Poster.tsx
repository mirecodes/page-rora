import React from 'react';

export const Poster: React.FC = () => {
  return (
    <section className="hero is-small is-light">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">Poster</h2>

          {/* TODO: Replace with your poster PDF */}
          <iframe src="/static/pdfs/poster.pdf" width="100%" height="550" title="Research Poster">
          </iframe>
        </div>
      </div>
    </section>
  );
};
