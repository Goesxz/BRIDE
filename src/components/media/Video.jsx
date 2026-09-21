import { useEffect, useRef, useState } from "react";

/**
 * Uso: <Video src="/media/videos/exemplo.mp4" />
 * Veja public/media/README.md para instruções completas.
 *
 * O vídeo é sempre mudo por padrão (autoplay em navegador exige isso).
 * Toca automaticamente quando entra na tela, pausa quando sai —
 * poupa bateria e dados no celular.
 */
export default function Video({ src, poster, className = "", aspect = "aspect-video" }) {
  const videoRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Se o arquivo ainda não existir, some sem quebrar o layout do capítulo.
  if (error) return null;

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        onError={() => setError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
