import { motion } from "framer-motion";
import { useState } from "react";
import { couple } from "../data/couple";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  const scrollToStory = () => {
    document.getElementById("historia")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-screen-safe overflow-hidden bg-black">
      {!imgError && (
        <img
          src="/media/photos/hero.jpg"
          alt=""
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
      )}
      {/* Gradiente para garantir legibilidade do texto sobre a foto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="text-[11px] tracking-[0.35em] uppercase text-white/80 font-sans mb-6"
        >
          {couple.heroKicker}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-white font-light leading-[1.25] max-w-[720px]"
          style={{ fontSize: "clamp(26px, 4.4vw, 46px)" }}
        >
          {couple.heroQuestion}
        </motion.h1>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.6 }}
          onClick={scrollToStory}
          className="mt-12 text-[11px] tracking-[0.3em] uppercase text-white font-sans border-b border-white/50 pb-1 hover:border-white transition-colors"
        >
          {couple.heroCta}
        </motion.button>
      </div>
    </section>
  );
}
