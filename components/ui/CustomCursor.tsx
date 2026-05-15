"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mouseX, { damping: 20, stiffness: 150, mass: 0.8 });
  const ringY = useSpring(mouseY, { damping: 20, stiffness: 150, mass: 0.8 });

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    const interactables = document.querySelectorAll(
      "a, button, [data-cursor-hover], input, textarea, select"
    );
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverStart);
      el.addEventListener("mouseleave", handleHoverEnd);
    });

    const observer = new MutationObserver(() => {
      const els = document.querySelectorAll(
        "a, button, [data-cursor-hover], input, textarea, select"
      );
      els.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed z-[99999] pointer-events-none rounded-full"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: isClicking ? 6 : isHovering ? 12 : 8,
          height: isClicking ? 6 : isHovering ? 12 : 8,
          background: isHovering
            ? "rgba(168,85,247,0.9)"
            : "rgba(0,212,255,0.9)",
          boxShadow: isHovering
            ? "0 0 10px rgba(168,85,247,0.8)"
            : "0 0 10px rgba(0,212,255,0.8)",
          transition: "width 0.15s, height 0.15s, background 0.2s",
          mixBlendMode: "screen",
        }}
      />
      {/* Ring */}
      <motion.div
        className="fixed z-[99998] pointer-events-none rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovering ? 56 : isClicking ? 28 : 40,
          height: isHovering ? 56 : isClicking ? 28 : 40,
          border: isHovering
            ? "1.5px solid rgba(168,85,247,0.7)"
            : "1.5px solid rgba(0,212,255,0.5)",
          background: isHovering ? "rgba(168,85,247,0.04)" : "transparent",
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
        }}
      />
    </>
  );
}
