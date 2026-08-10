import React from 'react';
import InteractiveRenderer from './Renderer/InteractiveRenderer';

export const RealObjectReconstruction: React.FC = () => {
  return (
    <section className="section" id="real-object-reconstruction">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Real Object Reconstruction</h2>
            <div className="content has-text-justified mb-5">
              <p>
                In this section, we shows the real object reconstruction results from a single static video scan (~1 min). 
                Our pipeline successfully reconstructs real-world objects highly photorealistic, preserving fine visual details 
                such as text labels and surface textures. Beyond the visual resembleness, our hybrid representation of combining 
                segmented 3DGS with meshes in URDF format accurately express real world kinematic constraints across diverse 
                joint configuratoins. While existing baseline methods often struggle with out-of-dataset meshes, multi-joint 
                movements, or requiring sophisticated scanning process for camera tracking, our approach easily operates on 
                inputs captured from standard camera devices. This enables user friendly simulation-ready asset creation and 
                reliable real-to-sim transfer for complex articulation topologies.
              </p>
            </div>
            <InteractiveRenderer manifestFile="scenes_real.json" />
          </div>
        </div>
      </div>
    </section>
  );
};
