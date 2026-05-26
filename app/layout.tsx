import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FlowBot – Build Browser Automation Without Coding",
  description: "Visual workflow builder for browser automation. Connect action blocks to automate form filling, data extraction, and testing flows — no code required."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ab1b3ee9-dc0f-48ec-a140-a65df7811433"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
