import React from 'react';

// [condition, time per object (s), inputs, angular error (°), positional error (%)]
const OVERALL = [
  ['Manual', '103.6 ± 56.7', '59.1 ± 28.0', '1.62 ± 1.05', '1.60 ± 0.85'],
  ['Suggested', '56.0 ± 28.6', '32.2 ± 18.6', '2.61 ± 1.62', '1.35 ± 0.74'],
];

const PER_CATEGORY: [string, string[][]][] = [
  ['Category I', [['Manual', '68.0 ± 66.9', '34.2 ± 26.9', '1.13 ± 1.55', '0.75 ± 0.57'], ['Suggested', '29.0 ± 23.7', '17.0 ± 14.2', '1.70 ± 2.98', '0.80 ± 0.70']]],
  ['Category II', [['Manual', '125.3 ± 45.2', '75.8 ± 35.4', '1.98 ± 1.43', '1.39 ± 0.77'], ['Suggested', '88.9 ± 57.2', '51.4 ± 35.1', '3.45 ± 2.06', '1.09 ± 0.46']]],
  ['Category III', [['Manual', '131.3 ± 101.7', '75.3 ± 42.9', '1.86 ± 2.08', '3.34 ± 1.23'], ['Suggested', '44.1 ± 24.5', '24.3 ± 4.5', '2.75 ± 2.44', '2.80 ± 1.64']]],
];

const HEAD = ['Condition', 'Time per object (s) ↓', 'Inputs ↓', 'Angular error (°) ↓', 'Positional error (%) ↓'];

const Rows: React.FC<{ rows: string[][] }> = ({ rows }) =>
  rows.map((r) => (
    <tr key={r[0]}>
      {r.map((v, k) => (
        <td key={k} className={k ? 'has-text-right' : ''}>{v}</td>
      ))}
    </tr>
  ));

export const UserStudy: React.FC = () => (
  <section className="section" id="user-study">
    <div className="container is-max-desktop">
      <h2 className="title is-3 has-text-centered">4. User Study</h2>
      <p className="content has-text-justified">
        Joint editing with and without suggestions in the same GUI (Sec. IV-B, Table IV of the manuscript). 15
        participants without prior articulation experience each articulated two objects per condition.
      </p>

      <h3 className="title is-4 mt-5">Overall</h3>
      <div className="table-container">
        <table className="table is-narrow is-fullwidth eval-table">
          <thead>
            <tr>{HEAD.map((h, k) => <th key={h} className={k ? 'has-text-right' : ''}>{h}</th>)}</tr>
          </thead>
          <tbody>
            <Rows rows={OVERALL} />
          </tbody>
        </table>
      </div>
      <p className="content has-text-justified">Mean ± std across the 15 participants, each first averaged over their two objects in that condition.</p>

      <h3 className="title is-4 mt-6">Per category</h3>
      <div className="table-container">
        <table className="table is-narrow is-fullwidth eval-table">
          <thead>
            <tr>
              <th>Category</th>
              {HEAD.map((h, k) => <th key={h} className={k ? 'has-text-right' : ''}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {PER_CATEGORY.map(([cat, rows]) =>
              rows.map((r, i) => (
                <tr key={cat + r[0]} className={i === 0 ? 'group-start' : ''}>
                  {i === 0 && <td rowSpan={rows.length}>{cat}</td>}
                  {r.map((v, k) => (
                    <td key={k} className={k ? 'has-text-right' : ''}>{v}</td>
                  ))}
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
      <p className="content has-text-justified">
        Mean ± std across individual trials (n = 12, 12, and 6 per condition for Categories I, II, and III), so the std
        is larger than the per-participant std above.
      </p>
    </div>
  </section>
);
