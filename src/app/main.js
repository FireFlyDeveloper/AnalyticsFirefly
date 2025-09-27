export function MainView() {
  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
      {/* Hero Section */}
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
        {/* Upload Section */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 card-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-8 sm:-translate-y-12 md:-translate-y-16 translate-x-8 sm:translate-x-12 md:translate-x-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-tr from-indigo-100 to-pink-100 rounded-full translate-y-6 sm:translate-y-8 md:translate-y-12 -translate-x-6 sm:-translate-x-8 md:-translate-x-12 opacity-50"></div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center mr-2 sm:mr-3 shadow-lg">
                    <span className="text-white text-sm sm:text-base">📊</span>
                  </div>
                  Upload Your Data
                </h3>
                <div className="flex items-center space-x-2 text-xs bg-gray-50 px-3 py-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Ready to analyze</span>
                </div>
              </div>

              <div
                id="uploadArea"
                className="upload-area rounded-lg sm:rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 text-center cursor-pointer relative overflow-hidden"
              >
                <input
                  type="file"
                  id="fileInput"
                  accept=".xlsx,.xls"
                  className="hidden"
                />

                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 w-6 sm:w-8 h-6 sm:h-8 border-2 border-blue-400 rounded rotate-45"></div>
                  <div className="absolute top-4 sm:top-8 right-4 sm:right-8 w-4 sm:w-6 h-4 sm:h-6 border-2 border-purple-400 rounded-full"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 w-3 sm:w-4 h-3 sm:h-4 bg-indigo-400 rounded"></div>
                  <div className="absolute bottom-2 sm:bottom-4 right-8 sm:right-12 w-2 sm:w-3 h-2 sm:h-3 bg-pink-400 rounded-full"></div>
                </div>

                <div id="uploadContent" className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-inner">
                    <span className="text-2xl sm:text-3xl md:text-4xl">📈</span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 sm:mb-3">
                    Drop your Excel files here
                  </h4>
                  <p className="text-gray-500 mb-4 sm:mb-6 max-w-md mx-auto text-sm sm:text-base">
                    Drag and drop your Excel files or click to browse. Our AI
                    will analyze your data and generate comprehensive insights.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <span>📊</span>
                      <span>.xlsx</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
                    <div className="flex items-center space-x-1">
                      <span>📋</span>
                      <span>.xls</span>
                    </div>
                    <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
                    <div className="flex items-center space-x-1">
                      <span>⚡</span>
                      <span>Up to 10MB</span>
                    </div>
                  </div>

                  <button
                    id="browseBtn"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg w-full sm:w-auto"
                  >
                    <span className="flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 text-sm sm:text-base">
                      <span className="text-base sm:text-lg">📁</span>
                      <span>Choose Excel Files</span>
                      <span className="text-xs sm:text-sm opacity-75 hidden sm:block">
                        or drag & drop
                      </span>
                    </span>
                  </button>
                </div>

                <div id="uploadProgress" className="hidden relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 shadow-inner">
                    <span className="text-2xl sm:text-3xl md:text-4xl animate-bounce">
                      ⚡
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">
                    Analyzing your data with AI...
                  </h4>
                  <div className="max-w-md mx-auto">
                    <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4 mb-3 sm:mb-4 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full rounded-full animate-pulse shadow-inner w-70"></div>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm text-gray-500">
                      <span>Processing data...</span>
                      <span>70%</span>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 mt-3 sm:mt-4">
                    Our AI is extracting insights from your data. This may take
                    a few moments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Sections */}
        <div className="space-y-4 sm:space-y-6">
          {/* AI Features */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 card-shadow relative overflow-hidden">
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

          {/* Supported Formats */}
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

          {/* How It Works */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 card-shadow border border-indigo-100">
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

      {/* Results Section */}
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
                className="prose prose-sm sm:prose-lg max-w-none text-gray-800 leading-relaxed"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
