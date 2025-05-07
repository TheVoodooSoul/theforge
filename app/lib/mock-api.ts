import { GenerateSceneParams, Scene } from './types';

// Mock thumbnails for generated scenes
const mockThumbnails = [
  'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
  'https://images.pexels.com/photos/1870438/pexels-photo-1870438.jpeg',
  'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg',
  'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg',
];

// Extract characters and actions from scene description
export function parseCharacterActions(description: string): { name: string; action: string }[] {
  const matches = description.match(/@(\w+)\s+([^@]+)/g) || [];
  return matches.map(match => {
    const [_, name, action] = match.match(/@(\w+)\s+(.+)/) || [];
    return { name, action: action.trim() };
  });
}

// Generate a mock scene
export async function generateScene(params: GenerateSceneParams): Promise<Scene> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const characters = parseCharacterActions(params.description);
  
  return {
    id: Math.random().toString(36).substr(2, 9),
    description: params.description,
    model: params.model,
    duration: params.duration,
    quality: params.quality,
    style: params.style,
    environment: params.environment,
    lighting: params.lighting,
    characters,
    thumbnail: mockThumbnails[Math.floor(Math.random() * mockThumbnails.length)],
    createdAt: new Date(),
    status: 'completed',
  };
}

// Mock scene storage
let mockScenes: Scene[] = [];

// Get all scenes
export async function getScenes(): Promise<Scene[]> {
  return mockScenes;
}

// Add a scene
export async function addScene(scene: Scene): Promise<void> {
  mockScenes = [scene, ...mockScenes];
}

// Delete a scene
export async function deleteScene(id: string): Promise<void> {
  mockScenes = mockScenes.filter(scene => scene.id !== id);
}
