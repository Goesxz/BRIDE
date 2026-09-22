import { motion, MotionConfig } from "framer-motion";
import Photo from "../components/media/Photo";
import { timeline } from "../data/story";

const EASE = [0.22, 1, 0.36, 1];

const reveal = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE,
    },
  },
};

const revealPhoto = {
  hidden: {
    opacity: 0,
    y: 32,
    scale: 1.015,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: EASE,
    },
  },
};

const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

function StoryMoment({ item, index }) {
  const isLast = index === timeline.length - 1;

  /*
   * Cada momento possui uma composição própria.
   *
   * 0 — abertura assimétrica
   * 1 — inversão com maior deslocamento
   * 2 — composição central / protagonista
   * 3 — composição assimétrica novamente
   * 4 — encerramento mais amplo
   */

  if (index === 2) {
    return (
      <motion.li
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative"
      >
        <article className="relative">
          {/* Número editorial */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-8 left-1/2 z-0 -translate-x-1/2 select-none whitespace-nowrap font-display font-extralight leading-none text-neutral-100"
            style={{
              fontSize: "clamp(80px, 18vw, 220px)",
            }}
          >
            {item.period}
          </span>

          {/* Foto principal */}
          <motion.div
            variants={revealPhoto}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="relative z-10 mx-auto w-full max-w-[780px] overflow-hidden"
          >
            <Photo
              src={item.image}
              alt={item.alt ?? `${item.title} — ${item.period}`}
              aspect="aspect-[4/5]"
              className="w-full"
            />
          </motion.div>

          {/* Legenda */}
          <div className="relative z-20 mx-auto mt-8 w-full max-w-[520px] text-center sm:mt-10 md:mt-12">
            <motion.p
              variants={reveal}
              className="mb-3 text-[10px] font-sans uppercase tracking-[0.3em] text-neutral-500"
            >
              <time>{item.period}</time>
            </motion.p>

            <motion.h3
              variants={reveal}
              className="mb-4 font-display text-[28px] font-light leading-tight text-black sm:text-[32px]"
            >
              {item.title}
            </motion.h3>

            <motion.p
              variants={reveal}
              className="mx-auto max-w-[430px] font-sans text-[14px] leading-[1.8] text-neutral-600 sm:text-[15px]"
            >
              {item.description}
            </motion.p>
          </div>
        </article>
      </motion.li>
    );
  }

  if (isLast) {
    return (
      <motion.li
        variants={revealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="relative pb-12 sm:pb-16 md:pb-20"
      >
        <article className="relative">
          {/* Grande marca temporal */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-10 right-0 z-0 select-none font-display font-extralight leading-none text-neutral-100"
            style={{
              fontSize: "clamp(90px, 17vw, 220px)",
            }}
          >
            Hoje
          </span>

          <div className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-8">
            {/* Foto maior */}
            <motion.div
              variants={revealPhoto}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="md:col-span-8 md:col-start-1"
            >
              <Photo
                src={item.image}
                alt={item.alt ?? `${item.title} — ${item.period}`}
                aspect="aspect-[4/5]"
                className="w-full"
              />
            </motion.div>

            {/* Texto */}
            <div className="md:col-span-4 md:col-start-9 md:-ml-8 lg:-ml-12">
              <motion.p
                variants={reveal}
                className="mb-3 text-[10px] font-sans uppercase tracking-[0.3em] text-neutral-500"
              >
                <time>{item.period}</time>
              </motion.p>

              <motion.h3
                variants={reveal}
                className="mb-5 font-display text-[30px] font-light leading-[1.1] text-black sm:text-[36px]"
              >
                {item.title}
              </motion.h3>

              <motion.p
                variants={reveal}
                className="max-w-[360px] font-sans text-[14px] leading-[1.85] text-neutral-600 sm:text-[15px]"
              >
                {item.description}
              </motion.p>
            </div>
          </div>
        </article>
      </motion.li>
    );
  }

  const isReversed = index === 1 || index === 3;

  return (
    <motion.li
      variants={revealContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative"
    >
      <article
        className={`relative grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-6 ${
          isReversed ? "md:items-end" : ""
        }`}
      >
        {/* Número / período de fundo */}
        <span
          aria-hidden="true"
          className={`pointer-events-none absolute z-0 select-none whitespace-nowrap font-display font-extralight leading-none text-neutral-100 ${
            isReversed
              ? "-right-2 top-0 md:right-0 md:-top-8"
              : "-left-2 top-0 md:left-0 md:-top-8"
          }`}
          style={{
            fontSize: "clamp(72px, 14vw, 180px)",
          }}
        >
          {item.period}
        </span>

        {/* FOTO */}
        <motion.div
          variants={revealPhoto}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: EASE }}
          className={`relative z-10 w-full md:col-span-7 ${
            isReversed
              ? "md:col-start-6 md:row-start-1"
              : "md:col-start-1 md:row-start-1"
          }`}
        >
          <Photo
            src={item.image}
            alt={item.alt ?? `${item.title} — ${item.period}`}
            aspect="aspect-[4/5]"
            className="w-full"
          />
        </motion.div>

        {/* TEXTO */}
        <div
          className={`relative z-20 md:col-span-4 ${
            isReversed
              ? "md:col-start-1 md:row-start-1 md:mt-20 lg:mt-28"
              : "md:col-start-9 md:row-start-1 md:mt-28 lg:mt-40"
          }`}
        >
          <motion.p
            variants={reveal}
            className="mb-3 text-[10px] font-sans uppercase tracking-[0.3em] text-neutral-500"
          >
            <time>{item.period}</time>
          </motion.p>

          <motion.h3
            variants={reveal}
            className="mb-4 max-w-[360px] font-display text-[27px] font-light leading-[1.15] text-black sm:text-[30px]"
          >
            {item.title}
          </motion.h3>

          <motion.p
            variants={reveal}
            className="max-w-[390px] font-sans text-[14px] leading-[1.8] text-neutral-600 sm:text-[15px]"
          >
            {item.description}
          </motion.p>
        </div>
      </article>
    </motion.li>
  );
}

export default function Story() {
  return (
    <MotionConfig reducedMotion="user">
      <section
        id="historia"
        aria-labelledby="historia-titulo"
        className="relative w-full overflow-hidden bg-white px-5 py-24 sm:px-8 sm:py-28 md:px-10 md:py-40"
      >
        {/* INTRODUÇÃO */}
        <header className="mx-auto max-w-[900px] text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-4 text-[10px] font-sans uppercase tracking-[0.35em] text-neutral-500 sm:text-[11px]"
          >
            A caminhada até aqui
          </motion.p>

          <motion.h2
            id="historia-titulo"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 1,
              delay: 0.08,
              ease: EASE,
            }}
            className="font-display text-[40px] font-light leading-none tracking-[-0.02em] text-black sm:text-[48px] md:text-[58px]"
          >
            Nossa história
          </motion.h2>
        </header>

        {/* TIMELINE */}
        <div className="relative mx-auto mt-24 max-w-[1180px] sm:mt-32 md:mt-44">
          {/* Linha editorial central — apenas desktop */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-neutral-200 md:block"
          />

          <ol className="relative flex list-none flex-col gap-32 p-0 sm:gap-40 md:gap-[220px]">
            {timeline.map((item, index) => (
              <StoryMoment
                key={`${item.period}-${item.title}`}
                item={item}
                index={index}
              />
            ))}
          </ol>
        </div>

        {/* PAUSA FINAL */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.2 }}
          className="mx-auto mt-28 h-px w-16 bg-neutral-200 sm:mt-36 md:mt-48"
          aria-hidden="true"
        />
      </section>
    </MotionConfig>
  );
}