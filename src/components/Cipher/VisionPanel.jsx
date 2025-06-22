import React, { useState } from 'react';
import VisualFeedbackPanel from '../VisualFeedbackPanel'; // adjust if path differs
import analyzeImageWithGPT4V from '@/modules/visionAnalyzer';

export default function VisionPanel() {
  const [imageData, setImageData] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Data = reader.result.split(',')[1];
      setImageData(base64Data);
      setLoading(true);
      const result = await analyzeImageWithGPT4V(base64Data);
      setAnalysis(result);
      setLoading(false);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="border p-4 bg-white shadow space-y-4">
      <h2 className="text-xl mb-2 font-bold">Vision Intelligence</h2>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {loading && <p className="text-sm text-gray-500">Analyzing...</p>}
      {analysis && <VisualFeedbackPanel data={analysis} />}
    </div>
  );
}
