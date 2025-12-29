import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Neon gradient blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[160px]" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-600/20 rounded-full blur-[160px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full
          bg-purple-600/10 border border-purple-500/30
          text-purple-300 text-sm mb-8
          shadow-[0_0_30px_rgba(168,85,247,0.35)]"
        >
          <Sparkles size={16} />
          Modern Portfolio Websites
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
        >
          Build Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]">
            Digital Identity
          </span>
          <br className="hidden md:block" />
          With a Modern Portfolio
        </motion.h1>

        {/* Sub text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 max-w-2xl mx-auto text-gray-400 text-base md:text-lg"
        >
          Clean, high-converting portfolio websites built with  
          <span className="text-purple-400"> React </span> &  
          <span className="text-purple-400"> Tailwind CSS</span>.  
          Low budget. Delivered within 24 hours.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full
            text-white bg-purple-600/30 border border-purple-500/40
            shadow-[0_0_40px_rgba(168,85,247,0.6)]
            hover:bg-purple-600/40 hover:shadow-[0_0_70px_rgba(168,85,247,0.9)]
            transition"
          >
            Get Started
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </a>

          <a
            href="#about"
            className="px-8 py-4 rounded-full text-gray-300
            bg-white/5 border border-white/10
            hover:text-white hover:border-purple-500/40
            transition"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
