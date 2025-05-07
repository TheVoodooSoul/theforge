import { Users } from "lucide-react";

export default function Community() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Community</h1>

      <div className="grid grid-cols-1 gap-6">
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center p-12 bg-gray-900/50 rounded-lg border border-gray-800">
          <Users className="h-16 w-16 text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            Community Coming Soon
          </h3>
          <p className="text-gray-400 text-center max-w-md">
            Share your generated scenes, get inspired by others, and connect with
            fellow creators. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
}
