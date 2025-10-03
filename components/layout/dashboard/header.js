"use client";

import { useEffect, useState } from "react";

export function HeaderView() {
  const [filesAnalyzed, setFilesAnalyzed] = useState(null);

  useEffect(() => {
    async function fetchFilesAnalyzed() {
      try {
        const response = await fetch("/api/total");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setFilesAnalyzed(data.total || 0);
      } catch (error) {
        console.error("Error fetching files analyzed:", error);
        setFilesAnalyzed(0);
      }
    }

    fetchFilesAnalyzed();
  }, []);

  return (
    <header className="firefly-gradient text-white shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🔥</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                AnalyticsFirefly
              </h1>
              <p className="text-blue-100 text-xs sm:text-sm">
                AI-Powered Data Analytics & Reporting Platform
              </p>
            </div>
          </div>

          <div className="flex sm:hidden justify-start">
            <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-lg text-center">
              <div className="text-lg sm:text-2xl font-bold">
                {filesAnalyzed !== null ? filesAnalyzed.toLocaleString() : "…"}
              </div>
              <div className="text-blue-200 text-xs sm:text-sm">
                Files Analyzed
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-8 text-sm">
            <div className="text-center bg-white/20 rounded-lg px-4 py-2 backdrop-blur-lg">
              <div className="text-2xl font-bold">
                {filesAnalyzed !== null ? filesAnalyzed.toLocaleString() : "…"}
              </div>
              <div className="text-blue-200">Files Analyzed</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
