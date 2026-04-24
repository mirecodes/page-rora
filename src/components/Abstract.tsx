import React from 'react';

export const Abstract: React.FC = () => {
  return (
    <section className="section hero is-light">
      <div className="container is-max-desktop">
        <div className="columns is-centered has-text-centered">
          <div className="column is-four-fifths">
            <h2 className="title is-3">Abstract</h2>
            <div className="content has-text-justified">
              {/* TODO: Replace with your paper abstract */}
              <p>
                Replicating real-world environments into simulation is a critical strategy to reduce the Sim-to-Real gap for robot learning. However, constructing high-fidelity scenes in simulation remains a labor-intensive process, necessitating manual object reconstruction and part articulation to give reasonable kinematic properties to static scans. In this work, we propose a semi-automated pipeline that reconstructs a scene including individually articulated objects from a single input video. Our approach leverages a hybrid representation combining 3D Gaussian Splatting for photorealistic rendering and mesh-based geometry for reliable physical interaction. To facilitate the articulation process, we suggest joint candidates to the user. We employ the Approximate Convex Decomposition (ACD) algorithm for geometric part decomposition and subsequent segmentation. Furthermore, we introduce a novel boundary analysis algorithm utilizing Support Vector Machines (SVM), the EM algorithm, and the newly proposed Reciprocal Loop Pairs (RLPs) to infer joint configurations. This methodology significantly accelerates the previous labor-intensive workflow, requiring minimal user supervision to validate suggested kinematics. We demonstrated the efficacy of our pipeline by integrating reconstructed objects into a physics simulator to perform dexterous manipulation. Furthermore, we trained a Diffusion Policy for manipulation tasks within the generated environment, demonstrating its potential to be utilized as a realistic data collection framework for robot training.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
