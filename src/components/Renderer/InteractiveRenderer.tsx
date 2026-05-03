import { useState, useEffect, useCallback } from 'react';
import type { SceneConfig, ScenesManifest } from './types';
import { GaussianViewer } from './GaussianViewer';
import { SceneSidebar } from './SceneSidebar';
import { SceneInfo } from './SceneInfo';
import { DATA_ROOT } from './constants';
import type { RobotMetadata } from './types';
import './InteractiveRenderer.css';

export default function App() {
  const [scenes, setScenes] = useState<SceneConfig[]>([]);
  const [activeScene, setActiveScene] = useState<SceneConfig | null>(null);
  const [manifestError, setManifestError] = useState<string | null>(null);
  const [robotMetadata, setRobotMetadata] = useState<RobotMetadata | null>(null);

  // Load scene manifest on mount
  useEffect(() => {
    fetch(`${DATA_ROOT}data/scenes.json`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        return res.json() as Promise<ScenesManifest>;
      })
      .then((manifest) => {
        setScenes(manifest.scenes);
        if (manifest.scenes.length > 0) {
          setActiveScene(manifest.scenes[0]);
        }
      })
      .catch((err) => {
        console.error('Failed to load scenes manifest:', err);
        setManifestError(String(err));
      });
  }, []);

  const handleSelectScene = useCallback((scene: SceneConfig) => {
    setActiveScene(scene);
  }, []);

  return (
    <div className="renderer-page-container">
      {/* Row 1: Object Selector */}
      <div className="renderer-row">
        <SceneSidebar
          scenes={scenes}
          activeSceneId={activeScene?.id ?? null}
          onSelectScene={handleSelectScene}
        />
      </div>

      {/* Row 2: Viewer */}
      <div className="renderer-row">
        <main className="renderer-viewer-section">
          {manifestError ? (
            <div className="renderer-error">
              <div className="renderer-error-icon">⚠️</div>
              <h2>Failed to load scene manifest</h2>
              <p>{manifestError}</p>
            </div>
          ) : activeScene ? (
            <GaussianViewer 
              scene={activeScene} 
              onMetadataChange={setRobotMetadata}
            />
          ) : (
            <div className="renderer-placeholder">
              <div className="placeholder-icon">◎</div>
              <p>Loading scenes…</p>
            </div>
          )}
        </main>
      </div>

      {/* Row 3: Object Info */}
      <div className="renderer-row">
        <SceneInfo metadata={robotMetadata} />
      </div>
    </div>
  );
}
