import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Film, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-0 hero-pattern"></div>
      <div className="relative">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/forge.png"
                alt="The Forge Logo"
                width={150}
                height={150}
                className="w-auto h-32"
              />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 gradient-text">
              The Forge
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-200">
              Cinematic AI Action Generator
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Transform your creative vision into stunning action sequences with our
              AI-powered scene generator. Perfect for filmmakers, creators, and
              storytellers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/generate"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Start Creating
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/guide"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800 transition-colors"
              >
                Setup Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Creation</h3>
              <p className="text-gray-400">
                Generate professional-grade action sequences with advanced AI
                technology.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <Film className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Cinematic Excellence
              </h3>
              <p className="text-gray-400">
                Create stunning visual sequences that match your creative vision.
              </p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Community & Sharing
              </h3>
              <p className="text-gray-400">
                Connect with fellow creators and share your generated content.
              </p>
            </div>
          </div>
        </section>

        {/* Updated Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Creator</h3>
              <p className="text-4xl font-bold mb-4">$60<span className="text-lg text-gray-400">/mo</span></p>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li>✓ Unlimited Scene Generation</li>
                <li>✓ SD1.5 Model Access</li>
                <li>✓ Basic Scene Templates</li>
                <li>✓ Community Access</li>
                <li>✓ Standard Support</li>
              </ul>
              <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                Most Popular
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional</h3>
              <p className="text-4xl font-bold mb-4">$75<span className="text-lg text-gray-400">/mo</span></p>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li>✓ Unlimited Scene Generation</li>
                <li>✓ SDXL Model Access</li>
                <li>✓ Advanced Scene Templates</li>
                <li>✓ Priority Rendering</li>
                <li>✓ Priority Support</li>
                <li>✓ Custom Style Presets</li>
              </ul>
              <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold mb-2">Studio</h3>
              <p className="text-4xl font-bold mb-4">$150<span className="text-lg text-gray-400">/mo</span></p>
              <ul className="space-y-2 mb-6 text-gray-400">
                <li>✓ Unlimited Scene Generation</li>
                <li>✓ All Models Access</li>
                <li>✓ Custom Scene Templates</li>
                <li>✓ Dedicated Rendering</li>
                <li>✓ 24/7 Priority Support</li>
                <li>✓ API Access</li>
                <li>✓ Custom Integration</li>
              </ul>
              <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
