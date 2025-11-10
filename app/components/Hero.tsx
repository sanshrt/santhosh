"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-text"
      >
        <h1 className="hero-title">Hi, I'm Santhosh Babu </h1>
        <p className="hero-subtitle">
          A passionate <strong>Full Stack Developer</strong> crafting seamless, modern, and engaging web experiences.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero-image-container"
      >
        <div className="hero-image-frame">
          <Image
            src="/img.jpeg"
            alt="Santhosh Babu"
            width={260}
            height={260}
            className="hero-image"
          />
        </div>
      </motion.div>
    </section>
  );
}
