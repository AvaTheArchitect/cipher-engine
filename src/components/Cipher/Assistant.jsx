export default function AvaAssistant({ onCommand }) {
  const handleVoiceCommand = () => {
    if (onCommand) {
      onCommand("Hello from Ava! 🎙️");
    }
  };

  return (
    <div className="bg-gray-700 rounded-lg p-4 text-white">
      <h3 className="text-lg font-bold mb-2">🎙️ Ava Assistant</h3>
      <button 
        onClick={handleVoiceCommand}
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
      >
        Test Voice Command
      </button>
      <p className="text-sm text-gray-300 mt-2">
        Voice assistant ready for commands
      </p>
    </div>
  );
}
