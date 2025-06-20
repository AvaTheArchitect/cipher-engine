import { useEffect, useRef } from "react";

export default function CodeMirrorEditor({ value, onChange }) {
  const ref = useRef();
  const cmInstance = useRef();

  useEffect(() => {
    // Only initialize in browser and if we haven't already
    if (typeof window !== 'undefined' && ref.current && !cmInstance.current) {
      // Try to import CodeMirror
      Promise.all([
        import("codemirror"),
        import("codemirror/mode/javascript/javascript"),
        import("codemirror/lib/codemirror.css")
      ]).then(([CodeMirrorModule]) => {
        const CodeMirror = CodeMirrorModule.default || CodeMirrorModule;
        
        const cm = CodeMirror(ref.current, {
          value: value || "// Start coding here...",
          mode: "javascript",
          lineNumbers: true,
          theme: "default",
          lineWrapping: true,
        });

        cm.on("change", () => {
          if (onChange) {
            onChange(cm.getValue());
          }
        });

        cmInstance.current = cm;
      }).catch(error => {
        console.log("CodeMirror failed to load:", error);
        // Fallback to textarea
        const textarea = document.createElement('textarea');
        textarea.value = value || "// CodeMirror fallback mode";
        textarea.className = "w-full h-full p-2 bg-gray-900 text-green-200 font-mono";
        textarea.addEventListener('input', (e) => {
          if (onChange) onChange(e.target.value);
        });
        ref.current.appendChild(textarea);
      });
    }
  }, []);

  // Update value when prop changes
  useEffect(() => {
    if (cmInstance.current && value !== undefined) {
      const currentValue = cmInstance.current.getValue();
      if (currentValue !== value) {
        cmInstance.current.setValue(value);
      }
    }
  }, [value]);

  return (
    <div
      ref={ref}
      className="border border-gray-600 rounded min-h-48 bg-gray-900"
      style={{ minHeight: "200px" }}
    />
  );
}
