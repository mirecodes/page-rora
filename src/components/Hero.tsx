import React from 'react';
import { FaFilePdf, FaGithub } from 'react-icons/fa';

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
                    {/* arXiv Paper Links */}
                    <span className="link-block">
                      <a href="https://arxiv.org/pdf/2608.04842.pdf" target="_blank" rel="noreferrer"
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

                    <span className="link-block">
                      <a href="https://arxiv.org/abs/2608.04842" target="_blank" rel="noreferrer"
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
