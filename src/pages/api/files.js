import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  try {
    const walk = (dir) => {
      const results = [];
      const list = fs.readdirSync(dir);
      list.forEach((file) => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
          // Skip node_modules, .git, .next directories
          if (!['node_modules', '.git', '.next', 'dist'].includes(file)) {
            results.push(...walk(fullPath));
          }
        } else {
          // Only include certain file types
          if (file.match(/\.(js|jsx|ts|tsx|css|json|md)$/)) {
            results.push({ path: fullPath.replace(process.cwd() + "/", "") 
});
          }
        }
      });
      return results;
    };

    const files = walk("src");
    res.status(200).json({ files });
  } catch (error) {
    console.error("Error reading files:", error);
    res.status(500).json({ 
      files: [
        { path: "src/pages/index.js" },
        { path: "src/components/AvaConsole.js" },
        { path: "src/components/CodeEditor.jsx" },
        { path: "src/components/FileExplorer.js" }
      ],
      error: "Could not read file system, using fallback data"
    });
  }
}
