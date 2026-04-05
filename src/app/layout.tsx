import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graphclaw — Graph-Native Multi-Agent AI Platform",
  description:
    "Multi-agent AI platform where memory lives in a property graph, agents are graph walkers, and skills install from the internet at runtime — all in Jac.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Graphclaw — Graph-Native Multi-Agent AI Platform",
    description:
      "Multi-agent AI where memory is a graph, agents walk it, skills install at runtime. Built in Jac.",
    url: "https://graphclaw.dev",
    siteName: "Graphclaw",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphclaw — Graph-Native Multi-Agent AI Platform",
    description:
      "Multi-agent AI where memory is a graph, agents walk it, skills install at runtime.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
