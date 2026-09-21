import { useEffect, useState } from "react";

// Data do pedido. Ajuste aqui se o horário exato importar
// (por padrão, destrava à meia-noite do dia 10/03/2027).
const TARGET_DATE = new Date("2027-03-10T00:00:00");

/**
 * Nota: essa verificação usa o relógio do próprio dispositivo de quem
 * está vendo o site — não é um mecanismo de segurança, é simbólico.
 * Alguém que mude a data do celular manualmente consegue "trapacear".
 * Isso é intencional: o objetivo aqui é criar expectativa, não proteger
 * um segredo.
 */
export function useCapsuleUnlock() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // Reavalia a cada hora — não precisa ser em tempo real.
    const interval = setInterval(() => setNow(new Date()), 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const unlocked = now.getTime() >= TARGET_DATE.getTime();
  const msRemaining = Math.max(0, TARGET_DATE.getTime() - now.getTime());
  const daysRemaining = Math.ceil(msRemaining / (1000 * 60 * 60 * 24));

  return { unlocked, daysRemaining };
}
