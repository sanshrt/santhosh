"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, User, FolderGit2, Mail } from "lucide-react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const links = [
    { name: "Home", href: "#hero", icon: <Home size={20} /> },
    { name: "About", href: "#about", icon: <User size={20} /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 size={20} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="navbar"
        >
          <div className="nav-container">
            <h1 className="nav-logo">Santhosh Babu</h1>
            <ul className="nav-links">
              {links.map((link, i) => (
                <motion.li
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={link.href}>{link.name}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}

      {/* Mobile Bottom Navbar */}
      {isMobile && (
        <motion.nav
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bottom-navbar"
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.href}
              whileTap={{ scale: 0.9 }}
              className="bottom-nav-item"
            >
              {link.icon}
              <span>{link.name}</span>
            </motion.a>
          ))}
        </motion.nav>
      )}
    </>
  );
}
