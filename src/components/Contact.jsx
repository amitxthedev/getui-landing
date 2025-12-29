import { motion } from "framer-motion";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[180px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Get In{" "}
            <span className="text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,0.9)]">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Have an idea or need a portfolio?  
            Let’s connect and make it live within 24 hours.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Instagram */}
          <motion.a
            href="https://instagram.com/getui.in"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              group relative p-8 rounded-2xl text-center
              bg-white/5 backdrop-blur-xl
              border border-purple-500/20
              hover:border-purple-500/40
              shadow-[0_0_30px_rgba(168,85,247,0.15)]
              hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]
              transition
            "
          >
            <Instagram
              size={34}
              className="mx-auto text-purple-400 mb-4"
            />
            <h3 className="text-lg font-semibold text-white mb-2">
              Instagram
            </h3>
            <p className="text-sm text-gray-400">
              DM us directly for quick response
            </p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:getui.in@gmail.com"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="
              group relative p-8 rounded-2xl text-center
              bg-white/5 backdrop-blur-xl
              border border-purple-500/20
              hover:border-purple-500/40
              shadow-[0_0_30px_rgba(168,85,247,0.15)]
              hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]
              transition
            "
          >
            <Mail
              size={34}
              className="mx-auto text-purple-400 mb-4"
            />
            <h3 className="text-lg font-semibold text-white mb-2">
              Email
            </h3>
            <p className="text-sm text-gray-400">
              amitxrajwar@gmail.com
            </p>
          </motion.a>

          {/* Phone / WhatsApp */}
          <motion.a
            href="tel:+919064349923"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="
              group relative p-8 rounded-2xl text-center
              bg-white/5 backdrop-blur-xl
              border border-purple-500/20
              hover:border-purple-500/40
              shadow-[0_0_30px_rgba(168,85,247,0.15)]
              hover:shadow-[0_0_60px_rgba(168,85,247,0.6)]
              transition
            "
          >
            <Phone
              size={34}
              className="mx-auto text-purple-400 mb-4"
            />
            <h3 className="text-lg font-semibold text-white mb-2">
              Call / WhatsApp
            </h3>
            <p className="text-sm text-gray-400">
              Quick support & discussion
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
