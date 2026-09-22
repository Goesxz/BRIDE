import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { couple } from "../data/couple";
import { useHideOnScroll } from "../hooks/useHideOnScroll";
import { useScrollSpy } from "../hooks/useScrollSpy";

const LINKS = [
  { href: "#historia", id: "historia", label: "Nossa história" },
  { href: "#galeria", id: "galeria", label: "Galeria" },
  { href: "#pedido", id: "pedido", label: "O pedido" },
];

const SPY_IDS = ["hero", "historia", "galeria", "pedido"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const hidden = useHideOnScroll(80);
  const active = useScrollSpy(SPY_IDS);

  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Linha fina de progresso da leitura, sempre no topo absoluto */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-black z-50 origin-left"
        style={{ scaleX: progressScale }}
      />

      <motion.header
        animate={{ y: hidden && !open ? "-100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-40 transition-colors duration-500 ${
          scrolled ? "bg-white/90 backdrop-blur-sm border-b border-neutral-200" : "bg-transparent"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
      >
        <nav className="flex items-center justify-between px-6 md:px-10 h-16">
          <span
            className={`font-display text-lg tracking-[0.15em] transition-colors duration-500 ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            {couple.him.charAt(0)} &amp; {couple.her.charAt(0)}
          </span>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              
               <a key={l.href}
                href={l.href}
                className={`relative text-[11px] tracking-[0.2em] uppercase font-sans pb-1 transition-colors duration-500 ${
                  scrolled
                    ? active === l.id
                      ? "text-black"
                      : "text-neutral-700 hover:text-black"
                    : active === l.id
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                <span
                  className={`absolute left-0 bottom-0 h-px transition-all duration-500 ${
                    scrolled ? "bg-black" : "bg-white"
                  } ${active === l.id ? "w-full" : "w-0"}`}
                />
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden relative w-6 h-5 -mr-2"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            <span
              className={`absolute left-0 w-6 h-px transition-all duration-300 ${
                open ? "top-1/2 rotate-45 bg-black" : `top-0 ${scrolled ? "bg-black" : "bg-white"}`
              }`}
            />
            <span
              className={`absolute left-0 w-6 h-px transition-all duration-300 ${
                open
                  ? "top-1/2 -rotate-45 bg-black"
                  : `top-[9px] ${scrolled ? "bg-black" : "bg-white"}`
              }`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center"
            role="dialog"
            aria-modal="true"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-3"
              aria-label="Fechar menu"
              style={{ top: "max(1.5rem, env(safe-area-inset-top))" }}
            >
              <span className="block w-6 h-px bg-black rotate-45 translate-y-px" />
              <span className="block w-6 h-px bg-black -rotate-45 -translate-y-px" />
            </button>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.35 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-display text-3xl tracking-[0.1em] text-black mb-14"
            >
              {couple.him.charAt(0)} &amp; {couple.her.charAt(0)}
            </motion.p>

            <div className="flex flex-col items-center gap-7">
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline gap-4"
                >
                  <span className="text-[11px] text-neutral-400 font-sans tracking-[0.1em]">
                    0{i + 1}
                  </span>
                  <span className="font-display text-3xl font-light text-black">{l.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

