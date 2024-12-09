"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = ({ content }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: content,
    editable: false, // Use editable: false to make the editor read-only
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
