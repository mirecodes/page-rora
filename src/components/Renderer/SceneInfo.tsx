import type { RobotMetadata } from './types';
import './SceneInfo.css';

interface SceneInfoProps {
  metadata: RobotMetadata | null;
}

export function SceneInfo({ metadata }: SceneInfoProps) {
  if (!metadata) {
    return (
      <div className="scene-info-empty">
        <p>No object data available</p>
      </div>
    );
  }

  return (
    <div className="scene-info">
      <div className="info-section">
        <h3 className="info-title">Link Tree</h3>
        <pre className="link-tree">
          {metadata.tree.map((line, i) => (
            <div key={i}>
              <span className="tree-branch">{line.prefix}</span>
              {line.link}
              {line.joint && <span className="tree-joint">  ({line.joint})</span>}
            </div>
          ))}
        </pre>
      </div>

      <div className="info-section">
        <h3 className="info-title">Kinematic Structure</h3>
        <div className="joints-table-container">
          <table className="joints-table">
            <thead>
              <tr>
                <th>Joint Name</th>
                <th>Type</th>
                <th>Parent Link</th>
                <th>Child Link</th>
                <th>Range</th>
              </tr>
            </thead>
            <tbody>
              {metadata.joints.map((joint) => (
                <tr key={joint.name}>
                  <td>{joint.name}</td>
                  <td><span className={`tag-type ${joint.type}`}>{joint.type}</span></td>
                  <td>{joint.parent}</td>
                  <td>{joint.child}</td>
                  <td>
                    {joint.type === 'fixed' 
                      ? 'N/A' 
                      : `${joint.min.toFixed(0)} to ${joint.max.toFixed(0)}${joint.type === 'revolute' ? '°' : 'm'}`}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
