import { motion } from "framer-motion";
import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[180px]" />

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
            What We{" "}
            <span className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]">
              Offer
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Everything you need to build a strong digital presence —
            clean, fast, and modern.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="
                  group relative p-6 rounded-2xl
                  bg-white/5 backdrop-blur-xl
                  border border-purple-500/20
                  hover:border-purple-500/40
                  shadow-[0_0_30px_rgba(168,85,247,0.15)]
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]
                  transition
                "
              >
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
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-purple-500/10 opacity-0 group-hover:opacity-100 transition pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
