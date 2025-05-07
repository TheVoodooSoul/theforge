export interface Scene {
  id: string;
  description: string;
  model: string;
  duration: number;
  quality: number;
  style: string;
  environment: string;
  lighting: string;
  characters: Character[];
  thumbnail: string;
  createdAt: Date;
  status: 'processing' | 'completed' | 'failed';
}

export interface Character {
  name: string;
  action: string;
}

export interface GenerateSceneParams {
  description: string;
  model: string;
  duration: number;
  quality: number;
  style: string;
  environment: string;
  lighting: string;
}
