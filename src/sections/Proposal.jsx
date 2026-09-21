import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { couple } from "../data/couple";

export default function Proposal() {
  const [accepted, setAccepted] = useState(false);

  return (
    <section
      id="pedido"
      className="relative w-full h-screen-safe bg-white flex flex-col items-center justify-center text-center px-8 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!accepted ? (
          <motion.div
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.9 }}
            className="flex flex-col items-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.2 }}
              className="text-[13px] tracking-[0.2em] uppercase text-neutral-500 font-sans mb-8"
            >
              Então...
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.4, delay: 0.2 }}
              className="font-display font-light text-black leading-[1.2]"
              style={{ fontSize: "clamp(30px, 5.5vw, 58px)" }}
            >
              {couple.her},
            </motion.h2>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="font-display font-light text-black leading-[1.3] mt-3"
              style={{ fontSize: "clamp(24px, 4vw, 40px)" }}
            >
              você aceita se casar comigo?
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1, delay: 1.4 }}
              onClick={() => setAccepted(true)}
              className="mt-16 px-12 py-4 border border-black text-black text-[12px] tracking-[0.3em] uppercase font-sans hover:bg-black hover:text-white transition-colors duration-500"
            >
              Eu aceito
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="answer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.3 }}
            className="flex flex-col items-center max-w-[560px]"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.6 }}
              className="font-display font-light text-black leading-[1.3]"
              style={{ fontSize: "clamp(26px, 4.4vw, 42px)" }}
            >
              Eu sabia que você diria sim.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 1.8 }}
              className="mt-8 text-[15px] leading-[1.8] text-neutral-600 font-sans max-w-[420px]"
            >
              Obrigado por escolher construir essa história comigo — hoje, e em
              todos os dias que ainda vamos viver juntos.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
