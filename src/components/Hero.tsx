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
                  Realistic Scene Reconstruction: Importing Real-World Objects into Gaussian Splats and Mesh Representation
                </h1>
                <div className="is-size-5 publication-authors">
                  {/* TODO: Replace with your paper authors and their personal links */}
                  <span className="author-block">
                    <a href="FIRST AUTHOR PERSONAL LINK" target="_blank" rel="noreferrer">Lee Hyesung</a>,
                  </span>
                  <span className="author-block">
                    <a href="SECOND AUTHOR PERSONAL LINK" target="_blank" rel="noreferrer">Lee Yongseok</a>,
                  </span>
                  <span className="author-block">
                    <a href="THIRD AUTHOR PERSONAL LINK" target="_blank" rel="noreferrer">Lee Yeongseon</a>
                  </span>
                </div>

                <div className="is-size-5 publication-authors">
                  {/* TODO: Replace with your institution and conference/journal info */}
                  <span className="author-block">Seoul National Unviersity<br />Conference name and year</span>
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
