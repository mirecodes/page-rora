import React from 'react';

export const Introduction: React.FC = () => {
  return (
    <section className="section" id="introduction">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Introduction</h2>
            <div className="content has-text-justified">
              <p>
                Traditional scene reconstruction methods often struggle with complex articulated objects and dynamic environments. 
                In this work, we propose a novel approach that integrates robotic kinematics with Gaussian Splatting to achieve 
                high-fidelity, interactive reconstruction of articulated scenes.
              </p>
              <p>
                Our method allows for real-time manipulation of the reconstructed objects, enabling users to explore the 
                articulation space and visualize the scene from any viewpoint. By leveraging the efficiency of Gaussian Splatting 
                and the structural constraints of URDF models, we provide a robust solution for digital twin creation and 
                robot-environment interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
