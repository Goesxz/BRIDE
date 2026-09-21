import { useEffect, useState } from "react";
import { couple } from "../data/couple";

const LINKS = [
  { href: "#historia", label: "Nossa história" },
  { href: "#galeria", label: "Galeria" },
  { href: "#pedido", label: "O pedido" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
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
            {couple.her.charAt(0)} &amp; {couple.him.charAt(0)}
          </span>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-[11px] tracking-[0.2em] uppercase font-sans transition-colors duration-500 ${
                  scrolled ? "text-neutral-700 hover:text-black" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <button onClick={() => setOpen(true)} className="md:hidden p-2 -mr-2" aria-label="Abrir menu">
            <span className={`block w-6 h-px mb-[5px] ${scrolled ? "bg-black" : "bg-white"}`} />
            <span className={`block w-6 h-px ${scrolled ? "bg-black" : "bg-white"}`} />
          </button>
        </nav>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-8"
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-6 p-2 text-[13px] tracking-[0.2em] uppercase font-sans text-black"
            aria-label="Fechar menu"
          >
            Fechar
          </button>
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-3xl text-black"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
