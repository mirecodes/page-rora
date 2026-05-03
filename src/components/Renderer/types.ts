export interface GaussianEntry {
  id: number;
  file: string;
  label: string;
}

export interface SceneConfig {
  id: string;
  name: string;
  description: string;
  path: string;
  gaussians: GaussianEntry[];
}

export interface ScenesManifest {
  scenes: SceneConfig[];
}

export type LoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';

export interface SplatLoadState {
  gaussianId: number;
  label: string;
  status: LoadingStatus;
  progress: number;
  errorMsg?: string;
}

export interface JointMetadata {
  name: string;
  type: string;
  min: number;
  max: number;
  value: number;
  parent: string;
  child: string;
}

export interface RobotMetadata {
  name: string;
  linkCount: number;
  links: string[];
  jointCount: number;
  joints: JointMetadata[];
}
