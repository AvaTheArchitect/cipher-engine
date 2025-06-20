import React, { useEffect, useRef } from "react";
import { EditorState }            from "@codemirror/state";
import { EditorView, basicSetup } from "@codemirror/basic-setup";
import { javascript }            from "@codemirror/lang-javascript";

export default function CodeEditor({ value = "", onChange }) {
  const editorRef = useRef(null);
  const viewRef   = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Initialise once
    if (!viewRef.current) {
      viewRef.current = new EditorView({
        state: EditorState.create({
          doc: value,
          extensions: [
            basicSetup,
            javascript(),
            EditorView.updateListener.of((v) => {
              if (v.docChanged && onChange) {
                onChange(v.state.doc.toString());
              }
            }),
          ],
        }),
        parent: editorRef.current,
      });
    }

    // Cleanup on unmount
    return () => viewRef.current?.destroy();
  }, []);

  return <div ref={editorRef} className="h-full rounded-md 
overflow-hidden" />;
}
