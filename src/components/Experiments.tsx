import React from 'react';

export const Experiments: React.FC = () => {
  return (
    <section className="section" id="experiments">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Experiments</h2>
            <div className="content has-text-justified">
              <p>
                We evaluate our method against state-of-the-art reconstruction techniques, focusing on reconstruction quality, 
                articulation accuracy, and rendering performance.
              </p>
              
              <h3 className="title is-4">Quantitative Comparison</h3>
              <div className="table-container">
                <table className="table is-fullwidth is-striped is-hoverable">
                  <thead>
                    <tr>
                      <th>Method</th>
                      <th>PSNR ↑</th>
                      <th>SSIM ↑</th>
                      <th>LPIPS ↓</th>
                      <th>FPS ↑</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Instant-NGP</td>
                      <td>28.42</td>
                      <td>0.892</td>
                      <td>0.145</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>3D Gaussian Splatting</td>
                      <td>31.15</td>
                      <td>0.941</td>
                      <td>0.082</td>
                      <td>120+</td>
                    </tr>
                    <tr className="is-selected">
                      <td><strong>Ours (In-RoL)</strong></td>
                      <td><strong>32.54</strong></td>
                      <td><strong>0.958</strong></td>
                      <td><strong>0.064</strong></td>
                      <td><strong>90</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="help">
                * Comparison conducted on the articulated robot dataset with ground truth articulation states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
