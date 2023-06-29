import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import SplashScreen from "../src/components/SplashScreen";

import Link from "next/link";
import { Header } from "../src/components/Header";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Change this to control how long the splash screen should be displayed

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? <SplashScreen key="splash" /> : <Header key="app" />}
    </AnimatePresence>
  );
};

export default App;
