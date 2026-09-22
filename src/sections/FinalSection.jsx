import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { couple } from "../data/couple";

export default function FinalSection() {
  const [imgError, setImgError] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const reduceMotion = useReducedMotion();
  const useVideo = !videoError && !reduceMotion;

  const photoTransition = reduceMotion
    ? { duration: 0.6 }
    : { duration: 2.8, ease: [0.16, 1, 0.3, 1] };

  const ruleTransition = reduceMotion
    ? { duration: 0.4, delay: 0.2 }
    : { duration: 1.3, delay: 0.9, ease: [0.22, 1, 0.36, 1] };

  const dateTransition = reduceMotion
    ? { duration: 0.4, delay: 0.3 }
    : { duration: 1.2, delay: 1.1 };

  const nameTransition = reduceMotion
    ? { duration: 0.5, delay: 0.4 }
    : { duration: 1.5, delay: 1.4, ease: [0.22, 1, 0.36, 1] };

  const foreverTransition = reduceMotion
    ? { duration: 0.5, delay: 0.5 }
    : { duration: 1.8, delay: 2.05, ease: [0.22, 1, 0.36, 1] };

  return (
    <footer className="relative w-full h-screen-safe min-h-[100svh] bg-black overflow-hidden">
      {/* Cena final — vídeo como ambiente visual, com foto como fallback */}
      {useVideo ? (
        <motion.video
          src="/media/videos/video-finalsection.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/media/photos/final.jpg"
          onError={() => setVideoError(true)}
          initial={{ opacity: 0, scale: 1.06 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={photoTransition}
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90"
        />
      ) : (
        !imgError && (
          <motion.img
            src="/media/photos/final.jpg"
            alt=""
            aria-hidden="true"
            onError={() => setImgError(true)}
            initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={photoTransition}
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 brightness-90"
          />
        )
      )}

      {/* Tratamento fotográfico — vinheta + gradiente direcional (canto onde o texto vive) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 35%, transparent 35%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(200deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.18) 40%, rgba(0,0,0,0.72) 100%)",
        }}
      />

      {/* Carimbo editorial — data, canto superior direito, respeitando notch/status bar */}
      <motion.p
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 0.55, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={dateTransition}
        className="absolute z-10 right-6 sm:right-10 text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-neutral-300 font-sans text-right"
        style={{ top: "max(1.5rem, calc(env(safe-area-inset-top) + 0.75rem))" }}
      >
        {couple.proposalDateLabel}
      </motion.p>

      {/* Bloco de fecho — nome + "Para sempre.", ancorado à margem inferior esquerda */}
      <div className="absolute z-10 left-6 right-6 sm:left-10 sm:right-auto bottom-[max(2.5rem,env(safe-area-inset-bottom))] sm:bottom-14 flex items-stretch gap-4 sm:gap-6 max-w-[92vw] sm:max-w-[60vw]">
        <motion.span
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={ruleTransition}
          style={{ transformOrigin: "bottom" }}
          className="w-px bg-neutral-400/40 shrink-0"
          aria-hidden="true"
        />

        <div className="min-w-0">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={nameTransition}
            className="font-display font-light text-white tracking-[0.01em] leading-[1.08] break-words"
            style={{
              fontSize: "clamp(2.1rem, 10vw, 6.25rem)",
              textWrap: "balance",
            }}
          >
            {couple.him} &amp; {couple.her}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={foreverTransition}
            className="mt-2 sm:mt-3 font-display italic text-neutral-300"
            style={{ fontSize: "clamp(1rem, 2.4vw, 1.375rem)" }}
          >
            Para sempre.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}