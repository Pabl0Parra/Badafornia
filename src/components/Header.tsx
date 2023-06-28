// components/Header/index.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Header.module.css";

export const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const links = ["Home", "Shop", "Contact"];

  return (
    <header className={styles.header}>
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Logo
      </motion.div>

      <nav className={styles.nav}>
        {links.map((link, index) => (
          <motion.a
            key={index}
            onClick={() => setActiveLink(index)}
            className={`${styles.link} ${
              activeLink === index && styles.active
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            {link}
          </motion.a>
        ))}
      </nav>
    </header>
  );
};
