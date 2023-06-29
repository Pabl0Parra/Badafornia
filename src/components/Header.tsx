import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../../styles/Header.module.css";

export const Header = () => {
  const [activeLink, setActiveLink] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["Home", "Shop", "Contact"];
  const [isActive, setIsActive] = useState(false);

  const Hamburger = () => {
    return (
      <button
        onClick={() => {
          setMenuOpen(!menuOpen);
          setIsActive(!isActive);
        }}
        className={`${styles.hamburger} ${isActive ? styles.active : ""}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    );
  };

  return (
    <header className={styles.header}>
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Image
          src="./badafornia_logo.png"
          alt="Badafornia Logo"
          width={100}
          height={70}
          unoptimized={true}
        />
      </motion.div>

      <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
        {links.map((link, index) => (
          <Link href={`/${link.toLowerCase()}`} key={index}>
            <motion.div
              onClick={() => {
                setActiveLink(index);
                setMenuOpen(false);
              }}
              className={`${styles.link} ${
                activeLink === index ? styles.active : ""
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {link}
            </motion.div>
          </Link>
        ))}
      </nav>

      <div className={styles.mobileNav}>
        <Hamburger />
      </div>
    </header>
  );
};
