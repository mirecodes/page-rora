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
              <p style={{ fontSize: '0.92rem', lineHeight: '1.55', letterSpacing: '-0.01em' }}>
                Replicating real-world environments into simulation by realistic visual representation like NeRF and 3D Gaussian Splatting (3DGS) 
                has emerged as an effective strategy to reduce the sim-to-real gap in robot learning. However, implementing object articulation 
                during the real-to-sim process is still a challenging task. Existing motion tracking or learning based articulation methods 
                shows low success rates on complex kinematic structures having multiple joints. Furthermore, those methods require scan of dynamic 
                motion of objects, which makes reconstruction process much complicated.
              </p>
              <p style={{ fontSize: '0.92rem', lineHeight: '1.55', letterSpacing: '-0.01em' }}>
                In this work, we propose the first end-to-end pipeline that reconstructs simulation ready assets with accurate articulation from 
                a single static object video input through suggestion based human-in-the-loop process. Our approach exports a hybrid representation 
                combining 3DGS for photorealistic rendering and mesh-based geometry for physical interaction. In the reconstruction process, we 
                uses an Approximate Convex Decomposition (ACD) algorithm for part level segmentation and subsequently bind the segmented 3DGS 
                to their corresponding mesh parts. Then, we apply Automatic Joint Suggestion Algorithm which finds candidate joint axes through 
                rule based calculation running Support Vector Machines (SVM) on local geometric structure around boundaries. We have shown that 
                our method achieves more precise articulation results on partnet-mobility-v0 dataset and real objects. Additionally we presented 
                a potential usage of our framework on robot learning, deploying the reconstructed assets in Unreal Engine and NVIDIA Isaac Sim, 
                demonstrating real-time dexterous hand manipulation tasks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
