"use client";
import { motion } from "framer-motion";

const internships = [
  {
    title: "Django Training",
    org: "DesynDev",
    desc: "Hands-on Django training — built REST APIs and real-world web features.",
  },
  {
    title: "Junior Software Developer (Intern)",
    org: "Super Sumo",
    desc: "Worked on backend and frontend tasks, API integrations, and project optimizations.",
  },
  
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="experience-title"
      >
        Internship & Training
      </motion.h2>

      <div className="experience-list">
        {internships.map((it, i) => (
          <motion.div
            key={i}
            className="experience-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h3>
              {it.title} <span>• {it.org}</span>
            </h3>
            <p>{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
