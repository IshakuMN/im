import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ishaku March — Software Engineer",
  description: "Portfolio of Ishaku March, a full-stack software engineer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
