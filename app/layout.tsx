import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Rythamo Studio | Bespoke Design & Engineering",
  description: "We build ultra-premium, high-converting digital products combining Swiss typographic design with flawless engineering. By Rythamo.",
  keywords: ["Rythamo", "Rythamo Studio", "design", "engineering", "digital products", "web development"],
  authors: [{ name: "Rythamo" }],
  creator: "Rythamo",
  metadataBase: new URL("https://rythamo-studio.vercel.app"),
  openGraph: {
    title: "Rythamo Studio | Bespoke Design & Engineering",
    description: "Ultra-premium, high-converting digital products combining Swiss typographic design with flawless engineering.",
    url: "https://rythamo-studio.vercel.app",
    siteName: "Rythamo Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rythamo Studio | Bespoke Design & Engineering",
    description: "Ultra-premium, high-converting digital products combining Swiss typographic design with flawless engineering.",
    creator: "@Rythamo8055",
  },
  icons: {
    icon: "/logo.svg",
  },
  robots: {
    index: true,
    follow: true,
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
      className={cn("h-full", "antialiased", "scroll-smooth", jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

