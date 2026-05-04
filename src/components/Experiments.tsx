import React, { useState } from 'react';

export const Experiments: React.FC = () => {
  const [qualitativeTab, setQualitativeTab] = useState(0);
  const [analysisTab, setAnalysisTab] = useState(0);

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
              <div className="table-container" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}>
                <table className="table is-fullwidth is-hoverable mb-0">
                  <thead>
                    <tr style={{ backgroundColor: 'var(--primary-color)' }}>
                      <th style={{ color: 'white', verticalAlign: 'middle' }}>Method</th>
                      <th className="has-text-centered" style={{ color: 'white', verticalAlign: 'middle' }}>PSNR (DB) ↑</th>
                      <th className="has-text-centered" style={{ color: 'white', verticalAlign: 'middle' }}>SSIM ↑</th>
                      <th className="has-text-centered" style={{ color: 'white', verticalAlign: 'middle' }}>LPIPS ↓</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: 'white', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000' }}>AA</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>22.96 ± 6.95</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.94 ± 0.03</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.10 ± 0.06</td>
                    </tr>
                    <tr style={{ backgroundColor: 'white', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000' }}>SCREW</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>24.34 ± 3.39</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.96 ± 0.02</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.06 ± 0.04</td>
                    </tr>
                    <tr style={{ backgroundColor: '#eff6ff', color: '#000000', fontWeight: 'bold' }}>
                      <td style={{ verticalAlign: 'middle', borderLeft: '4px solid var(--primary-color)', color: '#000000' }}><strong>Ours (In-RoL)</strong></td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}><strong>27.84 ± 3.01</strong></td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}><strong>0.98 ± 0.01</strong></td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}><strong>0.02 ± 0.01</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="help">
                * Evaluation Summary (Total) conducted on the articulated robot dataset.
              </p>

              <h3 className="title is-4" style={{ marginTop: '3rem' }}>Qualitative Comparison</h3>
              
              <div className="tabs is-centered is-toggle is-toggle-rounded">
                <ul>
                  <li className={qualitativeTab === 0 ? 'is-active' : ''}>
                    <a onClick={() => setQualitativeTab(0)}>Category 1</a>
                  </li>
                  <li className={qualitativeTab === 1 ? 'is-active' : ''}>
                    <a onClick={() => setQualitativeTab(1)}>Category 2</a>
                  </li>
                  <li className={qualitativeTab === 2 ? 'is-active' : ''}>
                    <a onClick={() => setQualitativeTab(2)}>Category 3</a>
                  </li>
                </ul>
              </div>

              <div className="content">
                {qualitativeTab === 0 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="/static/images/Picture1.png" alt="Qualitative Results Category 1" width="100%" style={{ borderRadius: '8px' }} />
                    <p className="has-text-centered is-size-6 mt-2"><strong>Category 1:</strong> Kitchenware and Household Items</p>
                  </div>
                )}
                {qualitativeTab === 1 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="/static/images/Picture2.png" alt="Qualitative Results Category 2" width="100%" style={{ borderRadius: '8px' }} />
                    <p className="has-text-centered is-size-6 mt-2"><strong>Category 2:</strong> Furniture and Appliances</p>
                  </div>
                )}
                {qualitativeTab === 2 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="/static/images/Picture3.png" alt="Qualitative Results Category 3" width="100%" style={{ borderRadius: '8px' }} />
                    <p className="has-text-centered is-size-6 mt-2"><strong>Category 3:</strong> Tools and Electronic Devices</p>
                  </div>
                )}
              </div>

              <h3 className="title is-4" style={{ marginTop: '3rem' }}>Articulation Analysis</h3>
              
              <div className="tabs is-centered is-toggle is-toggle-rounded">
                <ul>
                  <li className={analysisTab === 0 ? 'is-active' : ''}>
                    <a onClick={() => setAnalysisTab(0)}>Axis Angle</a>
                  </li>
                  <li className={analysisTab === 1 ? 'is-active' : ''}>
                    <a onClick={() => setAnalysisTab(1)}>Error Score</a>
                  </li>
                  <li className={analysisTab === 2 ? 'is-active' : ''}>
                    <a onClick={() => setAnalysisTab(2)}>Origin Distance</a>
                  </li>
                </ul>
              </div>

              <div className="columns is-centered">
                <div className="column is-10">
                  {analysisTab === 0 && (
                    <div className="card animate__animated animate__fadeIn">
                      <div className="card-image">
                        <figure className="image">
                          <img src="/static/images/multi_axis_angle.png" alt="Axis Angle Error" />
                        </figure>
                      </div>
                      <div className="card-content p-3">
                        <p className="subtitle is-6 has-text-centered">Axis Angle Error Across All Categories</p>
                      </div>
                    </div>
                  )}
                  {analysisTab === 1 && (
                    <div className="card animate__animated animate__fadeIn">
                      <div className="card-image">
                        <figure className="image">
                          <img src="/static/images/multi_error_score.png" alt="Error Score" />
                        </figure>
                      </div>
                      <div className="card-content p-3">
                        <p className="subtitle is-6 has-text-centered">Error Score Distribution</p>
                      </div>
                    </div>
                  )}
                  {analysisTab === 2 && (
                    <div className="card animate__animated animate__fadeIn">
                      <div className="card-image">
                        <figure className="image">
                          <img src="/static/images/multi_origin_dist.png" alt="Origin Distance Error" />
                        </figure>
                      </div>
                      <div className="card-content p-3">
                        <p className="subtitle is-6 has-text-centered">Origin Distance Error Comparison</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
