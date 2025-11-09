"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Attendance Register (Django)",
    desc: "Web-based attendance management system with authentication and automated tracking.",
    details: `
    This system helps teachers and admins manage student attendance easily.
    It includes login authentication, role-based dashboards, and automatic
    attendance percentage calculation. Built using Django, SQLite, and Tailwind.
    `,
    
  },
  {
    name: "College Symposium Website (Django)",
    desc: "Dynamic event management site with student registration and participation features.",
    details: `
      Developed a college symposium website allowing students to register and login,
      enroll for various events, workshops, and request accommodation. 
      Built entirely with HTML, CSS, and JavaScript, themed around a Racing concept 
      to create an engaging user interface and interactive experience.
    `,
   
  },
  {
    name: "Agriculture App (Django REST)",
    desc: "RESTful API platform connecting farmers and dealers directly for trading.",
    details: `
      This project acts as a bridge between farmers and dealers, eliminating intermediaries,
      helping reduce product costs and increase farmer profits. Features include
      user login and registration, farmers posting products, dealers buying products,
      direct messaging between users, following other users, and product search functionality.
      Built using Django REST Framework with token-based authentication and API endpoints
      for weather, soil data, crop recommendations, and trading operations.
    `,
    
  },
  {
    name: "Super Gallery (Backend + Multi Frontend)",
    desc: "Users can login and manage images; provides API keys so frontends require no backend knowledge.",
    details: `
    Developed a robust backend using Django REST Framework, providing APIs for multiple
    frontend users in Next.js. Features include user login and
    authentication, image uploads, API key management for frontend access without backend
    knowledge, and integration with Cloudinary for secure media storage and delivery.
    Enables seamless image management and sharing across platforms.
  `,
   
  },
  {
    name: "AI Search & Suggest (PHASH, DINO, CLIP, FAISS)",
    desc: "Image search & suggestion system using multiple models and vector search.",
    details: `
    Combines PHASH, DINO, CLIP embeddings with FAISS for high-speed image similarity search.
    Supports semantic search and recommendations. Used PyTorch, OpenAI CLIP model, and FastAPI.
    `,
    
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="projects-title"
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`project-card ${
              activeIndex === i ? "active-project" : ""
            }`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.8 }}
          >
            <div className="project-header" onClick={() => toggleProject(i)}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>

            <AnimatePresence>
              {activeIndex === i && (
                <motion.div
                  className="project-details"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p>{p.details}</p>
                  
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
