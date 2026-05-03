import React from 'react';

export const Applications: React.FC = () => {
  return (
    <section className="section" id="applications">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Applications</h2>
            <div className="content has-text-justified">
              <p>
                Our interactive scene reconstruction pipeline enables various downstream applications in robotics and 
                computer vision, particularly where high-fidelity articulated models are required.
              </p>
              
              <div className="columns is-multiline">
                <div className="column is-half">
                  <h3 className="title is-5">Digital Twin Creation</h3>
                  <p>
                    Easily convert real-world videos of articulated objects into interactive digital twins for 
                    monitoring and visualization.
                  </p>
                </div>
                <div className="column is-half">
                  <h3 className="title is-5">Sim-to-Real Data Collection</h3>
                  <p>
                    Generate realistic synthetic data for training robot manipulation policies by simulating 
                    interactions with reconstructed articulated parts.
                  </p>
                </div>
                <div className="column is-half">
                  <h3 className="title is-5">Interactive Teleoperation</h3>
                  <p>
                    Provide operators with a photorealistic, manipulatable interface for controlling remote robots 
                    and understanding scene affordances.
                  </p>
                </div>
                <div className="column is-half">
                  <h3 className="title is-5">Augmented Reality</h3>
                  <p>
                    Integrate reconstructed articulated objects into AR environments with realistic physics and 
                    kinematic constraints.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
