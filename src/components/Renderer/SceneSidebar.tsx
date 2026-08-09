import type { SceneConfig } from './types';
import './SceneSidebar.css';

interface SceneSidebarProps {
  scenes: SceneConfig[];
  activeSceneId: string | null;
  onSelectScene: (scene: SceneConfig) => void;
}

const THUMBNAIL_MAP: Record<string, string> = {
  real_diffuser: 'static/images/thumnails/diffuser.png',
  real_doorlock: 'static/images/thumnails/doorlock.png',
  real_extinguisher: 'static/images/thumnails/extinguisher.png',
  real_gum: 'static/images/thumnails/gum.png',
  real_lamp: 'static/images/thumnails/lamp.png',
  real_laptop: 'static/images/thumnails/laptop.png',
  real_microwave: 'static/images/thumnails/microwave.png',
  real_shaker: 'static/images/thumnails/bottle.png',
  real_grinder: 'static/images/thumnails/grinder.png',
  real_spray: 'static/images/thumnails/spray.png',
  real_toolbox: 'static/images/thumnails/toolbox.png',
  real_wifi: 'static/images/thumnails/wifi.png',
};

export function SceneSidebar({ scenes, activeSceneId, onSelectScene }: SceneSidebarProps) {
  return (
    <div className="object-selector">
      <h3 className="selector-title">Select Object</h3>
      <div className="selector-grid">
        {scenes.map((scene) => {
          const thumbnailSrc = scene.thumbnail || THUMBNAIL_MAP[scene.id];
          return (
            <button
              key={scene.id}
              className={`selector-item ${activeSceneId === scene.id ? 'active' : ''}`}
              onClick={() => onSelectScene(scene)}
            >
              <div className="selector-square">
                {thumbnailSrc ? (
                  <img src={thumbnailSrc} alt={scene.name} className="selector-img" loading="lazy" />
                ) : (
                  <div className="selector-placeholder">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
              <span className="selector-name">{scene.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
