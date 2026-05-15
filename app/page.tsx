"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/ui/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import AILab from "@/components/sections/AILab";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <main className="relative overflow-hidden">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <AILab />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}
