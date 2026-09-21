import { motion } from "framer-motion";
import { useState } from "react";
import { gallery } from "../data/gallery";
import Lightbox from "../components/Lightbox";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="galeria" className="w-full bg-neutral-50 py-28 md:py-40 px-4 md:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        className="text-center text-[11px] tracking-[0.3em] uppercase text-neutral-500 font-sans mb-4"
      >
        Em imagens
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="text-center font-display font-light text-black mb-16 md:mb-20"
        style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
      >
        Galeria
      </motion.h2>

      <div className="max-w-[1200px] mx-auto columns-2 md:columns-3 gap-2 md:gap-3">
        {gallery.map((photo, i) => (
          <GalleryCell key={photo.src} photo={photo} onClick={() => setActiveIndex(i)} />
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          photos={gallery}
          index={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}

function GalleryCell({ photo, onClick }) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9 }}
      className="block w-full mb-2 md:mb-3 overflow-hidden bg-neutral-200 break-inside-avoid"
      aria-label="Ampliar fotografia"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        onError={() => setError(true)}
        className="w-full h-auto grayscale hover:scale-105 transition-transform duration-700"
      />
    </motion.button>
  );
}
