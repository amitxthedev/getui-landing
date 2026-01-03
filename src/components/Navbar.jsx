import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // 🔥 AUTO ACTIVE SECTION (SCROLL SPY)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-80px 0px -50% 0px", // navbar height offset
        threshold: 0.4,
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (!section) return;

    section.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-2xl border-b border-purple-500/20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* LOGO */}
          <button
            onClick={() => scrollTo("home")}
            className="text-xl font-semibold text-white"
          >
            get
            <span className="text-purple-400 drop-shadow-[0_0_14px_rgba(168,85,247,0.9)]">
              ui
            </span>
            .in
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`
                    px-4 py-2 rounded-full text-sm transition-all
                    ${
                      isActive
                        ? "text-purple-400 bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.9)]"
                        : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)]"
                    }
                  `}
                >
                  {item.name}
                </button>
              );
            })}

            {/* CTA */}
            <button
              onClick={() => scrollTo("contact")}
              className="
                ml-3 px-6 py-2 rounded-full text-sm text-white
                bg-purple-600/30 border border-purple-500/40
                shadow-[0_0_40px_rgba(168,85,247,0.9)]
                hover:bg-purple-600/40 hover:shadow-[0_0_70px_rgba(168,85,247,1)]
                transition
              "
            >
              Hire Me
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-purple-400"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 w-full z-40 bg-black/80 backdrop-blur-2xl border-t border-purple-500/20"
          >
            <div className="flex flex-col gap-3 px-6 py-6">
              {navItems.map((item) => {
                const isActive = active === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`
                      text-left text-lg px-4 py-3 rounded-lg transition
                      ${
                        isActive
                          ? "text-purple-400 bg-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.8)]"
                          : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/10"
                      }
                    `}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
