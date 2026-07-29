import React from 'react';

// ============================================================
// Icon — set de ícones SVG inline do site
// ------------------------------------------------------------
// Substitui os emojis que eram usados como ícone. Todos seguem
// a mesma grade (24x24), traço de 1.75 e `currentColor`, então
// herdam a cor de quem os envolve (chip, card, botão...).
//
// Uso em JSX:   <Icon name="home" />
// Uso nos .md:  passe só o nome (icon: 'home') — o componente
//               que recebe a prop é quem renderiza o <Icon />.
//
// Para adicionar um ícone: acrescente uma entrada em ICONS com
// os elementos SVG (sem fill/stroke — são herdados do <svg>).
// ============================================================

const ICONS = {
  // ----- Navegação / plataforma -----
  home: (
    <>
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.2V20h13V9.2" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  chart: (
    <>
      <rect x="4" y="13" width="4" height="7.5" rx="0.8" />
      <rect x="10" y="8.5" width="4" height="12" rx="0.8" />
      <rect x="16" y="11" width="4" height="9.5" rx="0.8" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2" />
      <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
      <line x1="8" y1="3" x2="8" y2="6.5" />
      <line x1="16" y1="3" x2="16" y2="6.5" />
    </>
  ),
  book: (
    <>
      <path d="M12 6.5C10.5 5 8.5 4.5 4 4.5v13c4.5 0 6.5.5 8 2 1.5-1.5 3.5-2 8-2v-13c-4.5 0-6.5.5-8 2z" />
      <line x1="12" y1="6.5" x2="12" y2="19.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9.5" cy="8.5" r="3.4" />
      <path d="M3 20a6.5 6.5 0 0 1 13 0" />
      <path d="M16.2 5.6a3.4 3.4 0 0 1 0 6.4" />
      <path d="M17.6 13.4a5.6 5.6 0 0 1 3.4 5.1" />
    </>
  ),
  cart: (
    <>
      <path d="M2.5 4h2.2l2.3 10.4a1.6 1.6 0 0 0 1.6 1.3h8.5a1.6 1.6 0 0 0 1.6-1.3L20.2 7.6H5.4" />
      <circle cx="9.5" cy="19.5" r="1.5" />
      <circle cx="17.5" cy="19.5" r="1.5" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
      <rect x="9" y="2.5" width="6" height="4" rx="1.2" />
      <line x1="9" y1="11.5" x2="15" y2="11.5" />
      <line x1="9" y1="15.5" x2="13" y2="15.5" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <line x1="15.8" y1="15.8" x2="20.5" y2="20.5" />
    </>
  ),
  folder: (
    <path d="M3.5 7a1.5 1.5 0 0 1 1.5-1.5h3.8l2 2.5H19a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 20H5a1.5 1.5 0 0 1-1.5-1.5z" />
  ),

  // ----- Manual técnico / parâmetros -----
  sliders: (
    <>
      <line x1="4" y1="7" x2="20" y2="7" />
      <circle cx="9" cy="7" r="2.2" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="15" cy="12" r="2.2" />
      <line x1="4" y1="17" x2="20" y2="17" />
      <circle cx="10" cy="17" r="2.2" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0" />
    </>
  ),
  box: (
    <>
      <path d="M12 2.5 20.5 7v10L12 21.5 3.5 17V7z" />
      <path d="M3.5 7 12 11.7 20.5 7" />
      <line x1="12" y1="11.7" x2="12" y2="21.5" />
    </>
  ),
  warehouse: (
    <>
      <path d="M3 10 12 4l9 6v10.5H3z" />
      <path d="M7 20.5V14h10v6.5" />
      <line x1="7" y1="17.2" x2="17" y2="17.2" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <line x1="2.5" y1="10" x2="21.5" y2="10" />
      <line x1="6" y1="15" x2="10" y2="15" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 7a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9h-11z" />
      <path d="M13.5 10.5h3.3a1 1 0 0 1 .8.4l2.2 2.9a1 1 0 0 1 .2.6V16h-6.5z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </>
  ),
  link: (
    <>
      <path d="M10.2 13.8a4 4 0 0 0 5.7 0l3-3a4 4 0 1 0-5.7-5.7l-1.5 1.5" />
      <path d="M13.8 10.2a4 4 0 0 0-5.7 0l-3 3a4 4 0 1 0 5.7 5.7l1.5-1.5" />
    </>
  ),
  bell: (
    <>
      <path d="M6.5 10a5.5 5.5 0 0 1 11 0c0 4.5 1.5 6 1.5 6H5s1.5-1.5 1.5-6z" />
      <path d="M10.2 19a2.2 2.2 0 0 0 3.6 0" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <line x1="3.5" y1="12" x2="20.5" y2="12" />
      <path d="M12 3.5a13 13 0 0 1 0 17 13 13 0 0 1 0-17z" />
    </>
  ),
  money: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
      <line x1="6" y1="11.4" x2="6" y2="12.6" />
      <line x1="18" y1="11.4" x2="18" y2="12.6" />
    </>
  ),
  kanban: (
    <>
      <rect x="3" y="4" width="5" height="12" rx="1.2" />
      <rect x="9.5" y="4" width="5" height="16.5" rx="1.2" />
      <rect x="16" y="4" width="5" height="9" rx="1.2" />
    </>
  ),
  map: (
    <>
      <path d="M9 3.5 3.5 5.8v14.7L9 18.2l6 2.3 5.5-2.3V3.5L15 5.8z" />
      <line x1="9" y1="3.5" x2="9" y2="18.2" />
      <line x1="15" y1="5.8" x2="15" y2="20.5" />
    </>
  ),

  // ----- Atendimento / contato -----
  ticket: (
    <>
      <path d="M3 8.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1.2a2.3 2.3 0 0 0 0 4.6v1.2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1.2a2.3 2.3 0 0 0 0-4.6z" />
      <line x1="12" y1="7.5" x2="12" y2="10" />
      <line x1="12" y1="14" x2="12" y2="16.5" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="M3.2 6.6 12 13l8.8-6.4" />
    </>
  ),
  chat: <path d="M20.5 11.5a8 8 0 0 1-11.6 7.2L3.5 20.5l1.8-5.3A8 8 0 1 1 20.5 11.5z" />,
  briefcase: (
    <>
      <rect x="2.5" y="7.5" width="19" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <line x1="2.5" y1="12.5" x2="21.5" y2="12.5" />
    </>
  ),
  support: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.8" />
      <line x1="6" y1="6" x2="9.3" y2="9.3" />
      <line x1="14.7" y1="14.7" x2="18" y2="18" />
      <line x1="18" y1="6" x2="14.7" y2="9.3" />
      <line x1="9.3" y1="14.7" x2="6" y2="18" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 6.8V12l3.6 2.2" />
    </>
  ),

  // ----- Estado / genéricos -----
  check: <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />,
  gear: (
    <>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.5v2.8M12 18.7v2.8M21.5 12h-2.8M5.3 12H2.5M18.7 5.3l-2 2M7.3 16.7l-2 2M18.7 18.7l-2-2M7.3 7.3l-2-2" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.5 17.5a8.5 8.5 0 1 1 17 0" />
      <line x1="12" y1="17.5" x2="15.8" y2="11.8" />
      <circle cx="12" cy="17.5" r="1.4" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3 20.8 8 12 13 3.2 8z" />
      <path d="M3.2 12.5 12 17.5l8.8-5" />
      <path d="M3.2 16.5 12 21.5l8.8-5" />
    </>
  ),
  toggle: (
    <>
      <rect x="2.5" y="7.5" width="19" height="9" rx="4.5" />
      <circle cx="7" cy="12" r="2.6" />
    </>
  ),
  hash: (
    <>
      <line x1="5" y1="9.5" x2="19" y2="9.5" />
      <line x1="5" y1="14.5" x2="19" y2="14.5" />
      <line x1="10.4" y1="4.5" x2="8.8" y2="19.5" />
      <line x1="15.6" y1="4.5" x2="14" y2="19.5" />
    </>
  ),
  list: (
    <>
      <line x1="9" y1="7" x2="20" y2="7" />
      <line x1="9" y1="12" x2="20" y2="12" />
      <line x1="9" y1="17" x2="20" y2="17" />
      <circle cx="4.8" cy="7" r="1.2" />
      <circle cx="4.8" cy="12" r="1.2" />
      <circle cx="4.8" cy="17" r="1.2" />
    </>
  ),
  checkbox: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M8 12.2 11 15.2 16.5 9" />
    </>
  ),
  trending: (
    <>
      <path d="M3.5 16.5 9 11l4 4 7.5-7.5" />
      <path d="M15.5 7.5h5v5" />
    </>
  ),
  bulb: (
    <>
      <path d="M8.6 14.6a5.6 5.6 0 1 1 6.8 0c-.8.7-1.3 1.6-1.4 2.5h-4c-.1-.9-.6-1.8-1.4-2.5z" />
      <line x1="10" y1="20.3" x2="14" y2="20.3" />
    </>
  ),
  image: (
    <>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="8.8" cy="9.8" r="1.6" />
      <path d="M20.2 15.8 16 11.6l-8.4 7.9" />
    </>
  ),
  arrow: (
    <>
      <line x1="4.5" y1="12" x2="19" y2="12" />
      <path d="M13.5 6.5 20 12l-6.5 5.5" />
    </>
  ),
};

export default function Icon({name, size = 22, className, style}) {
  const glyph = ICONS[name];
  if (!glyph) return null;

  return (
    <svg
      className={className}
      style={style}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
