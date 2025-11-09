"use client";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="contact-title"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="contact-intro"
      >
        Let’s connect and collaborate on exciting projects!
      </motion.p>

      <motion.div
        className="contact-icons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <a href="tel:+916379721151" className="icon-btn" title="Call Me">
          <Phone size={28} />
        </a>

        <a href="mailto:santhoshbabu0309sb@gmail.com" className="icon-btn" title="Send Email">
          <Mail size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/santhoshbabu-selvaraj"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-btn"
          title="LinkedIn Profile"
        >
          <Linkedin size={28} />
        </a>
      </motion.div>
    </section>
  );
}
