"use client";
import { useState } from "react";

export function useFileUploader() {
  const [logs, setLogs] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState(null);

  async function uploadFile(file) {
    if (!file) return;

    const MAX_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_SIZE) {
      setStatus("File too large (max 10MB)");
      return;
    }

    setLogs([]);
    setUploading(true);
    setStatus("Uploading");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.body) {
      setUploading(false);
      setStatus(null);
      return;
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";

      for (const line of lines) {
        if (!line.trim()) continue;

        try {
          const parsed = JSON.parse(line);

          if (parsed.node) {
            setStatus(parsed.node);
          }

          if (parsed.node === "AI" && parsed.content) {
            setLogs((prev) => [...prev, parsed.content]);
          }
        } catch {
          if (
            line.includes("Extracting") ||
            line.includes("Summarizing") ||
            line.includes("Thinking") ||
            line.includes("Deleting")
          ) {
            setStatus(line.trim());
          }
        }
      }
    }

    setUploading(false);
    setStatus(null);
  }

  return { logs, uploading, status, uploadFile };
}
