import { motion } from "framer-motion";
import { processSteps } from "../data/process";

export default function HowItWorks() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            How It{" "}
            <span className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]">
              Works
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A simple and transparent process — from idea to live website.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
                  relative p-6 rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-purple-500/20
                  hover:border-purple-500/40
                  shadow-[0_0_30px_rgba(168,85,247,0.15)]
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.55)]
                  transition
                "
              >
                {/* Step number */}
                <span className="absolute top-4 right-4 text-sm text-purple-400/60">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div
                  className="
                    w-12 h-12 flex items-center justify-center rounded-xl
                    bg-purple-600/20 border border-purple-500/30
                    shadow-[0_0_20px_rgba(168,85,247,0.6)]
                    mb-4
                  "
                >
                  <Icon size={22} className="text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
