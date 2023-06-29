import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/SplashScreen.module.css";

const SplashScreen = () => {
  const logoVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
      x: -200,
    },
    visible: {
      scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className={styles.splash}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div variants={logoVariants}>
        <Image src="/badafornia_logo.png" alt="logo" width={400} height={300} />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
