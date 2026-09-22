import { motion, MotionConfig } from "framer-motion";
import Photo from "../components/media/Photo";
import { timeline } from "../data/story";

/**
 * Easing editorial: início suave, chegada quase sem repique.
 * Mantido único no arquivo para consistência entre todos os elementos.
 */
const EASE = [0.22, 1, 0.36, 1];

const revealContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const revealPhoto = {
  hidden: { opacity: 0, y: 24, scale: 1.02 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: EASE },
  },
};

const revealLine = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
};

export default function Story() {
  return (
    // reducedMotion="user" respeita a preferência do sistema operacional
    // automaticamente em todas as animações Framer Motion desta seção.
    <MotionConfig reducedMotion="user">
      <section
        id="historia"
        aria-labelledby="historia-titulo"
        className="w-full bg-white py-24 sm:py-28 md:py-40 px-5 sm:px-8 md:px-10"
      >
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
          id="historia-titulo"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, delay: 0.1, ease: EASE }}
          className="text-center font-display font-light text-black mb-20 sm:mb-24 md:mb-32"
          style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
        >
          Nossa história
        </motion.h2>

        <ol className="max-w-[1180px] mx-auto flex flex-col gap-20 sm:gap-24 md:gap-40 list-none">
          {timeline.map((item, i) => {
            const reversed = i % 2 === 1;

            return (
              <motion.li
                key={`${item.period}-${item.title}`}
                variants={revealContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
              >
                <article
                  className="grid grid-cols-1 md:grid-cols-12 items-start gap-8 md:gap-6"
                >
                  {/* FOTO — maior peso visual, com o período como tipografia de fundo */}
                  <div
                    className={`relative md:col-span-7 ${
                      reversed ? "md:col-start-6 md:order-2" : "md:order-1"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none select-none absolute -top-6 sm:-top-8 md:-top-10 font-display font-extralight text-neutral-100 leading-none z-0 ${
                        reversed ? "right-0 md:-right-4" : "left-0 md:-left-4"
                      }`}
                      style={{ fontSize: "clamp(64px, 12vw, 168px)" }}
                    >
                      {item.period}
                    </span>

                    <motion.div
                      variants={revealPhoto}
                      whileHover={{ scale: 1.035 }}
                      transition={{ duration: 0.7, ease: EASE }}
                      className="relative z-10 overflow-hidden"
                    >
                      {/* whileHover não dispara em telas touch (sem ponteiro de mouse),
                          então uma única Photo cobre desktop e mobile sem carregar a imagem 2x */}
                      <Photo
                        src={item.image}
                        alt={item.alt ?? `${item.title} — ${item.period}`}
                        aspect="aspect-[4/5]"
                        className="w-full"
                      />
                    </motion.div>
                  </div>

                  {/* TEXTO — assimétrico, deslocado verticalmente para quebrar o espelhamento */}
                  <div
                    className={`md:col-span-4 flex flex-col justify-center text-left ${
                      reversed
                        ? "md:col-start-1 md:order-1 md:mt-10 lg:mt-20"
                        : "md:col-start-9 md:order-2 md:mt-24 lg:mt-36"
                    }`}
                  >
                    <motion.p
                      variants={revealLine}
                      className="text-[11px] tracking-[0.25em] uppercase text-neutral-500 font-sans mb-3"
                    >
                      <time>{item.period}</time>
                    </motion.p>

                    <motion.h3
                      variants={revealLine}
                      className="font-display font-light text-black mb-4"
                      style={{ fontSize: "clamp(22px, 2.6vw, 30px)" }}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      variants={revealLine}
                      className="text-[15px] leading-[1.75] text-neutral-600 font-sans max-w-[420px]"
                    >
                      {item.description}
                    </motion.p>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ol>
      </section>
    </MotionConfig>
  );
}