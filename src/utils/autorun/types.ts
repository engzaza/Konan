export interface AutoRunConfig {
  name: string;
  path: string;
  isHidden: boolean;
}

export interface AutoRunStatus {
  isEnabled: boolean;
  error?: string;
}