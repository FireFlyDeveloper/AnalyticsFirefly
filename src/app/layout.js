import "./globals.css";

export const metadata = {
  title: "AnalyticsFirefly",
  description: "AI-Powered Data Analytics & Reporting Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">{children}</body>
    </html>
  );
}
