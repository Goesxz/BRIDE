import { createContext, useContext, useRef, useState } from "react";

const AudioContext = createContext(null);

// Caminho fixo — basta colocar o arquivo em public/media/audio/cheiro de mar.mp3
// (veja public/media/README.md). Enquanto o arquivo não existir, o toggle
// simplesmente falha silenciosamente, sem quebrar o site.
const TRACK_SRC = "/media/audio/cheiro de mar.mp3";

export function AudioProvider({ children }) {
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (muted) {
      audio.play().catch(() => {
        // Arquivo ainda não existe, ou o navegador bloqueou o autoplay
        // até haver interação — nesse caso o botão já É a interação,
        // então normalmente funciona. Se falhar, apenas ignoramos.
      });
    } else {
      audio.pause();
    }
    setMuted((m) => !m);
  };

  return (
    <AudioContext.Provider value={{ muted, toggle }}>
      {children}
      <audio ref={audioRef} src={TRACK_SRC} loop preload="none" />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) {
    throw new Error("useAudio precisa ser usado dentro de <AudioProvider>");
  }
  return ctx;
}
