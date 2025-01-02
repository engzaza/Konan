export interface StorageKey {
  key: string;
  defaultValue: any;
}

export interface StorageKeys {
  autoStart: StorageKey;
}

export interface AutoStartConfig {
  enabled: boolean;
  lastModified: string;
}