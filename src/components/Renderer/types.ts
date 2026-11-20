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
  thumbnail?: string;
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

// One line of the link tree, e.g. prefix "│   └── ", link "link_3", joint "joint_2_3 · revolute"
export interface LinkTreeLine {
  prefix: string;
  link: string;
  joint?: string;
}

export interface RobotMetadata {
  joints: JointMetadata[];
  tree: LinkTreeLine[];
}
