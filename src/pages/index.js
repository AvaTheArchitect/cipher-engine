import AvaConsole from "@/components/AvaConsole";
import AvaAssistant from "@/components/Ava/Assistant";

export default function Home() {
  const handleCommand = (spoken) => {
    console.log("🎙️ Routing command:", spoken);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">🎸 Welcome to 
Maestro.AI</h1>
      
      {/* Ava's full console with CodeMirror */}
      <AvaConsole />
      
      {/* Voice assistant */}
      <AvaAssistant onCommand={handleCommand} />
    </main>
  );
}
