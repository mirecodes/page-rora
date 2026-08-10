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
        <h3 className="info-title">Object Overview</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Name</span>
            <span className="info-value">{metadata.name}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Links</span>
            <span className="info-value">{metadata.linkCount} items</span>
          </div>
          <div className="info-item">
            <span className="info-label">Joints</span>
            <span className="info-value">{metadata.jointCount} active</span>
          </div>
        </div>
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
