import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/ui/SmoothScroll";

export const metadata: Metadata = {
  title: "Areeba Nadeem — AI Engineer & Creative Technologist",
  description:
    "Designing intelligent digital experiences powered by AI. Portfolio of Areeba Nadeem — AI Engineer, UI/UX Designer, Prompt Engineer, and Software Engineering Student.",
  keywords: [
    "Areeba Nadeem",
    "AI Engineer",
    "UI/UX Designer",
    "Portfolio",
    "Prompt Engineer",
    "Software Engineer",
    "Creative Technologist",
  ],
  authors: [{ name: "Areeba Nadeem" }],
  creator: "Areeba Nadeem",
  publisher: "Areeba Nadeem",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Areeba Nadeem — AI Engineer & Creative Technologist",
    description: "Designing intelligent digital experiences powered by AI.",
    type: "website",
    locale: "en_US",
    siteName: "Areeba Nadeem Portfolio",
    url: "https://areeba-portfolio-eight.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Areeba Nadeem — AI Engineer & Creative Technologist",
    description: "Designing intelligent digital experiences powered by AI.",
    creator: "@areebanadeem",
  },
  // ✅ Google Search Console Verification (Naya code daalo)
  verification: {
    google: "tWV0EOqfPRj-Msaj3vJQsA9CLusQIGADkQB9YKoehnI",  // ← YEH LINE CHANGE KARO
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="noise">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}