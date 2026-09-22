// Troque "image" pelo caminho real depois de colocar o arquivo em
// public/media/photos/ (veja o README que já existe lá dentro).
// Enquanto o arquivo não existir, a foto simplesmente não aparece —
// não quebra o layout.
export const timeline = [
  {
    period: "O início",
    title: "Numa célula da igreja",
    description:
      "Foi ali que nos conhecemos. Depois, passamos a servir no mesmo lugar — sem pressa, sem nome ainda pro que estava começando.",
    image: "/media/photos/photo-celula.png",
  },
  {
    period: "Fim de ano",
    title: "A aproximação",
    description: "Comecei a visitar a casa dela. Devagar, mas cada vez mais claro.",
    image: "/media/photos/photo-aproximação.png",
  },
  {
    period: "A virada",
    title: "Uma resposta",
    description:
      "Entre 27 e 31 de dezembro, pedi uma direção. À meia-noite, sem procurar, eu já sabia.",
    image: "/media/photos/historia-03.jpg",
  },
  {
    period: "10 de março",
    title: "O início do namoro",
    description:
      "Um culto na Lagoinha Alphaville. Um pedido. Uma oração juntos, consagrando tudo o que estava começando.",
    image: "/media/photos/historia-04.jpg",
  },
  {
    period: "Hoje",
    title: "E chegamos até aqui",
    description:
      "Nossa casa só vai sair do lugar se for da direção de Deus. É essa a base do que vem a seguir.",
    image: "/media/photos/historia-05.jpg",
  },
];

// Frases curtas usadas na seção "Momentos" (pausa emocional entre a
// galeria e o pedido).
export const moments = [
  "Entre tantos lugares...",
  "tantos dias...",
  "tantas histórias...",
  "sempre foi você.",
];

// Frases da transição — o ritmo vai ficando mais silencioso até o pedido.
export const transitionLines = [
  "Depois de tudo...",
  "de todos os momentos...",
  "de todas as histórias...",
  "existe uma coisa que eu ainda preciso te perguntar.",
];

