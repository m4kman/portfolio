"use client";
import { useState } from "react";

function useCopyToClipboard() {
  const [clipboardText, setClipboardText] = useState("Click to Copy");

  function handleClipboardCopy(text: string) {
    navigator.clipboard.writeText(text);
    setClipboardText("Copied!");
  }

  return { clipboardText, setClipboardText, handleClipboardCopy };
}

export default useCopyToClipboard;
