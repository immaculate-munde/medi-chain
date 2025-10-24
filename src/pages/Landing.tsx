import React from 'react';
import { ShieldCheckIcon, BrainIcon, HeartPulseIcon, ActivityIcon } from 'lucide-react';
interface LandingProps {
  onLogin: () => void;
}
export function Landing({
  onLogin
}: LandingProps) {
  return <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="w-full bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <HeartPulseIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">MediChain</span>
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full ml-2">
              Hedera
            </span>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              Sign Up
            </button>
            <button onClick={onLogin} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Login
            </button>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Decentralized Healthcare
            <span className="block text-blue-600">Powered by Hedera</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Secure, transparent, and accessible healthcare records on the
            blockchain
          </p>
        </div>
        {/* AI Health Assistant Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            AI Health Assistant
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* First Aid */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <ShieldCheckIcon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                First Aid
              </h3>
              <p className="text-gray-600 mb-4">
                Get instant guidance for emergency situations and first aid
                procedures
              </p>
              <button className="w-full py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium">
                Get Help Now
              </button>
            </div>
            {/* Symptom Checker */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <ActivityIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Symptom Checker
              </h3>
              <p className="text-gray-600 mb-4">
                AI-powered symptom analysis to help understand your health
                concerns
              </p>
              <button className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium">
                Check Symptoms
              </button>
            </div>
            {/* Mental Health Support */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <BrainIcon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mental Health
              </h3>
              <p className="text-gray-600 mb-4">
                24/7 support for mental wellness and emotional health guidance
              </p>
              <button className="w-full py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors font-medium">
                Talk to AI
              </button>
            </div>
          </div>
        </div>
        {/* Hedera Features */}
        <div className="bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
              <ShieldCheckIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Built on Hedera Hashgraph
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your medical records are secured with enterprise-grade blockchain
            technology, ensuring privacy, transparency, and complete control
            over your health data.
          </p>
        </div>
      </main>
    </div>;
}