import "./globals.css";

export const metadata = {
  title: "AnalyticsFirefly",
  description: "AI-Powered Data Analytics & Reporting Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
