"use client";

import React, { useEffect } from "react";

export function TermsView({ isOpen, onClose, view = "terms" }) {
  const [modalView, setModalView] = React.useState("Terms & Conditions");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    setModalView(view === "privacy" ? "Privacy Policy" : "Terms & Conditions");
  }, [view]);

  if (!isOpen) return null;

  const content = view === "privacy" ? (
    <>
      <p className="text-gray-600 mb-6">
        Last updated: <strong>October 2025</strong>
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        1. Information We Collect
      </h3>
      <p className="text-gray-600 mb-4">
        We process files you upload (.xlsx, .xls) solely to generate analytics
        results. Generated reports are your intellectual property. We do not
        collect personal information unless voluntarily provided.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        2. Data Usage
      </h3>
      <p className="text-gray-600 mb-4">
        Your data is used only for analysis and report generation. We never
        share your data with third parties.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        3. Data Security
      </h3>
      <ul className="text-gray-600 mb-4 space-y-2">
        <li>• All file uploads are encrypted in transit using industry standards.</li>
        <li>• Uploaded files are not stored permanently.</li>
        <li>• We maintain technical safeguards to prevent unauthorized access.</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        4. User Responsibilities
      </h3>
      <p className="text-gray-600 mb-4">
        Do not upload malicious content, personal data of others without consent,
        or copyrighted material without permission.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        5. Contact Information
      </h3>
      <p className="text-gray-600 mb-4">
        Questions about this Privacy Policy can be directed to our GitHub:
        <a
          href="https://github.com/FireFlyDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          github.com/FireFlyDeveloper
        </a>
      </p>
    </>
  ) : (
    <>
      <p className="text-gray-600 mb-6">
        Last updated: <strong>October 2025</strong>
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        1. Acceptance of Terms
      </h3>
      <p className="text-gray-600 mb-4">
        By using AnalyticsFirefly, you agree to abide by these Terms & Conditions.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        2. License to Use
      </h3>
      <p className="text-gray-600 mb-4">
        You may use AnalyticsFirefly for personal or commercial data analysis.
        This license is terminated automatically if you violate these terms.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        3. Service Use
      </h3>
      <p className="text-gray-600 mb-4">
        You may not use the service for unlawful purposes, upload malicious
        content, or infringe intellectual property rights.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        4. File Limits
      </h3>
      <ul className="text-gray-600 mb-4 space-y-2">
        <li>• Max file size: 10MB</li>
        <li>• Supported formats: .xlsx, .xls</li>
        <li>• Processing time may vary depending on file complexity</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        5. Service Availability
      </h3>
      <p className="text-gray-600 mb-4">
        While we strive for uptime, we do not guarantee uninterrupted service. 
        Maintenance or updates may temporarily affect access.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        6. Limitation of Liability
      </h3>
      <p className="text-gray-600 mb-4">
        AnalyticsFirefly is not liable for indirect, incidental, or consequential damages.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        7. Modifications
      </h3>
      <p className="text-gray-600 mb-4">
        We may revise these terms at any time. Continued use constitutes acceptance.
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        8. Contact Information
      </h3>
      <p className="text-gray-600 mb-4">
        Questions about Terms & Conditions can be directed to:
        <a
          href="https://github.com/FireFlyDeveloper"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          github.com/FireFlyDeveloper
        </a>
      </p>
    </>
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{modalView}</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose prose-gray max-w-none">{content}</div>
        </div>
      </div>
    </div>
  );
}
