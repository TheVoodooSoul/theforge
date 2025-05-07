import Link from "next/link";
import { BookOpen, Server, Wrench, AlertCircle, ArrowRight } from 'lucide-react';

export default function Guide() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8 gradient-text">
        Automatic1111 Setup Guide
      </h1>

      <div className="space-y-8">
        {/* Overview Section */}
        <section className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
          <div className="flex items-start mb-4">
            <BookOpen className="h-6 w-6 text-primary mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-3">What is Automatic1111?</h2>
              <p className="text-gray-400">
                Automatic1111 is a powerful web UI for Stable Diffusion, enabling high-quality image generation. 
                It serves as the backbone of The Forge, providing the advanced AI capabilities needed for 
                generating cinematic action scenes. The interface offers extensive customization options and 
                supports multiple models, making it perfect for creating diverse visual content.
              </p>
            </div>
          </div>
        </section>

        {/* VM Setup Section */}
        <section className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
          <div className="flex items-start mb-4">
            <Server className="h-6 w-6 text-primary mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-3">Setting Up on a Virtual Machine</h2>
              <p className="text-gray-400 mb-4">
                We recommend using either Vast.ai or Lambda Labs for hosting your Automatic1111 instance. 
                Here's how to get started:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">Vast.ai Setup</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-400">
                    <li>Create an account on Vast.ai</li>
                    <li>Select a GPU instance (minimum 8GB VRAM recommended)</li>
                    <li>Choose a template with Automatic1111 pre-installed</li>
                    <li>Configure network access and security settings</li>
                    <li>Launch your instance and note the access URL</li>
                  </ol>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">Lambda Labs Setup</h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-400">
                    <li>Sign up for a Lambda Labs account</li>
                    <li>Select a cloud GPU instance</li>
                    <li>Deploy using the Automatic1111 container</li>
                    <li>Configure access credentials</li>
                    <li>Start the instance and save the connection details</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Configuration Section */}
        <section className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
          <div className="flex items-start mb-4">
            <Wrench className="h-6 w-6 text-primary mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-3">Connecting to The Forge</h2>
              <p className="text-gray-400 mb-4">
                Once your Automatic1111 instance is running, follow these steps to connect it with The Forge:
              </p>
              <div className="space-y-3 text-gray-400">
                <p>1. Enable API access in Automatic1111:</p>
                <div className="bg-gray-800/50 rounded p-3 font-mono text-sm">
                  --api --listen --enable-insecure-extension-access
                </div>
                <p>2. Configure CORS settings to allow connections from The Forge</p>
                <p>3. Generate an API key (if using authentication)</p>
                <p>4. Enter your instance URL and API key in The Forge settings</p>
                <p>5. Test the connection using the built-in verification tool</p>
              </div>
            </div>
          </div>
        </section>

        {/* Troubleshooting Section */}
        <section className="bg-gray-900/50 rounded-lg border border-gray-800 p-6">
          <div className="flex items-start mb-4">
            <AlertCircle className="h-6 w-6 text-primary mr-3 mt-1" />
            <div>
              <h2 className="text-xl font-semibold mb-3">Troubleshooting</h2>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">Common Issues</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li><strong>Connection Timeout:</strong> Check if your instance is running and accessible</li>
                    <li><strong>API Errors:</strong> Verify API settings and CORS configuration</li>
                    <li><strong>Model Loading Fails:</strong> Ensure sufficient GPU memory is available</li>
                    <li><strong>Slow Generation:</strong> Consider upgrading to a more powerful GPU instance</li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 rounded p-4">
                  <h3 className="text-lg font-medium mb-2">Getting Help</h3>
                  <p className="text-gray-400">
                    If you encounter any issues, our support team is here to help. Contact us through:
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-400">
                    <li>• Discord Community</li>
                    <li>• Support Ticket System</li>
                    <li>• Documentation Wiki</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="flex justify-center mt-8">
          <Link
            href="/generate"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Start Creating
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
