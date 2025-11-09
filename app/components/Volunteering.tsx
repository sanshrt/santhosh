"use client";
import { motion } from "framer-motion";

const roles = [
  "Assistant Treasurer – SAHA",
  "Student Coordinator – Freshers' Association of ACGCET",
  "Student Coordinator – Mechanical Association",
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="volunteering-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="volunteering-title"
      >
        Volunteering & Positions
      </motion.h2>

      <motion.ul
        className="volunteering-list"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {roles.map((role, i) => (
          <motion.li
            key={i}
            className="volunteering-item"
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            {role}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
