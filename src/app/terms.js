'use client';

import React, { useEffect } from "react";

export function TermsView({ isOpen, onClose }) {
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

  if (!isOpen) return null;

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
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Terms & Conditions</h2>
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
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-6">
              Last updated: <strong>September 2025</strong>
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              1. Acceptance of Terms
            </h3>
            <p className="text-gray-600 mb-4">
              By accessing and using AnalyticsFirefly, you accept and agree to
              be bound by the terms and provision of this agreement.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              2. Use License
            </h3>
            <p className="text-gray-600 mb-4">
              Permission is granted to temporarily use AnalyticsFirefly for
              personal and commercial data analysis purposes. This license shall
              automatically terminate if you violate any of these restrictions.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              3. Data Privacy & Security
            </h3>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Your uploaded files are processed securely and are not stored permanently</li>
              <li>• We do not share your data with third parties</li>
              <li>• All data transmission is encrypted using industry-standard protocols</li>
              <li>• Generated reports are your intellectual property</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              4. Acceptable Use
            </h3>
            <p className="text-gray-600 mb-4">
              You agree not to use the service for any unlawful purpose or to
              upload files containing malicious content, personal information of
              others without consent, or copyrighted material without
              permission.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              5. Service Availability
            </h3>
            <p className="text-gray-600 mb-4">
              While we strive for 99.9% uptime, we do not guarantee
              uninterrupted service. Maintenance windows and updates may
              temporarily affect availability.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              6. Limitation of Liability
            </h3>
            <p className="text-gray-600 mb-4">
              AnalyticsFirefly shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of the service.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              7. File Size & Format Limitations
            </h3>
            <ul className="text-gray-600 mb-4 space-y-2">
              <li>• Maximum file size: 10MB</li>
              <li>• Supported formats: .xlsx, .xls</li>
              <li>• Processing time may vary based on file complexity</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              8. Modifications
            </h3>
            <p className="text-gray-600 mb-4">
              We reserve the right to revise these terms at any time without
              notice. By using this service, you agree to be bound by the
              current version of these terms.
            </p>

            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              9. Contact Information
            </h3>
            <p className="text-gray-600 mb-4">
              For questions about these Terms & Conditions, please visit our
              GitHub repository:{" "}
              <a
                href="https://github.com/FireFlyDeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                github.com/FireFlyDeveloper
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}