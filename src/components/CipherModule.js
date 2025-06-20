// src/components/CipherModule.js
import React, { useState } from 'react';

export default function CipherModule() {
  const [activeTab, setActiveTab] = useState('theory');
  const [guitarTab, setGuitarTab] = useState('');

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="border-b border-gray-700 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-purple-400 mb-2">
          🎸 Cipher Tab Analysis Module
        </h1>
        <p className="text-gray-300">
          AI-enhanced guitar theory, scale detection, and fretboard overlays
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('theory')}
          className={`px-4 py-2 rounded ${
            activeTab === 'theory'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🧠 Theory Analysis
        </button>
        <button
          onClick={() => setActiveTab('tabs')}
          className={`px-4 py-2 rounded ${
            activeTab === 'tabs'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🎵 Guitar Tabs
        </button>
        <button
          onClick={() => setActiveTab('fretboard')}
          className={`px-4 py-2 rounded ${
            activeTab === 'fretboard'
              ? 'bg-purple-600 text-white'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          🎛️ Fretboard Overlay
        </button>
      </div>

      {/* Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Panel */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">
            {activeTab === 'theory' && '🧠 Music Theory Engine'}
            {activeTab === 'tabs' && '🎵 Tab Input & Analysis'}
            {activeTab === 'fretboard' && '🎛️ Interactive Fretboard'}
          </h3>

          {activeTab === 'theory' && (
            <div className="space-y-4">
              <div className="bg-gray-700 p-3 rounded">
                <p className="text-green-400 font-mono">Key Detection: C Major</p>
                <p className="text-blue-400 font-mono">Scale: C D E F G A B</p>
                <p className="text-yellow-400 font-mono">Suggested Chords: C, F, G, 
Am</p>
              </div>
            </div>
          )}

          {activeTab === 'tabs' && (
            <div className="space-y-4">
              <textarea
                value={guitarTab}
                onChange={(e) => setGuitarTab(e.target.value)}
                placeholder="Paste guitar tabs here..."
                className="w-full h-32 bg-gray-700 text-white p-3 rounded font-mono 
text-sm resize-none"
              />
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded">
                🔍 Analyze Tab
              </button>
            </div>
          )}

          {activeTab === 'fretboard' && (
            <div className="space-y-4">
              <div className="bg-gray-700 p-3 rounded">
                <p className="text-purple-300 mb-2">Fretboard Visualization</p>
                <div className="grid grid-cols-6 gap-1">
                  {Array.from({ length: 24 }, (_, i) => (
                    <div key={i} className="w-8 h-8 bg-gray-600 rounded border 
border-gray-500 flex items-center justify-center text-xs">
                      {i % 12}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - AI Assistant */}
        <div className="bg-gray-800 rounded-lg p-4">
          <h3 className="text-xl font-semibold text-purple-300 mb-4">
            🤖 Cipher AI Assistant
          </h3>
          <div className="bg-gray-700 p-3 rounded mb-4 h-48 overflow-y-auto">
            <p className="text-green-400 mb-2">[Cipher]: Ready to analyze guitar 
patterns!</p>
            <p className="text-blue-400 mb-2">[System]: Voice commands enabled</p>
            <p className="text-purple-400 mb-2">[Integration]: SimonSnippet.tsx tab 
switching ready</p>
            <p className="text-yellow-400">[Future]: AI-powered input from Cipher and 
Sage</p>
          </div>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Ask Cipher anything..."
              className="flex-1 bg-gray-700 text-white px-3 py-2 rounded"
            />
            <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="mt-6 bg-gray-800 rounded-lg p-3 flex justify-between 
items-center text-sm">
        <div className="flex space-x-4">
          <span className="text-green-400">● Connected</span>
          <span className="text-blue-400">Voice: Ready</span>
          <span className="text-purple-400">Tab Switch: Enabled</span>
        </div>
        <div className="text-gray-400">
          Cipher.ai v1.0 (inspired by Claude 🤖)
        </div>
      </div>
    </div>
  );
}
