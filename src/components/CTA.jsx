import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Glow layers */}
      <div className="absolute inset-0 bg-purple-600/10 blur-[200px]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-fuchsia-600/20 blur-[180px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-3xl p-10 md:p-16 text-center
            bg-white/5 backdrop-blur-2xl
            border border-purple-500/30
            shadow-[0_0_80px_rgba(168,85,247,0.5)]
          "
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to Launch Your{" "}
            <span className="text-purple-400 drop-shadow-[0_0_22px_rgba(168,85,247,0.9)]">
              Portfolio?
            </span>
          </h2>

          {/* Subtext */}
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
            Get a modern, high-converting portfolio website built with
            React & Tailwind CSS. Low budget. Delivered within 24 hours.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <a
              href="#contact"
              className="
                group inline-flex items-center gap-3 px-8 py-4 rounded-full
                text-white bg-purple-600/30 border border-purple-500/40
                shadow-[0_0_50px_rgba(168,85,247,0.7)]
                hover:bg-purple-600/40 hover:shadow-[0_0_80px_rgba(168,85,247,1)]
                transition
              "
            >
              Get Started
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition"
              />
            </a>

            <a
              href="https://instagram.com/getui.in"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-3 px-8 py-4 rounded-full
                text-gray-300 bg-white/5 border border-white/10
                hover:text-white hover:border-purple-500/40
                transition
              "
            >
              <Instagram size={18} />
              DM on Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
