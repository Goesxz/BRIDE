import { motion } from "framer-motion";
import { moments } from "../data/story";

export default function Moments() {
  return (
    <section className="w-full bg-white py-32 md:py-48 px-8 flex flex-col items-center justify-center text-center">
      {moments.map((line, i) => (
        <motion.p
          key={line}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.2, delay: i * 0.15 }}
          className={`font-display font-light ${
            i === moments.length - 1 ? "text-black mt-4" : "text-neutral-400"
          }`}
          style={{
            fontSize:
              i === moments.length - 1 ? "clamp(30px, 5vw, 52px)" : "clamp(20px, 3vw, 30px)",
          }}
        >
          {line}
        </motion.p>
      ))}
    </section>
  );
}
