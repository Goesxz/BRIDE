import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ photos, index, onClose, onChange }) {
  const touchStartX = useRef(null);

  const goPrev = () => onChange((index - 1 + photos.length) % photos.length);
  const goNext = () => onChange((index + 1) % photos.length);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (delta > 50) goPrev();
    if (delta < -50) goNext();
    touchStartX.current = null;
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-white/80 hover:text-white z-10"
          aria-label="Fechar"
        >
          <X size={22} strokeWidth={1.2} />
        </button>
        <button
          onClick={goPrev}
          className="hidden md:block absolute left-6 p-2 text-white/60 hover:text-white z-10"
          aria-label="Foto anterior"
        >
          <ChevronLeft size={28} strokeWidth={1} />
        </button>
        <button
          onClick={goNext}
          className="hidden md:block absolute right-6 p-2 text-white/60 hover:text-white z-10"
          aria-label="Próxima foto"
        >
          <ChevronRight size={28} strokeWidth={1} />
        </button>

        <motion.img
          key={photos[index].src}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={photos[index].src}
          alt={photos[index].alt}
          className="max-w-[92vw] max-h-[85vh] object-contain grayscale"
        />
      </motion.div>
    </AnimatePresence>
  );
}
