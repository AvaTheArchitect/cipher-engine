// src/components/Cipher/VisionPanel.jsx
import React, { useState } from 'react';

export default function VisionPanel() {
  const [image, setImage] = useState(null);
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result.split(',')[1];
      const response = await fetch('/api/analyze-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageBase64: `data:image/png;base64,${base64}` }),
      });
      const result = await response.json();
      setAnalysis(result.text || 'No output');
      setLoading(false);
    };
    reader.readAsDataURL(file);
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="p-6 bg-gray-100 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Vision Intelligence</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {loading && <p className="mt-4 text-blue-500">Analyzing image with GPT-4V...</p>}
      {image && <img src={image} alt="Uploaded" className="mt-4 max-w-full h-auto" />}
      {analysis && (
        <div className="mt-4 p-4 bg-white border rounded">
          <strong>Result:</strong>
          <pre className="whitespace-pre-wrap">{analysis}</pre>
        </div>
      )}
    </div>
  );
}
