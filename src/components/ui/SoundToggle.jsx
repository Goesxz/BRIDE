import { Volume2, VolumeX } from "lucide-react";
import { useAudio } from "../../context/AudioProvider";

export default function SoundToggle() {
  const { muted, toggle } = useAudio();

  return (
    <button
      onClick={toggle}
      className="fixed z-30 flex items-center justify-center w-10 h-10 rounded-full bg-black/80 hover:bg-black transition-colors backdrop-blur-sm"
      style={{
        left: "max(1rem, env(safe-area-inset-left))",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
      }}
      aria-label={muted ? "Ativar som" : "Silenciar"}
    >
      {muted ? <VolumeX size={15} color="#ffffff" strokeWidth={1.3} /> : <Volume2 size={15} color="#ffffff" strokeWidth={1.3} />}
    </button>
  );
}
