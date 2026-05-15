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
  ],
  openGraph: {
    title: "Areeba Nadeem — AI Engineer & Creative Technologist",
    description:
      "Designing intelligent digital experiences powered by AI.",
    type: "website",
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
