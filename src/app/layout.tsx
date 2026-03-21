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
  title: "HopePhoenix — AI-Powered Healthcare & Industrial Automation",
  description:
    "HopePhoenix is the parent body of DrM Hope Softwares and Bettroi FZE, delivering cutting-edge AI solutions for healthcare, industrial automation, and enterprise transformation across India and UAE.",
  keywords: [
    "HopePhoenix",
    "AI Healthcare",
    "Industrial Automation",
    "DrM Hope",
    "Bettroi",
    "SCADA",
    "PLC",
    "Hospital Management",
    "EHR",
    "IoT",
  ],
  openGraph: {
    title: "HopePhoenix — AI-Powered Healthcare & Industrial Automation",
    description:
      "Delivering cutting-edge AI solutions for healthcare, industrial automation, and enterprise transformation.",
    url: "https://hopephoenix.in",
    siteName: "HopePhoenix",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
