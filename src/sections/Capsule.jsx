import { motion, AnimatePresence } from "framer-motion";
import { Lock, LockOpen } from "lucide-react";
import { capsule } from "../data/capsule";
import { useCapsuleUnlock } from "../hooks/useCapsuleUnlock";

export default function Capsule() {
  const { unlocked, daysRemaining } = useCapsuleUnlock();

  return (
    <section className="w-full py-32 md:py-48 bg-black flex flex-col items-center justify-center px-8 text-center">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="locked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <Lock size={18} color="#ffffff" strokeWidth={1.2} className="mb-6 opacity-70" />

            <p className="font-display text-white font-light" style={{ fontSize: "clamp(19px, 2.6vw, 25px)" }}>
              {capsule.lockedTitle}
            </p>
            <p className="mt-3 text-[13px] italic text-neutral-400 font-display">{capsule.lockedSub}</p>
            <p className="mt-8 text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-sans">
              {capsule.kicker} · {daysRemaining} {daysRemaining === 1 ? "dia" : "dias"}
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="unlocked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            className="flex flex-col items-center max-w-[560px]"
          >
            <LockOpen size={18} color="#ffffff" strokeWidth={1.2} className="mb-6" />
            <p className="font-display text-white font-light" style={{ fontSize: "clamp(24px, 3.4vw, 34px)" }}>
              {capsule.unlockedTitle}
            </p>
            <p className="mt-3 text-[14px] text-neutral-400 font-display italic">{capsule.unlockedIntro}</p>
            <div className="mt-10 text-[12px] text-neutral-500 font-sans">(conteúdo do dia entra aqui)</div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
