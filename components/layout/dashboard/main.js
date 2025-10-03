"use client";
import { useMemo, useEffect, useRef, useState } from "react";
import { useFileUploader } from "../../../hooks/useFileUploader";
import markdownit from "markdown-it";

const md = markdownit({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
});

const STAGES = [
  "Uploading",
  "Extracting",
  "Summarizing",
  "Thinking",
  "AI",
  "Deleting",
];

export function MainView() {
  const { logs, uploading, status, uploadFile } = useFileUploader();
  const fileInputRef = useRef(null);
  const bottomRef = useRef(null);

  const [progress, setProgress] = useState(0);

  const renderedLogs = useMemo(() => {
    return md.render(logs.join(""));
  }, [logs]);

  useEffect(() => {
    if (!status) {
      setProgress(0);
      return;
    }
    const idx = STAGES.indexOf(status);
    if (idx >= 0) {
      const percentage = Math.round(((idx + 1) / STAGES.length) * 100);
      setProgress(percentage);
    }
  }, [status]);

  useEffect(() => {
    if (uploading && logs.length > 0 && bottomRef.current) {
      const resultsSection = document.getElementById("resultsSection");
      resultsSection.classList.remove("hidden");

      const el = bottomRef.current;
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (!isVisible) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [logs, uploading]);

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-blue-500 rounded-full"></div>
            <div className="absolute top-8 sm:top-12 right-4 sm:right-8 w-10 sm:w-14 md:w-16 h-10 sm:h-14 md:h-16 bg-purple-500 rounded-full"></div>
            <div className="absolute bottom-4 sm:bottom-8 left-6 sm:left-12 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-indigo-500 rounded-full"></div>
            <div className="absolute bottom-2 sm:bottom-4 right-10 sm:right-16 w-6 sm:w-8 h-6 sm:h-8 bg-pink-500 rounded-full"></div>
          </div>
          <div className="text-center relative z-10">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl md:rounded-2xl mb-4 sm:mb-6 shadow-lg">
              <span className="text-xl sm:text-2xl">🚀</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800/0 mb-3 sm:mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Transform Your Data Into Insights
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
              Upload your Excel files and let our advanced AI analyze your data
              to generate comprehensive reports with actionable insights and
              beautiful visualizations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Secure Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>AI-Powered Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <span>Instant Reports</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-8 sm:-translate-y-12 md:-translate-y-16 translate-x-8 sm:translate-x-12 md:translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-full translate-y-6 sm:translate-y-8 md:translate-y-12 -translate-x-6 sm:-translate-x-8 md:-translate-x-12 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                    <span className="text-white text-base">📊</span>
                  </div>
                  Upload Your Data
                </h3>

                <div className="flex items-center space-x-2 text-xs bg-gray-50 px-3 py-1 rounded-full">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      status ? "bg-yellow-500" : "bg-green-500"
                    }`}
                  ></div>
                  <span>{status || "Ready to analyze"}</span>
                </div>
              </div>

              <div
                className={`upload-area rounded-xl p-6 md:p-10 text-center relative overflow-hidden glass-effect ${
                  status ? "cursor-not-allowed opacity-70" : "cursor-pointer"
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".xlsx,.xls"
                  className="hidden"
                  disabled={!!status} // disable file input when processing
                  onChange={(e) => uploadFile(e.target.files?.[0] || null)}
                />

                {!status ? (
                  <div className="relative z-10 fade-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-6 shadow-inner">
                      <span className="text-4xl">📈</span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">
                      Drop your Excel files here
                    </h4>
                    <p className="text-gray-500 mb-6 max-w-md mx-auto text-sm sm:text-base">
                      Drag & drop your Excel files or click to browse. Our AI
                      will analyze your data and generate insights.
                    </p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      disabled={!!status}
                      className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 transform shadow-lg ${
                        status
                          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                          : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white hover:scale-105 hover:shadow-xl"
                      }`}
                    >
                      📁 Choose Excel Files
                    </button>
                  </div>
                ) : (
                  <div className="relative z-10 fade-in">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl mb-6 shadow-inner bounce-in">
                      <span className="text-4xl animate-bounce">
                        {status === "Uploading" && "📤"}
                        {status === "Extracting" && "🔍"}
                        {status === "Summarizing" && "✍️"}
                        {status === "Thinking" && "🤔"}
                        {status === "AI" && "🤖"}
                        {status === "Deleting" && "❌"}
                        {!status && "⚡"}
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
                      {status === "AI"
                        ? "Finalizing AI Report..."
                        : status
                          ? `${status}...`
                          : "Analyzing your data with AI..."}
                    </h4>

                    <div className="max-w-md mx-auto">
                      <div className="w-full bg-gray-200 rounded-full h-4 mb-4 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full shadow-inner transition-all duration-700 ease-out"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                        <span>{status || "Processing..."}</span>
                        <span>{progress}%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 card-shadow relative overflow-hidden"
            id="features"
          >
            <div className="absolute top-0 right-0 w-12 sm:w-16 md:w-20 h-12 sm:h-16 md:h-20 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full -translate-y-6 sm:-translate-y-8 md:-translate-y-10 translate-x-6 sm:translate-x-8 md:translate-x-10 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-md sm:rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-lg">
                  <span className="text-white text-xs sm:text-sm">✨</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  AI Features
                </h4>
              </div>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-600">
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 text-xs sm:text-sm">
                      Automated Analysis
                    </div>
                    <div className="text-gray-500 text-xs">
                      Smart data processing
                    </div>
                  </div>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 text-xs sm:text-sm">
                      Pattern Recognition
                    </div>
                    <div className="text-gray-500 text-xs">
                      Identify hidden trends
                    </div>
                  </div>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 text-xs sm:text-sm">
                      Trend Analysis
                    </div>
                    <div className="text-gray-500 text-xs">
                      Forecast future patterns
                    </div>
                  </div>
                </li>
                <li className="flex items-start space-x-2 sm:space-x-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <span className="text-green-600 text-xs">✓</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-700 text-xs sm:text-sm">
                      Professional Reports
                    </div>
                    <div className="text-gray-500 text-xs">
                      Export-ready documents
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 card-shadow relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-gradient-to-tr from-blue-100 to-indigo-100 rounded-full translate-y-4 sm:translate-y-6 md:translate-y-8 -translate-x-4 sm:-translate-x-6 md:-translate-x-8 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md sm:rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-lg">
                  <span className="text-white text-xs sm:text-sm">📋</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Supported Formats
                </h4>
              </div>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-base sm:text-lg">📊</span>
                    <span className="text-gray-700 font-medium">
                      Excel 2007+
                    </span>
                  </div>
                  <span className="text-blue-600 font-semibold bg-blue-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                    .xlsx
                  </span>
                </div>
                <div className="flex items-center justify-between p-2 sm:p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-base sm:text-lg">📋</span>
                    <span className="text-gray-700 font-medium">
                      Excel Legacy
                    </span>
                  </div>
                  <span className="text-purple-600 font-semibold bg-purple-100 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-xs">
                    .xls
                  </span>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Maximum file size</span>
                  <span className="font-semibold text-gray-700">10 MB</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 card-shadow border border-indigo-100"
            id="how-it-works"
          >
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md sm:rounded-lg flex items-center justify-center mr-2 sm:mr-3 shadow-lg">
                <span className="text-white text-xs sm:text-sm">🔄</span>
              </div>
              <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                How It Works
              </h4>
            </div>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-indigo-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <span className="text-gray-600">Upload your Excel file</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <span className="text-gray-600">AI analyzes your data</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <span className="text-gray-600">Get instant insights</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="resultsSection" className="hidden">
        <div className="slide-up">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center bounce-in">
              <span className="mr-2 sm:mr-3 text-2xl sm:text-3xl">📊</span>
              Analysis Results
            </h3>
            <button
              id="downloadBtn"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 pulse-glow w-full sm:w-auto"
            >
              <span>🖨️</span>
              <span>Print Report</span>
            </button>
          </div>

          <div className="document-container">
            <div className="document-content page-lines">
              <div
                id="reportContent"
                dangerouslySetInnerHTML={{ __html: renderedLogs }}
                className="lg:p-15 md:p-10 sm:p-0"
              />
              <div ref={bottomRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
