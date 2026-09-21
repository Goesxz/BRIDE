import { motion } from "framer-motion";
import { useState } from "react";
import { couple } from "../data/couple";

export default function FinalSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <footer className="relative w-full h-screen-safe bg-black overflow-hidden flex flex-col items-center justify-center text-center px-8">
      {!imgError && (
        <img
          src="/media/photos/final.jpg"
          alt=""
          onError={() => setImgError(true)}
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
        />
      )}
      <div className="absolute inset-0 bg-black/40" />

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.6 }}
        className="relative z-10 font-display font-light text-white tracking-[0.05em]"
        style={{ fontSize: "clamp(26px, 4.4vw, 44px)" }}
      >
        {couple.him} &amp; {couple.her}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.85 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.4, delay: 0.5 }}
        className="relative z-10 mt-4 font-display italic text-neutral-300"
        style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
      >
        Para sempre.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 1.4, delay: 0.9 }}
        className="relative z-10 mt-8 text-[11px] tracking-[0.25em] uppercase text-neutral-400 font-sans"
      >
        {couple.proposalDateLabel}
      </motion.p>
    </footer>
  );
}
