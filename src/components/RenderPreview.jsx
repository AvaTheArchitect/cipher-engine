export default function RenderPreview({ html }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg border border-purple-500/30">
      <div className="flex justify-between items-center mb-3">
        <h4 className="text-purple-400 font-semibold">👁️ Cipher Visual Loop</h4>
        <span className="text-xs text-gray-400">GPT-4V Ready</span>
      </div>
      
      <iframe 
        srcDoc={html || `
          <div style="padding: 20px; font-family: Arial; background: #1a1a1a; color: #00ff88;">
            <h3>🎸 Cipher Render Preview</h3>
            <p>Visual Loop Engine Initialized</p>
            <p>Ready for GPT-4V analysis...</p>
          </div>
        `} 
        className="w-full h-64 border border-gray-600 rounded bg-gray-900"
        title="Cipher Visual Preview"
      />
      
      <div className="mt-2 text-xs text-gray-500">
        📷 Screenshot analysis ready | 🔄 Auto-correction enabled
      </div>
    </div>
  );
}
