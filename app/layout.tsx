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
  title: "Rythamo Studio | Bespoke Design & Engineering by Vishnu Vardhan",
  description: "We build ultra-premium, high-converting digital products combining Swiss typographic design with flawless engineering. By Rythamo (Vishnu Vardhan).",
  keywords: ["Rythamo", "Rythamo Studio", "Vishnu Vardhan", "design", "engineering", "digital products", "web development"],
  authors: [{ name: "Vishnu Vardhan", url: "https://vishnuvardhanm.vercel.app" }],
  creator: "Rythamo",
  metadataBase: new URL("https://rythamofreelance.vercel.app"),
  openGraph: {
    title: "Rythamo Studio | Bespoke Design & Engineering by Vishnu Vardhan",
    description: "Ultra-premium, high-converting digital products combining Swiss typographic design with flawless engineering. By Vishnu Vardhan.",
    url: "https://rythamofreelance.vercel.app",
    siteName: "Rythamo Studio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rythamo Studio | Bespoke Design & Engineering by Vishnu Vardhan",
    description: "Ultra-premium, high-converting digital products combining Swiss typographic design with flawless engineering.",
    creator: "@Rythamo8055",
  },
  other: {
    "google-site-verification": "zOOj--hb4C2SawK-7BPeqrCavYMLjEHaIXc7wpvULZ8",
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vishnu Vardhan",
    "alternateName": "Rythamo",
    "url": "https://vishnuvardhanm.vercel.app",
    "sameAs": [
      "https://github.com/Rythamo8055",
      "https://linkedin.com/in/vishnu-vardhan8055"
    ],
    "jobTitle": "AI Engineer & Fullstack Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Rythamo Studio"
    }
  };

  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "scroll-smooth", jetbrainsMono.variable, "font-sans", geist.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

