"use client";
import { motion } from "framer-motion";

const skills = [
  "Python", "Django", "Django REST Framework", "React", "Next.js",
  "JavaScript", "React Native", "HTML", "CSS", "Tailwind CSS", "Photoshop","Canva"
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="skills-title"
      >
        Skills
      </motion.h3>

      <motion.div
        className="skills-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        {skills.map((s, i) => (
          <motion.span
            key={i}
            className="skill-tag"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {s}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
