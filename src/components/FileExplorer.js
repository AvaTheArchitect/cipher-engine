import { useEffect, useState } from "react";

export default function FileExplorer({ onSelect }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/files")
      .then((res) => res.json())
      .then((data) => {
        setFiles(data.files);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load files:", err);
        // Fallback data
        setFiles([
          { path: "src/pages/index.js" },
          { path: "src/components/AvaConsole.js" },
          { path: "src/components/CodeEditor.jsx" },
          { path: "src/components/Ava/Assistant.jsx" },
        ]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="bg-gray-800 text-white p-3 h-full overflow-auto w-64 
border-r border-gray-700">
      <h2 className="text-lg font-bold mb-3 text-orange-400">📁 Files</h2>
      
      {loading ? (
        <div className="text-gray-400 text-sm">🔄 Loading files...</div>
      ) : (
        <ul className="space-y-1">
          {files.map((file, index) => (
            <li key={index}>
              <button
                onClick={() => onSelect && onSelect(file.path)}
                className="text-left hover:bg-gray-700 
hover:text-green-300 text-sm p-2 rounded w-full transition-colors"
              >
                📄 {file.path}
              </button>
            </li>
          ))}
        </ul>
      )}
      
      <div className="mt-4 text-xs text-gray-500 border-t border-gray-600 
pt-2">
        💡 Click a file to open it
      </div>
    </div>
  );
}
