import { Instagram, Github, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-purple-500/20">
      {/* Glow */}
      <div className="absolute inset-0 bg-purple-600/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white">
              get
              <span className="text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]">
                ui
              </span>
              .in
            </h3>
            <p className="mt-2 text-sm text-gray-400 max-w-xs">
              Modern portfolio websites for students, freelancers & startups.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-gray-400">
            <a
              href="#about"
              className="hover:text-purple-400 transition"
            >
              About
            </a>
            <a
              href="#services"
              className="hover:text-purple-400 transition"
            >
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">
            <a
              href="https://instagram.com/getui.in"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Instagram size={20} />
            </a>

            <a
              href="https://github.com/amitxthedev"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://getui.in"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <Globe size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} getui.in — Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
