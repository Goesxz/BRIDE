import { motion } from "framer-motion";
import Photo from "../components/media/Photo";
import { timeline } from "../data/story";

export default function Story() {
  return (
    <section id="historia" className="w-full bg-white py-28 md:py-40 px-6 md:px-10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1 }}
        className="text-center text-[11px] tracking-[0.3em] uppercase text-neutral-500 font-sans mb-4"
      >
        A caminhada até aqui
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, delay: 0.1 }}
        className="text-center font-display font-light text-black mb-24 md:mb-32"
        style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
      >
        Nossa história
      </motion.h2>

      <div className="max-w-[1100px] mx-auto flex flex-col gap-24 md:gap-36">
        {timeline.map((item, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={item.title}
              className={`flex flex-col ${
                reversed ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/2">
                <Photo
                  src={item.image}
                  alt={item.title}
                  aspect="aspect-[4/5]"
                  className="w-full max-w-[420px] mx-auto md:mx-0"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2 }}
                className={`w-full md:w-1/2 text-center md:text-left ${
                  reversed ? "md:text-right" : ""
                }`}
              >
                <p className="text-[11px] tracking-[0.25em] uppercase text-neutral-500 font-sans mb-3">
                  {item.period}
                </p>
                <h3
                  className="font-display font-light text-black mb-4"
                  style={{ fontSize: "clamp(22px, 2.8vw, 30px)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-neutral-600 font-sans max-w-[440px] mx-auto md:mx-0">
                  {item.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
