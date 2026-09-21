import { motion } from "framer-motion";
import { useState } from "react";

/**
 * Uso: <Photo src="/media/photos/exemplo.jpg" alt="descrição" />
 * Veja public/media/README.md para instruções completas.
 */
export default function Photo({
  src,
  alt = "",
  className = "",
  aspect = "aspect-[4/5]",
  grayscale = true,
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Se o arquivo ainda não existir, some sem quebrar o layout da seção.
  if (error) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1.2 }}
      className={`relative overflow-hidden ${aspect} ${className}`}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          grayscale ? "grayscale" : ""
        } ${loaded ? "opacity-100" : "opacity-0"}`}
      />
    </motion.div>
  );
}
