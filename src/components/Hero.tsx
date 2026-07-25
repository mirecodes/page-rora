import React from 'react';
import { FaFilePdf, FaGithub } from 'react-icons/fa';

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
                <div className="is-size-5 publication-authors" style={{ fontWeight: 600, color: '#2b5876' }}>
                  <span className="author-block">
                    Lee Hyesung<sup>1</sup>,
                  </span>{' '}
                  <span className="author-block">
                    Lee Youngseon<sup>1</sup>,
                  </span>{' '}
                  <span className="author-block">
                    Lee Kyutae<sup>2</sup>,
                  </span>{' '}
                  <span className="author-block">
                    Lee Dongjun<sup>1</sup>,
                  </span>{' '}
                  <span className="author-block">
                    Lee Yongseok<sup>2,*</sup>
                  </span>
                </div>

                <div className="is-size-5 publication-authors" style={{ marginTop: '0.5rem' }}>
                  <span className="author-block"><sup>1</sup>Seoul National University</span>,&nbsp;&nbsp;
                  <span className="author-block"><sup>2</sup>DGIST Robin Lab</span>
                  <br />
                  <span className="author-block" style={{ fontSize: '0.85em', color: '#555', marginTop: '0.25rem', display: 'inline-block' }}>
                    <sup>*</sup>Corresponding author: <a href="mailto:yslee@dgist.ac.kr" style={{ color: '#3273dc' }}>yslee@dgist.ac.kr</a>
                  </span>
                </div>

                <div className="column has-text-centered">
                  <div className="publication-links">
                    {/* TODO: Update with your arXiv paper ID */}
                    <span className="link-block">
                      <a href="https://arxiv.org/pdf/<ARXIV PAPER ID>.pdf" target="_blank" rel="noreferrer"
                        className="external-link button is-normal is-rounded is-dark">
                        <span className="icon">
                          <FaFilePdf />
                        </span>
                        <span>Paper</span>
                      </a>
                    </span>

                    {/* TODO: Add your supplementary material PDF or remove this section */}
                    {/* <span className="link-block">
                      <a href="static/pdfs/supplementary_material.pdf" target="_blank" rel="noreferrer"
                        className="external-link button is-normal is-rounded is-dark">
                        <span className="icon">
                          <FaFilePdf />
                        </span>
                        <span>Supplementary</span>
                      </a>
                    </span> */}

                    {/* TODO: Replace with your GitHub repository URL */}
                    <span className="link-block">
                      <a href="https://github.com/YOUR REPO HERE" target="_blank" rel="noreferrer"
                        className="external-link button is-normal is-rounded is-dark">
                        <span className="icon">
                          <FaGithub />
                        </span>
                        <span>Code</span>
                      </a>
                    </span>

                    {/* TODO: Update with your arXiv paper ID */}
                    <span className="link-block">
                      <a href="https://arxiv.org/abs/<ARXIV PAPER ID>" target="_blank" rel="noreferrer"
                        className="external-link button is-normal is-rounded is-dark">
                        <span className="icon">
                          <i className="ai ai-arxiv"></i> {/* Assuming academicons are still used */}
                        </span>
                        <span>arXiv</span>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaser video */}
      <section className="hero teaser">
        <div className="container is-max-desktop">
          <div className="hero-body">
            <h2 className="title is-3 has-text-centered mb-5">Introduction Video</h2>
            {/* TODO: Replace with your teaser video */}
            <video id="tree" autoPlay controls muted loop height="100%" preload="metadata">
              {/* TODO: Add your video file path here */}
              <source src="static/videos/articulation_video.mp4" type="video/mp4" />
            </video>
            {/* TODO: Replace with your video description */}
            <h2 className="subtitle has-text-centered">
              Aliquam vitae elit ullamcorper tellus egestas pellentesque. Ut lacus tellus, maximus vel lectus at, placerat pretium mi. Maecenas dignissim tincidunt vestibulum. Sed consequat hendrerit nisl ut maximus.
            </h2>
          </div>
        </div>
      </section>
      {/* End teaser video */}
    </>
  );
};
