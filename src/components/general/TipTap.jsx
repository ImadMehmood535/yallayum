'use client'

import "./tiptap.css";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import Link from "@tiptap/extension-link";

// define your extension array
const extensions = [
  StarterKit,
  Image,
  BulletList,
  ListItem,
  Link.configure({
    openOnClick: false,
    autolink: true,
    defaultProtocol: "https",
  }),
];

const Tiptap = ({ content }) => {

   return (
    <EditorProvider
      editable={false}
      extensions={extensions}
      content={content}
    ></EditorProvider>
  );
};

export default Tiptap;
