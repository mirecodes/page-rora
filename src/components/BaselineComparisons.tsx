import React, { useState } from 'react';
import InteractiveRenderer from './Renderer/InteractiveRenderer';

export const BaselineComparisons: React.FC = () => {
  const [qualitativeTab, setQualitativeTab] = useState(0);
  const [analysisTab, setAnalysisTab] = useState(0);

  return (
    <section className="section" id="baseline-comparisons">
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column is-full-width">
            <h2 className="title is-3 has-text-centered">Baseline Comparisons</h2>
            <div className="content has-text-justified">
              <p>
                In this experiment section, we evaluated our pipeline against two state-of-the-art articulation baseslines on 
                the PartNet-Mobility dataset. The baselines are Articulate-Anything (AA), which uses a Vision-Language-Model (VLM) 
                prior (we have used Gemini-2.5-Flash as its internal VLM agent), and ScrewSplat, which optimizes extended 3DGS 
                with screw axes from object scans of multi-configurations.
              </p>
              <p>
                Each framework is evaluated by two evaluation criteria. First is <strong>Geometry Metrics</strong>, which assess joint estimation precision against ground-truth in three categories:
              </p>
              <ul style={{ marginTop: '-0.5rem', marginBottom: '1rem' }}>
                <li style={{ marginBottom: '0.8rem' }}>
                  type error: count of misclassified or omitted joints.
                  <div style={{ background: '#f8fafc', borderLeft: '3px solid var(--primary-color)', padding: '0.5rem 0.8rem', margin: '0.4rem 0', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.95rem', fontFamily: 'serif', textAlign: 'center' }}>
                      <em>e</em><sub>type</sub> = {"{ 0 if t̂ = t, 1 otherwise }"}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                      * <em>t̂</em>, <em>t</em> ∈ {"{revolute, prismatic, fixed}"} denote predicted and ground-truth joint types. Undetected joints count as 1.
                    </div>
                  </div>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  Angular error: angular deviation between GT and estimated joints.
                  <div style={{ background: '#f8fafc', borderLeft: '3px solid var(--primary-color)', padding: '0.5rem 0.8rem', margin: '0.4rem 0', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.95rem', fontFamily: 'serif', textAlign: 'center' }}>
                      <em>e</em><sub>angle</sub> = {"arccos( | n̂ · n | / ( ||n̂|| ||n|| ) ) ∈ [0°, 90°]"}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                      * <b>n̂</b> and <b>n</b> denote predicted and ground-truth joint rotation/translation axes.
                    </div>
                  </div>
                </li>
                <li style={{ marginBottom: '0.8rem' }}>
                  Positional error: L2 Distance in orthogonal direction between GT and predicted joint origins.
                  <div style={{ background: '#f8fafc', borderLeft: '3px solid var(--primary-color)', padding: '0.5rem 0.8rem', margin: '0.4rem 0', borderRadius: '4px' }}>
                    <div style={{ fontSize: '0.95rem', fontFamily: 'serif', textAlign: 'center' }}>
                      <em>e</em><sub>pos</sub> = {"|| d − (d · n̂) n̂ ||"}<sub>2</sub>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '0.2rem' }}>
                      * <b>d</b> is origin offset vector, <b>n̂</b> is predicted joint axis (applied only for revolute joints).
                    </div>
                  </div>
                </li>
              </ul>
              <p>
                Second is <strong>Visual Metrics</strong>, which evaluates rendering fidelity of test configurations, which is non-zero position at scanning, under three evaluation metrics:
              </p>
              <ul style={{ marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
                <li>peak signal-to-noise ratio (PSNR)</li>
                <li>structural similarity index (SSIM)</li>
                <li>learned perceptual image patch similarity (LPIPS)</li>
              </ul>
              
              <p>
                We evaluate all methods across objects in three difficulty levels categorized by kinematic complexity:
              </p>
              <ul style={{ marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
                <li>Category I: Single Joint Objects — 6 items</li>
                <li>Category II: Multiple Joints Objects — 6 items</li>
                <li>Category III: Chained Linkage Objects — 4 items</li>
              </ul>
              
              {/* Geometry Metric Comparison */}
              <h3 className="title is-4" style={{ marginTop: '2rem' }}>Geometry Metric Comparison</h3>
              <p className="mb-4">
                The geometry metric evaluation results are presented in the table and plots below, where each marker in the scatter plots denotes an individual evaluation score for a specific object and joint. Note that in the positional error plot, hollow markers represent the orthogonal origin distance for prismatic joints. Since positional error has no physical relevance for prismatic joints, these data points are excluded from the reported statistics.
              </p>
              <div className="table-container" style={{ maxWidth: '700px', margin: '1rem auto 0.5rem auto', borderRadius: '8px', overflow: 'hidden', border: '1px solid #000000' }}>
                <table className="table is-fullwidth mb-0" style={{ backgroundColor: '#ffffff', tableLayout: 'fixed' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--primary-color)' }}>
                      <th style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000', borderRight: '1px solid #000000' }}>Category</th>
                      <th style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000', borderRight: '1px solid #000000' }}>Method</th>
                      <th className="has-text-centered" style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000', borderRight: '1px solid #000000' }}>Type Err.</th>
                      <th className="has-text-centered" style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000', borderRight: '1px solid #000000' }}>Ang. Err. (°)</th>
                      <th className="has-text-centered" style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000' }}>Pos. Err. (m)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Cat. I (Simple) */}
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td rowSpan={3} style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', backgroundColor: '#e0f2fe', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}>
                        Cat. I<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal', color: '#333' }}>(Simple)</span>
                      </td>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>AA</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.000</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>17.560</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.066</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>ScrewSplat</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>0.167</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>6.282</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.232</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000', borderBottom: '1px solid #000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>Ours</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.000</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.220</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold' }}>0.005</td>
                    </tr>

                    {/* Cat. II (Multi) */}
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td rowSpan={3} style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', backgroundColor: '#e0f2fe', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}>
                        Cat. II<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal', color: '#333' }}>(Multi)</span>
                      </td>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>AA</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>1.667</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>12.857</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.370</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>ScrewSplat</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>2.000</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>39.953</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.549</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000', borderBottom: '1px solid #000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>Ours</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.167</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>1.425</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold' }}>0.066</td>
                    </tr>

                    {/* Cat. III (Chain) */}
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td rowSpan={3} style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', backgroundColor: '#e0f2fe', borderRight: '1px solid #000000' }}>
                        Cat. III<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal', color: '#333' }}>(Chain)</span>
                      </td>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>AA</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>1.500</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>22.545</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>1.367</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>ScrewSplat</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>2.000</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>62.820</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.636</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>Ours</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.000</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.849</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold' }}>0.028</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="help has-text-centered" style={{ marginBottom: '1.5rem' }}>
                * Geometry Metric Comparison on PartNet-Mobility Benchmark.
              </p>

              {/* Geometry Metric Charts directly under Geometry Metric Comparison */}
              <div className="tabs is-centered is-toggle is-toggle-rounded my-4">
                <ul>
                  <li className={analysisTab === 0 ? 'is-active' : ''}>
                    <a onClick={() => setAnalysisTab(0)}>Type Error</a>
                  </li>
                  <li className={analysisTab === 1 ? 'is-active' : ''}>
                    <a onClick={() => setAnalysisTab(1)}>Angular Error</a>
                  </li>
                  <li className={analysisTab === 2 ? 'is-active' : ''}>
                    <a onClick={() => setAnalysisTab(2)}>Positional Error</a>
                  </li>
                </ul>
              </div>

              <div className="content mb-5">
                {analysisTab === 0 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="static/images/graph_geometry/type_error.png" alt="Type Error" width="100%" style={{ borderRadius: '8px' }} />
                  </div>
                )}
                {analysisTab === 1 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="static/images/graph_geometry/angular_error.png" alt="Angular Error" width="100%" style={{ borderRadius: '8px' }} />
                  </div>
                )}
                {analysisTab === 2 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="static/images/graph_geometry/positional_error.png" alt="Positional Error" width="100%" style={{ borderRadius: '8px' }} />
                  </div>
                )}
              </div>

              {/* Visual Metric Comparison */}
              <h3 className="title is-4" style={{ marginTop: '3rem' }}>Visual Metric Comparison</h3>
              <p className="mb-4">
                The visual metric evaluation results are summarized in the table below, followed by object renderings in zero-configuration and test-configuration states.
              </p>
              <div className="table-container" style={{ maxWidth: '700px', margin: '1rem auto 0.5rem auto', borderRadius: '8px', overflow: 'hidden', border: '1px solid #000000' }}>
                <table className="table is-fullwidth mb-0" style={{ backgroundColor: '#ffffff', tableLayout: 'fixed' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'var(--primary-color)' }}>
                      <th style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000', borderRight: '1px solid #000000' }}>Category</th>
                      <th style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000', borderRight: '1px solid #000000' }}>Method</th>
                      <th className="has-text-centered" style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000', borderRight: '1px solid #000000' }}>PSNR (dB) ↑</th>
                      <th className="has-text-centered" style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000', borderRight: '1px solid #000000' }}>SSIM ↑</th>
                      <th className="has-text-centered" style={{ width: '20%', color: '#ffffff', verticalAlign: 'middle', borderBottom: '1px solid #000000' }}>LPIPS ↓</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Cat. I (Simple) */}
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td rowSpan={3} style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', backgroundColor: '#e0f2fe', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}>
                        Cat. I<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal', color: '#333' }}>(Simple)</span>
                      </td>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>AA</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>24.107</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>0.944</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.076</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>ScrewSplat</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>26.334</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>0.963</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.045</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000', borderBottom: '1px solid #000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>Ours</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>28.346</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.975</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold' }}>0.023</td>
                    </tr>

                    {/* Cat. II (Multi) */}
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td rowSpan={3} style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', backgroundColor: '#e0f2fe', borderRight: '1px solid #000000', borderBottom: '1px solid #000000' }}>
                        Cat. II<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal', color: '#333' }}>(Multi)</span>
                      </td>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>AA</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>22.068</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>0.930</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.113</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>ScrewSplat</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>21.941</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>0.953</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.075</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000', borderBottom: '1px solid #000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>Ours</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>25.989</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.973</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold' }}>0.029</td>
                    </tr>

                    {/* Cat. III (Chain) */}
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td rowSpan={3} style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', backgroundColor: '#e0f2fe', borderRight: '1px solid #000000' }}>
                        Cat. III<br /><span style={{ fontSize: '0.85em', fontWeight: 'normal', color: '#333' }}>(Chain)</span>
                      </td>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>AA</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>21.895</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>0.949</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.132</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>ScrewSplat</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>25.172</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', borderRight: '1px solid #000000' }}>0.961</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000' }}>0.073</td>
                    </tr>
                    <tr style={{ backgroundColor: '#ffffff', color: '#000000' }}>
                      <td style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>Ours</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>29.606</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold', borderRight: '1px solid #000000' }}>0.983</td>
                      <td className="has-text-centered" style={{ verticalAlign: 'middle', color: '#000000', fontWeight: 'bold' }}>0.017</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="help has-text-centered" style={{ marginBottom: '1.5rem' }}>
                * Visual Metric Comparison on PartNet-Mobility Benchmark.
              </p>

              {/* Rendering comparison images directly under Visual Metric Comparison */}
              <div className="tabs is-centered is-toggle is-toggle-rounded my-4">
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

              <div className="content mb-5">
                {qualitativeTab === 0 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="static/images/eval_renderings/cat1_comparison.png" alt="Qualitative Results Category 1" width="100%" style={{ borderRadius: '8px' }} />
                  </div>
                )}
                {qualitativeTab === 1 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="static/images/eval_renderings/cat2_comparison.png" alt="Qualitative Results Category 2" width="100%" style={{ borderRadius: '8px' }} />
                  </div>
                )}
                {qualitativeTab === 2 && (
                  <div className="animate__animated animate__fadeIn">
                    <img src="static/images/eval_renderings/cat3_comparison.png" alt="Qualitative Results Category 3" width="100%" style={{ borderRadius: '8px' }} />
                  </div>
                )}
              </div>
              {/* PartNet-Mobility Reconstruction Results */}
              <h3 className="title is-4" style={{ marginTop: '3rem' }}>PartNet-Mobility Reconstruction Results</h3>
              <p className="mb-4">
                Below, you can interactively manipulate our reconstruction results on the PartNet-Mobility benchmark dataset used in the baseline evaluations.
              </p>
            </div>

            <InteractiveRenderer manifestFile="scenes_partnet.json" />
          </div>
        </div>
      </div>
    </section>
  );
};
