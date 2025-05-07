import { Settings } from "lucide-react";

export default function Admin() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 gradient-text">Admin Panel</h1>

      <div className="grid grid-cols-1 gap-6">
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center p-12 bg-gray-900/50 rounded-lg border border-gray-800">
          <Settings className="h-16 w-16 text-gray-600 mb-4" />
          <h3 className="text-xl font-semibold text-gray-300 mb-2">
            Admin Access Required
          </h3>
          <p className="text-gray-400 text-center max-w-md">
            Please log in with administrator credentials to access the admin panel.
          </p>
        </div>
      </div>
    </div>
  );
}
