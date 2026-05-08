import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SchemaLog — Auto-generate Database Migration Changelogs",
  description:
    "Monitor database schema changes and automatically generate human-readable changelogs with impact analysis for stakeholders."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="77179b1f-d8bf-4239-867e-a0dab1014177"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
