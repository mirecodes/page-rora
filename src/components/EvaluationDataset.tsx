import React, { useState } from 'react';
import InteractiveRenderer from './Renderer/InteractiveRenderer';

// Per-object results promised in the R2-3 response; values copied from the appendix of the response letter.
const CATS = ['Category I', 'Category II', 'Category III'];
const CAT_DESC = ['single joint, 6 objects', 'multiple joints on one base, 6 objects', 'chain, 4 objects'];
const JOINT_COLORS = ['#e11d48', '#2563eb', '#16a34a', '#f59e0b'];

const CategoryTabs: React.FC<{ children: (cat: number) => React.ReactNode }> = ({ children }) => {
  const [cat, setCat] = useState(0);
  return (
    <>
      <div className="tabs is-centered is-toggle is-toggle-rounded my-4">
        <ul>
          {CATS.map((c, i) => (
            <li key={c} className={i === cat ? 'is-active' : ''}>
              <a onClick={() => setCat(i)}>{c}</a>
            </li>
          ))}
        </ul>
      </div>
      {children(cat)}
    </>
  );
};

// Kinematic cell: "ang|pos", "ang" (prismatic), "-" (no paired joint), "~..." (paired with the wrong type: not found, not averaged).
type KinJoint = [label: string, type: 'R' | 'P', cells: string[]];
type KinObject = { obj: string; joints: KinJoint[] };
type KinCat = { objects: KinObject[]; found: string[]; mean: string[] };

const KIN: KinCat[] = [
  {
    objects: [
      { obj: 'bucket (2352)', joints: [['J0 bucket_body_to_handle', 'R', ['0.00|2.16', '27.69|17.17', '0.05|1.65', '-', '0.04|0.89', '0.04|0.89']]] },
      { obj: 'fan (1375)', joints: [['J0 fan_frame_to_rotor', 'R', ['0.00|0.44', '11.86|6.45', '0.05|0.19', '0.02|0.03', '0.54|0.25', '0.54|0.25']]] },
      { obj: 'globe (736)', joints: [['J0 globe_frame_to_sphere', 'R', ['15.36|2.55', '69.09|5.43', '19.56|0.37', '0.34|0.18', '0.47|0.38', '0.47|0.38']]] },
      { obj: 'microwave (7310)', joints: [['J0 microwave_body_to_door', 'R', ['0.00|1.52', '0.16|65.95', '0.02|1.16', '~89.04|41.73', '8.32|1.93', '1.01|0.84']]] },
      { obj: 'trash can (11818)', joints: [['J0 trashcan_body_to_cover_lid', 'P', ['~90.00', '~89.90', '~89.86', '-', '0.36', '0.36']]] },
      { obj: 'usb (61)', joints: [['J0 usb_body_to_lid', 'P', ['0.00', '~85.08', '0.05', '0.01', '0.08', '2.04']]] },
    ],
    found: ['5/6', '4/6', '5/6', '3/6', '6/6', '6/6'],
    mean: ['3.07|1.67', '27.20|23.75', '3.95|0.84', '0.12|0.10', '1.63|0.86', '0.74|0.59'],
  },
  {
    objects: [
      {
        obj: 'box (162)',
        joints: [
          ['J0 box_body_to_lid', 'R', ['90.00|6.75', '85.88|5.61', '0.03|1.68', '~88.74|10.61', '27.37|0.60', '4.65|0.60']],
          ['J1 box_body_to_lid_2', 'R', ['0.00|0.17', '0.42|0.66', '0.08|1.62', '0.15|0.38', '34.97|0.63', '0.53|0.63']],
          ['J2 box_body_to_lid_3', 'R', ['0.00|0.17', '89.48|22.88', '0.05|2.56', '0.15|0.19', '9.51|8.83', '0.62|0.34']],
          ['J3 box_body_to_lid_4', 'R', ['90.00|19.08', '0.02|0.34', '0.10|2.16', '0.03|0.39', '0.63|9.07', '0.63|0.17']],
        ],
      },
      {
        obj: 'faucet (167)',
        joints: [
          ['J0 faucet_base_to_switch', 'R', ['0.00|20.67', '-', '0.13|1.30', '-', '3.37|1.54', '0.86|0.45']],
          ['J1 faucet_base_to_switch_2', 'R', ['0.00|20.67', '3.65|2.98', '0.06|1.35', '-', '2.06|1.17', '1.41|0.60']],
          ['J3 faucet_base_to_spout', 'R', ['0.00|0.83', '2.45|5.34', '0.03|0.54', '-', '4.52|0.23', '0.92|0.23']],
        ],
      },
      {
        obj: 'folding chair (557)',
        joints: [
          ['J0 leg_to_seat', 'R', ['-', '60.09|32.40', '0.05|0.71', '0.05|0.08', '0.39|0.83', '0.39|0.36']],
          ['J2 leg_to_leg_2', 'R', ['0.00|23.61', '88.85|12.29', '0.28|0.88', '0.10|0.24', '0.47|0.44', '0.47|0.44']],
        ],
      },
      {
        obj: 'refrigerator (10655)',
        joints: [
          ['J1 refrigerator_body_to_door', 'R', ['0.00|0.49', '-', '0.04|1.55', '0.17|3.09', '3.76|2.42', '0.54|2.42']],
          ['J2 refrigerator_body_to_door_2', 'R', ['0.00|17.53', '89.14|32.26', '0.04|0.52', '~88.78|8.02', '0.54|1.55', '0.54|1.55']],
        ],
      },
      {
        obj: 'toaster (3482)',
        joints: [
          ['J0 toaster_body_to_knob', 'R', ['~67.77|18.41', '-', '7.96|3.51', '-', '5.25|0.73', '5.25|0.73']],
          ['J1 toaster_body_to_slider', 'P', ['0.00', '89.85', '0.09', '-', '30.16', '2.63']],
        ],
      },
      {
        obj: 'toilet (2621)',
        joints: [
          ['J0 toilet_body_to_lever', 'R', ['50.08|3.67', '59.56|33.33', '5.96|1.30', '-', '-', '-']],
          ['J1 toilet_body_to_lid', 'R', ['0.00|2.48', '0.15|3.34', '0.03|0.56', '1.39|38.12', '5.90|0.88', '0.73|0.88']],
          ['J2 toilet_body_to_seat', 'R', ['0.00|0.97', '4.06|29.23', '0.07|0.73', '-', '6.60|2.19', '4.55|0.30']],
          ['J3 toilet_body_to_pump_lid', 'P', ['~89.71', '~33.36', '1.51', '-', '1.57', '1.57']],
        ],
      },
    ],
    found: ['14/17', '13/17', '17/17', '7/17', '16/17', '16/17'],
    mean: ['16.43|9.01', '44.12|15.06', '0.97|1.40', '0.29|6.07', '8.57|2.22', '1.64|0.69'],
  },
  {
    objects: [
      {
        obj: 'dispenser (3619)',
        joints: [
          ['J0 lid_to_handle', 'R', ['0.00|8.01', '2.44|15.67', '0.71|0.93', '-', '2.01|7.66', '2.01|7.66']],
          ['J2 link_2_helper_to_lid', 'R', ['0.00|0.54', '40.33|13.94', '0.08|1.15', '1.79|1.39', '1.02|0.39', '1.02|0.39']],
          ['J3 dispenser_body_to_link_2_helper', 'P', ['-', '-', '-', '-', '0.27', '0.27']],
        ],
      },
      {
        obj: 'lamp (14372)',
        joints: [
          ['J1 bar_to_head', 'R', ['90.00|75.64', '60.79|8.23', '0.41|3.66', '-', '2.26|6.55', '1.31|6.06']],
          ['J2 bar_2_to_bar', 'R', ['90.00|92.36', '-', '1.39|1.04', '-', '9.51|1.58', '1.89|2.10']],
          ['J3 lamp_base_to_bar_2', 'R', ['90.00|9.83', '-', '0.05|0.77', '-', '4.64|0.41', '0.94|0.41']],
        ],
      },
      {
        obj: 'safe (1594)',
        joints: [
          ['J0 safe_body_to_door', 'R', ['0.00|13.63', '0.09|2.16', '0.06|0.28', '0.07|0.45', '0.27|5.46', '0.27|0.65']],
          ['J1 door_to_knob', 'R', ['90.00|26.92', '1.73|5.05', '0.25|2.24', '-', '1.11|0.39', '0.12|0.39']],
        ],
      },
      {
        obj: 'stapler (3303)',
        joints: [
          ['J0 lid_to_stapler_body', 'R', ['0.18|4.83', '-', '0.19|3.89', '0.18|157.83', '0.67|4.60', '0.67|0.43']],
          ['J1 stapler_base_to_lid', 'R', ['0.18|9.57', '-', '0.21|1.48', '0.11|1.32', '0.39|4.40', '0.39|0.28']],
        ],
      },
    ],
    found: ['9/10', '5/10', '9/10', '4/10', '10/10', '10/10'],
    mean: ['40.04|26.81', '21.07|9.01', '0.37|1.71', '0.53|40.25', '2.21|3.49', '0.89|2.04'],
  },
];

const KIN_METHODS = ['AA', 'AM', 'Particulate†', 'ScrewSplat', 'RORA-Sugg', 'RORA-Full'];
const GREY = '#a3a3a3';

function kinCells(s: string, type: 'R' | 'P'): [string, string] {
  if (s === '-') return ['–', type === 'R' ? '–' : ''];
  const [ang, pos = ''] = s.replace('~', '').split('|');
  return [ang, pos];
}

const KinematicTable: React.FC<{ cat: number }> = ({ cat }) => {
  const data = KIN[cat];
  const methods = KIN_METHODS.map((m) => (m === 'ScrewSplat' && cat === 2 ? 'ScrewSplat‡' : m));
  return (
    <div className="table-container">
      <table className="table is-narrow is-fullwidth eval-table">
        <thead>
          <tr>
            <th rowSpan={2}>Object (PartNet ID)</th>
            <th rowSpan={2}>GT joint</th>
            {methods.map((m) => (
              <th key={m} colSpan={2} className="has-text-centered">{m}</th>
            ))}
          </tr>
          <tr>
            {methods.map((m) => (
              <React.Fragment key={m}>
                <th className="has-text-right">e<sub>ang</sub></th>
                <th className="has-text-right">e<sub>pos</sub></th>
              </React.Fragment>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.objects.map(({ obj, joints }) =>
            joints.map(([label, type, cells], j) => (
              <tr key={obj + label} className={j === 0 ? 'group-start' : ''}>
                {j === 0 && <td rowSpan={joints.length}>{obj}</td>}
                <td className="joint-label">
                  <span className="joint-swatch" style={{ background: JOINT_COLORS[j] }} />
                  {label.replace(' ', ` ${type} `)}
                </td>
                {cells.map((s, m) => {
                  const style = s.startsWith('~') ? { color: GREY } : undefined;
                  const [ang, pos] = kinCells(s, type);
                  return (
                    <React.Fragment key={m}>
                      <td className="has-text-right" style={style}>{ang}</td>
                      <td className="has-text-right" style={style}>{pos}</td>
                    </React.Fragment>
                  );
                })}
              </tr>
            )),
          )}
          <tr className="group-start">
            <th colSpan={2}>Found joints</th>
            {data.found.map((f, m) => (
              <th key={m} colSpan={2} className="has-text-centered">{f}</th>
            ))}
          </tr>
          <tr>
            <th colSpan={2}>Mean (Table I)</th>
            {data.mean.map((s, m) => {
              const [ang, pos] = s.split('|');
              return (
                <React.Fragment key={m}>
                  <th className="has-text-right">{ang}</th>
                  <th className="has-text-right">{pos}</th>
                </React.Fragment>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

// Visual metrics: [method, SSIM Rest, Δ mean, Δ std, LPIPS Rest, Δ mean, Δ std]
type VisObject = { obj: string; rows: string[][] };
const VIS: VisObject[][] = [
  [
    { obj: 'bucket (2352)', rows: [['AA', '0.977', '−0.052', '0.013', '0.041', '+0.017', '0.009'], ['ScrewSplat', '0.881', '−0.014', '0.004', '0.215', '−0.017', '0.017'], ['RORA-Full', '0.876', '+0.004', '0.003', '0.126', '−0.014', '0.011']] },
    { obj: 'fan (1375)', rows: [['AA', '0.989', '−0.026', '0.026', '0.004', '+0.007', '0.005'], ['ScrewSplat', '0.805', '+0.001', '0.006', '0.114', '−0.001', '0.003'], ['RORA-Full', '0.940', '−0.007', '0.009', '0.049', '+0.002', '0.002']] },
    { obj: 'globe (736)', rows: [['AA', '0.684', '+0.007', '0.002', '0.317', '+0.013', '0.058'], ['ScrewSplat', '0.918', '−0.002', '0.003', '0.130', '+0.013', '0.012'], ['RORA-Full', '0.951', '−0.001', '0.004', '0.076', '+0.010', '0.010']] },
    { obj: 'microwave (7310)', rows: [['AA', '0.981', '−0.076', '0.008', '0.017', '+0.024', '0.005'], ['ScrewSplat', '0.858', '−0.079', '0.017', '0.179', '+0.096', '0.018'], ['RORA-Full', '0.872', '+0.059', '0.010', '0.079', '−0.027', '0.001']] },
    { obj: 'trash can (11818)', rows: [['AA', '0.965', '−0.069', '0.023', '0.057', '+0.034', '0.031'], ['ScrewSplat', '0.890', '+0.009', '0.005', '0.204', '−0.003', '0.010'], ['RORA-Full', '0.930', '−0.004', '0.007', '0.150', '+0.014', '0.024']] },
    { obj: 'usb (61)', rows: [['AA', '0.978', '+0.000', '0.001', '0.015', '+0.003', '0.001'], ['ScrewSplat', '0.852', '+0.075', '0.001', '0.110', '−0.043', '0.002'], ['RORA-Full', '0.913', '+0.021', '0.005', '0.056', '−0.002', '0.001']] },
    { obj: 'Mean (Table II)', rows: [['AA', '0.929', '−0.036', '0.036', '0.075', '+0.016', '0.025'], ['ScrewSplat', '0.867', '−0.002', '0.047', '0.159', '+0.007', '0.046'], ['RORA-Full', '0.914', '+0.012', '0.024', '0.089', '−0.003', '0.018']] },
  ],
  [
    { obj: 'box (162)', rows: [['AA', '0.647', '+0.020', '0.063', '0.481', '−0.022', '0.063'], ['ScrewSplat', '0.862', '−0.044', '0.016', '0.160', '+0.069', '0.052'], ['RORA-Full', '0.931', '−0.018', '0.019', '0.121', '+0.017', '0.020']] },
    { obj: 'faucet (167)', rows: [['AA', '0.864', '−0.126', '0.013', '0.061', '+0.144', '0.004'], ['ScrewSplat', '0.434', '+0.008', '0.023', '0.547', '−0.034', '0.016'], ['RORA-Full', '0.663', '+0.034', '0.034', '0.256', '+0.021', '0.074']] },
    { obj: 'folding chair (557)', rows: [['AA', '0.384', '−0.163', '0.126', '0.544', '+0.151', '0.138'], ['ScrewSplat', '0.847', '+0.000', '0.002', '0.118', '+0.030', '0.009'], ['RORA-Full', '0.950', '−0.050', '0.032', '0.040', '+0.051', '0.028']] },
    { obj: 'refrigerator (10655)', rows: [['AA', '0.856', '−0.038', '0.053', '0.103', '+0.063', '0.079'], ['ScrewSplat', '0.740', '−0.005', '0.034', '0.313', '−0.023', '0.034'], ['RORA-Full', '0.761', '+0.042', '0.043', '0.207', '−0.052', '0.017']] },
    { obj: 'toaster (3482)', rows: [['AA', '0.954', '−0.000', '0.000', '0.075', '−0.001', '0.002'], ['ScrewSplat', '0.921', '+0.001', '0.001', '0.121', '−0.005', '0.002'], ['RORA-Full', '0.962', '−0.017', '0.005', '0.064', '+0.018', '0.007']] },
    { obj: 'toilet (2621)', rows: [['AA', '0.877', '−0.018', '0.005', '0.154', '+0.008', '0.002'], ['ScrewSplat', '0.836', '−0.001', '0.004', '0.195', '+0.008', '0.006'], ['RORA-Full', '0.905', '+0.003', '0.008', '0.088', '+0.006', '0.002']] },
    { obj: 'Mean (Table II)', rows: [['AA', '0.763', '−0.054', '0.086', '0.236', '+0.057', '0.092'], ['ScrewSplat', '0.773', '−0.007', '0.023', '0.242', '+0.008', '0.042'], ['RORA-Full', '0.862', '−0.001', '0.040', '0.129', '+0.010', '0.043']] },
  ],
  [
    { obj: 'dispenser (3619)', rows: [['AA', '0.729', '−0.031', '0.032', '0.150', '+0.022', '0.008'], ['ScrewSplat‡', '0.760', '+0.017', '0.048', '0.174', '−0.014', '0.021'], ['RORA-Full', '0.901', '−0.047', '0.003', '0.050', '+0.046', '0.012']] },
    { obj: 'lamp (14372)', rows: [['AA', '0.256', '+0.063', '0.022', '0.795', '−0.028', '0.023'], ['ScrewSplat‡', '0.323', '+0.017', '0.027', '0.686', '+0.043', '0.019'], ['RORA-Full', '0.837', '−0.277', '0.116', '0.160', '+0.131', '0.033']] },
    { obj: 'safe (1594)', rows: [['AA', '0.775', '+0.006', '0.005', '0.214', '+0.077', '0.051'], ['ScrewSplat‡', '0.931', '−0.070', '0.018', '0.179', '+0.080', '0.046'], ['RORA-Full', '0.934', '−0.008', '0.009', '0.175', '−0.025', '0.001']] },
    { obj: 'stapler (3303)', rows: [['AA', '0.579', '−0.022', '0.044', '0.397', '+0.061', '0.055'], ['ScrewSplat‡', '0.603', '−0.020', '0.077', '0.448', '+0.005', '0.022'], ['RORA-Full', '0.859', '+0.033', '0.028', '0.165', '−0.038', '0.049']] },
    { obj: 'Mean (Table II)', rows: [['AA', '0.585', '+0.004', '0.046', '0.389', '+0.033', '0.054'], ['ScrewSplat‡', '0.654', '−0.014', '0.055', '0.372', '+0.029', '0.045'], ['RORA-Full', '0.883', '−0.075', '0.136', '0.138', '+0.029', '0.075']] },
  ],
];

const VisualTable: React.FC<{ cat: number }> = ({ cat }) => (
  <div className="table-container">
    <table className="table is-narrow is-fullwidth eval-table">
      <thead>
        <tr>
          <th rowSpan={2}>Object (PartNet ID)</th>
          <th rowSpan={2}>Method</th>
          <th colSpan={3} className="has-text-centered">SSIM</th>
          <th colSpan={3} className="has-text-centered">LPIPS</th>
        </tr>
        <tr>
          {['Rest ↑', 'Δ mean ↑', 'Δ std ↓', 'Rest ↓', 'Δ mean ↓', 'Δ std ↓'].map((h) => (
            <th key={h} className="has-text-right">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {VIS[cat].map(({ obj, rows }) => {
          const Cell = obj.startsWith('Mean') ? 'th' : 'td';
          return rows.map((r, i) => (
            <tr key={obj + r[0]} className={i === 0 ? 'group-start' : ''}>
              {i === 0 && <Cell rowSpan={rows.length}>{obj}</Cell>}
              {r.map((v, k) => (
                <Cell key={k} className={k ? 'has-text-right' : ''}>{v}</Cell>
              ))}
            </tr>
          ));
        })}
      </tbody>
    </table>
  </div>
);

const FigureTabs: React.FC<{ dir: string; alt: string }> = ({ dir, alt }) => (
  <CategoryTabs>
    {(cat) => (
      <img src={`./static/images/${dir}/cat${cat + 1}.jpg`} alt={`${alt}, ${CATS[cat]} (${CAT_DESC[cat]})`} width="100%" />
    )}
  </CategoryTabs>
);

export const EvaluationDataset: React.FC = () => (
  <section className="section" id="evaluation-dataset">
    <div className="container is-max-desktop">
      <h2 className="title is-3 has-text-centered">2. Evaluation Dataset</h2>
      <div className="content has-text-justified">
        <p>
          16 objects from PartNet-Mobility with 33 movable joints: Category I (single joint, 6 objects), Category II
          (multiple joints on one base, 6 objects), and Category III (chain, 4 objects). Methods, metrics, and
          protocol are as in Sec. IV-A of the manuscript. AA: Articulate-Anything, AM: Articulate AnyMesh.
          †Particulate is privileged since its training dataset includes PartNet-Mobility. ‡Chains (Category III) are
          outside ScrewSplat's single-base model.
        </p>
      </div>

      <h3 className="title is-4 mt-6">Evaluation objects</h3>
      <InteractiveRenderer manifestFile="scenes_partnet.json" />

      <h3 className="title is-4 mt-6">Joint mapping</h3>
      <p className="content has-text-justified">
        Paired joints at the GT zero state, seen from the camera of the visual metrics. Each axis has the color and
        label of its paired GT joint; grey: wrong type. AM and Particulate are shown as their own segmentation of the
        voxelized mesh in its input pose; RORA-Sugg is drawn on the RORA-Full render.
      </p>
      <FigureTabs dir="joint_mapping" alt="Joint mapping" />

      <h3 className="title is-4 mt-6">Kinematic metrics per joint</h3>
      <p className="content has-text-justified">
        e<sub>ang</sub> in degrees, e<sub>pos</sub> in % of the GT bounding-box diagonal (revolute joints only). R/P:
        revolute/prismatic GT joint. Grey: paired with the wrong type, so not found and not averaged. –: no paired
        joint.
      </p>
      <CategoryTabs>{(cat) => <KinematicTable cat={cat} />}</CategoryTabs>

      <h3 className="title is-4 mt-6">Visual metrics per object</h3>
      <p className="content has-text-justified">
        Rest: score at the GT zero state. Δ: articulated minus zero-state score over three random configurations
        (mean, std). Mean rows: Rest averaged over the objects; Δ mean and std over all object–configuration pairs.
      </p>
      <CategoryTabs>{(cat) => <VisualTable cat={cat} />}</CategoryTabs>

      <h3 className="title is-4 mt-6">Rendered evaluation states</h3>
      <p className="content has-text-justified">
        Per object, the zero state (first row) and the three random configurations of the visual metrics, as cropped
        and scored. q: the GT joint values in joint order (revolute in degrees, prismatic in metres).
      </p>
      <FigureTabs dir="eval_states" alt="Rendered evaluation states" />
    </div>
  </section>
);
