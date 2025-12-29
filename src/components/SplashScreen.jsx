import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-black
        w-screen h-[100dvh]
        overflow-hidden
      "
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black" />

      {/* Glow */}
      <div className="absolute w-[600px] h-[600px] bg-purple-600/30 blur-[200px]" />

      {/* Brand */}
      <div className="relative overflow-hidden">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide">
          get
          <span className="text-purple-400">ui</span>.in
        </h1>

        {/* Light sweep */}
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "120%" }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
          className="
            absolute inset-0
            bg-gradient-to-r from-transparent via-white/40 to-transparent
            skew-x-[-20deg]
          "
        />
      </div>
    </motion.div>
  );
}
