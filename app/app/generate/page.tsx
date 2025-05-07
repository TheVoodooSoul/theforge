'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wand2 } from 'lucide-react';
import { generateScene, addScene } from '@/lib/mock-api';
import type { GenerateSceneParams } from '@/lib/types';

const models = ['SD1.5', 'SDXL'];
const styles = ['Cinematic', 'Anime', 'Comic Book', 'Realistic', 'Noir', 'Sci-Fi'];
const environments = ['Indoor', 'Outdoor', 'Urban', 'Nature', 'Space', 'Underwater'];
const lighting = ['Natural', 'Studio', 'Dark', 'Neon', 'Dramatic', 'Soft'];

export default function Generate() {
  const router = useRouter();
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState<GenerateSceneParams>({
    description: '',
    model: 'SD1.5',
    duration: 5,
    quality: 75,
    style: 'Cinematic',
    environment: 'Indoor',
    lighting: 'Natural',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    
    try {
      const scene = await generateScene(formData);
      await addScene(scene);
      router.push('/dashboard');
    } catch (error) {
      console.error('Failed to generate scene:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 gradient-text">
        Generate Action Scene
      </h1>

      <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Scene Description
            </label>
            <div className="mb-2">
              <span className="text-xs text-gray-400">
                Use @Character to label character actions (e.g., @Hero jumps across rooftops)
              </span>
            </div>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              rows={4}
              placeholder="@Hero leaps from a tall building while @Villain pursues with mechanical wings..."
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                AI Model
              </label>
              <select
                name="model"
                value={formData.model}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {models.map(model => (
                  <option key={model} value={model}>{model}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Style
              </label>
              <select
                name="style"
                value={formData.style}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {styles.map(style => (
                  <option key={style} value={style}>{style}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Environment
              </label>
              <select
                name="environment"
                value={formData.environment}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {environments.map(env => (
                  <option key={env} value={env}>{env}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Lighting
              </label>
              <select
                name="lighting"
                value={formData.lighting}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {lighting.map(light => (
                  <option key={light} value={light}>{light}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Duration (seconds)
              </label>
              <input
                type="range"
                name="duration"
                min="5"
                max="10"
                value={formData.duration}
                onChange={handleChange}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="text-sm text-gray-400 mt-1">{formData.duration} seconds</div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Quality
              </label>
              <input
                type="range"
                name="quality"
                min="1"
                max="100"
                value={formData.quality}
                onChange={handleChange}
                className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="text-sm text-gray-400 mt-1">{formData.quality}%</div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full flex items-center justify-center px-4 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50"
          >
            {isGenerating ? (
              <>
                <span className="animate-spin mr-2">⚡</span>
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="h-5 w-5 mr-2" />
                Generate Scene
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
