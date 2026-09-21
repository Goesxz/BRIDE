# 💍 BRIDE — Site de Pedido de Noivado

Um site interativo com estética editorial e monocromática (preto, branco e cinzento), desenvolvido para registrar e celebrar um pedido de noivado especial. Contém linha do tempo interativa, galeria estilo *masonry*, player de áudio e uma cápsula do tempo com desbloqueio por data.

---

## 🎨 Características & Design

- **Estética Editorial:** Design minimalista e monocromático focado em tipografia e fotografia.
- **Linha do Tempo ("Nossa História"):** Apresentação cronológica dos momentos do casal.
- **Galeria Masonry:** Fotos em proporção original sem cortes indesejados.
- **Trilha Sonora:** Suporte para áudio de fundo com botão de controle (*toggle*).
- **Cápsula do Tempo:** Secção trancada por data que se desbloqueia automaticamente.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://reactjs.org/)** — Biblioteca principal de interface
- **[Vite](https://vitejs.dev/)** — Build tool e servidor de desenvolvimento ágil
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilização utilitária
- **[Framer Motion](https://www.framer.com/motion/)** — Animações e transições fluidas

---

## 📂 Estrutura do Projeto

```text
src/
├── components/          # Componentes reutilizáveis de UI (SoundToggle, Lightbox...)
├── data/                # Conteúdos, textos, fotos e datas
│   ├── couple.js        # Nomes, data do pedido e textos principais
│   ├── story.js         # Dados da Linha do Tempo e momentos
│   └── gallery.js       # Mapeamento de fotos da galeria
├── hooks/               # Hooks customizados (ex: useCapsuleUnlock)
└── sections/            # Secções da página (Hero, Story, Gallery, Proposal, etc.)

public/
└── media/               # Ficheiros de mídia (photos/, videos/, audio/)
