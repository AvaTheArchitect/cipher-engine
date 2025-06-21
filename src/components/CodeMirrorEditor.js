import { useEffect, useRef } from "react";

export default function CodeMirrorEditor({ value, onChange }) {
  const ref = useRef();
  const cmInstance = useRef();
  const onChangeRef = useRef(onChange);

  // Keep onChange ref current
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

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
          value: "// Start coding here...", // Use default, will be set by second useEffect
          mode: "javascript",
          lineNumbers: true,
          theme: "default",
          lineWrapping: true,
        });

        cm.on("change", () => {
          if (onChangeRef.current) {
            onChangeRef.current(cm.getValue());
          }
        });

        cmInstance.current = cm;
      }).catch(error => {
        console.log("CodeMirror failed to load:", error);
        // Fallback to textarea
        const textarea = document.createElement('textarea');
        textarea.value = "// CodeMirror fallback mode"; // Use default, will be set by second useEffect
        textarea.className = "w-full h-full p-2 bg-gray-900 text-green-200 font-mono";
        textarea.addEventListener('input', (e) => {
          if (onChangeRef.current) onChangeRef.current(e.target.value);
        });
        ref.current.appendChild(textarea);
      });
    }
  }, []); // Empty deps - only initialize once

  // Update value when prop changes
  useEffect(() => {
    if (value !== undefined) {
      if (cmInstance.current) {
        // CodeMirror instance
        const currentValue = cmInstance.current.getValue();
        if (currentValue !== value) {
          cmInstance.current.setValue(value);
        }
      } else if (ref.current) {
        // Fallback textarea
        const textarea = ref.current.querySelector('textarea');
        if (textarea && textarea.value !== value) {
          textarea.value = value;
        }
      }
    }
  }, [value]); // Only value needed here

  return (
    <div
      ref={ref}
      className="border border-gray-600 rounded min-h-48 bg-gray-900"
      style={{ minHeight: "200px" }}
    />
  );
}