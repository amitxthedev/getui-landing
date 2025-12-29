import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import LandingPage from "./pages/LandingPage";
import SplashScreen from "./components/SplashScreen";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // lock scroll during splash
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2000); // splash duration

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-black text-white overflow-x-hidden">
        {/* SPLASH SCREEN */}
        <AnimatePresence mode="wait">
          {loading && <SplashScreen key="splash" />}
        </AnimatePresence>

        {/* MAIN SITE */}
        {!loading && <LandingPage />}
      </div>
    </BrowserRouter>
  );
}
