import { motion } from "framer-motion";
import { transitionLines } from "../data/story";

export default function Transition() {
  return (
    <section className="w-full bg-black py-32 md:py-48 px-8 flex flex-col items-center justify-center text-center gap-6">
      {transitionLines.map((line, i) => (
        <motion.p
          key={line}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: i === transitionLines.length - 1 ? 1 : 0.55 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.6, delay: i * 0.6 }}
          className="font-display font-light text-white"
          style={{
            fontSize:
              i === transitionLines.length - 1
                ? "clamp(22px, 3.6vw, 34px)"
                : "clamp(17px, 2.4vw, 22px)",
          }}
        >
          {line}
        </motion.p>
      ))}
    </section>
  );
}
