import React from 'react';

export const Poster: React.FC = () => {
  return (
    <section className="section" id="poster">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Poster</h2>
            
            <div className="has-text-centered">
              {/* 가로 방향 포스터 비율(1.414:1)에 맞춘 적응형 컨테이너 */}
              <div style={{ 
                width: '100%', 
                aspectRatio: '1.414 / 1', 
                overflow: 'hidden', 
                borderRadius: '8px', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)' 
              }}>
                <iframe 
                  src="/static/pdfs/poster.pdf#toolbar=0&navpanes=0&scrollbar=0" 
                  width="100%" 
                  height="100%" 
                  title="Research Poster"
                  style={{ border: 'none' }}
                >
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
