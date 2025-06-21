export default function LivePreview({ tab, section, tuning }) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg border border-cyan-500/30">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-cyan-400 font-semibold">🎸 Live Tab Preview</h3>
        <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded">
          {tuning?.toUpperCase() || 'STANDARD'}
        </span>
      </div>
      
      <div className="bg-black p-4 rounded border border-gray-700">
        <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap overflow-x-auto">
          {tab || `// Cipher Guitar Tab Preview
// Drop your tabs here to see them rendered

e|----------------|
B|----------------|
G|----------------|
D|----------------|
A|----------------|
E|----------------|`}
        </pre>
      </div>
      
      <div className="mt-3 flex justify-between items-center text-xs">
        <span className="text-gray-400">Section: <span className="text-yellow-400">{section}</span></span>
        <span className="text-gray-500">👁️ Visual Loop Ready</span>
      </div>
    </div>
  );
}
