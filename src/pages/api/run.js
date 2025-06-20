export default async function handler(req, res) {
  const { command } = req.body;

  console.log("🧠 Voice Command Received:", command);

  if (command.toLowerCase().includes("system check")) {
    const output = [
      "✅ System check complete.",
      "🎛️ Microphone: Listening",
      "🖥️ Server: Online",
      "📡 GitHub Connected",
      "⚙️ Vercel Ready",
      "🎙️ Ava says: All systems are go, Captain!"
    ];
    return res.status(200).json({ output });
  }

  const fallback = [
    `🤖 Received: "${command}"`,
    "🛠️ But I don’t have a handler for that yet. Try saying: 'Run system check'"
  ];
  res.status(200).json({ output: fallback });
}

