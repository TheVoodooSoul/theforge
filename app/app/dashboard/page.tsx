'use client';

import { useEffect, useState } from 'react';
import { Film, Plus, Trash2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getScenes, deleteScene } from '@/lib/mock-api';
import type { Scene } from '@/lib/types';
import SceneViewer from '@/components/scene-viewer';

export default function Dashboard() {
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [selectedScene, setSelectedScene] = useState<Scene | null>(null);

  useEffect(() => {
    loadScenes();
  }, []);

  const loadScenes = async () => {
    const loadedScenes = await getScenes();
    setScenes(loadedScenes);
  };

  const handleDelete = async (id: string) => {
    await deleteScene(id);
    setScenes(scenes.filter(scene => scene.id !== id));
    if (selectedScene?.id === id) {
      setSelectedScene(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold gradient-text">My Scenes</h1>
        <Link
          href="/generate"
          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          New Scene
        </Link>
      </div>

      {selectedScene && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Selected Scene</h2>
          <SceneViewer scene={selectedScene} />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenes.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center p-12 bg-gray-900/50 rounded-lg border border-gray-800">
            <Film className="h-16 w-16 text-gray-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No Scenes Yet
            </h3>
            <p className="text-gray-400 text-center mb-4">
              Start creating amazing action scenes with our AI generator
            </p>
            <Link
              href="/generate"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Create Your First Scene
            </Link>
          </div>
        ) : (
          scenes.map((scene) => (
            <div
              key={scene.id}
              className="bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-primary transition-colors cursor-pointer"
              onClick={() => setSelectedScene(scene)}
            >
              <div className="relative aspect-video">
                <Image
                  src={scene.thumbnail}
                  alt={scene.description}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-300 line-clamp-2 mb-2">
                  {scene.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-400">
                    <Film className="h-4 w-4" />
                    <span>{scene.model}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(scene.id);
                    }}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
