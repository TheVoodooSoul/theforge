'use client';

import { Scene } from '@/lib/types';
import Image from 'next/image';
import { Clock, Film, Lightbulb, Mountain, Palette, User } from 'lucide-react';

interface SceneViewerProps {
  scene: Scene;
}

export default function SceneViewer({ scene }: SceneViewerProps) {
  return (
    <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={scene.thumbnail}
            alt={scene.description}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Scene Details</h3>
            <p className="text-gray-400">{scene.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Film className="h-5 w-5 text-primary" />
              <span className="text-gray-300">{scene.model}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-gray-300">{scene.duration}s</span>
            </div>
            <div className="flex items-center space-x-2">
              <Palette className="h-5 w-5 text-primary" />
              <span className="text-gray-300">{scene.style}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mountain className="h-5 w-5 text-primary" />
              <span className="text-gray-300">{scene.environment}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              <span className="text-gray-300">{scene.lighting}</span>
            </div>
          </div>

          {scene.characters.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Characters</h4>
              <div className="space-y-2">
                {scene.characters.map((character, index) => (
                  <div key={index} className="flex items-center space-x-2 text-gray-300">
                    <User className="h-4 w-4 text-primary" />
                    <span className="font-medium">{character.name}:</span>
                    <span>{character.action}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
