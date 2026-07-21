import React from 'react';
import Link from '@docusaurus/Link';

// Footer customizado (swizzle de @theme/Footer).
// 3 colunas (Suporte · Comercial · Links), ícones SVG inline (estilo
// Feather/Lucide, stroke — sem dependência externa), só o "Abrir chamado"
// em destaque. Estilos: .footer-x*  ·  Conteúdo: array COLUNAS abaixo.

// Ícones inline (traço, herdam a cor via currentColor).
const PATHS = {
  suporte: (
    <>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
      <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
      <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
      <line x1="9.17" y1="14.83" x2="4.93" y2="19.07" />
    </>
  ),
  comercial: (
    <>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </>
  ),
  links: (
    <>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </>
  ),
  chamado: (
    <>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </>
  ),
  whatsapp: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  ),
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 5L2 7" />
    </>
  ),
  chat: (
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  ),
  site: (
    <>
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  changelog: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </>
  ),
  sugestoes: (
    <>
      <path d="M9 18h6" />
      <path d="M10 22h4" />
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5" />
    </>
  ),
};

function Icone({nome}) {
  return (
    <svg
      className="footer-x__ico"
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {PATHS[nome]}
    </svg>
  );
}

const COLUNAS = [
  {
    icone: 'suporte',
    titulo: 'Suporte',
    itens: [
      {icone: 'chamado', label: 'Abrir chamado', href: 'https://zeroum.zumdesk.com.br', destaque: true},
      {icone: 'whatsapp', label: 'WhatsApp', href: 'https://wa.me/5511974384612'},
      {icone: 'email', label: 'E-mail', href: 'mailto:suporte@vendaai.com.br'},
    ],
  },
  {
    icone: 'comercial',
    titulo: 'Comercial',
    itens: [
      {icone: 'chat', label: 'Falar com o Comercial', to: '/fale-conosco/comercial'},
      {icone: 'email', label: 'contato@itzeroum.com.br', href: 'mailto:contato@itzeroum.com.br'},
    ],
  },
  {
    icone: 'links',
    titulo: 'Links',
    itens: [
      {icone: 'site', label: 'Site oficial', href: 'https://vendaai.com.br'},
      {icone: 'changelog', label: 'Última Atualização', to: '/boletim/atualizacoes-07-2026'},
      {icone: 'sugestoes', label: 'Sugestões', to: '/fale-conosco/sugestoes'},
    ],
  },
];

function Item({item}) {
  const {to, href, label, icone, destaque} = item;
  const linkProps = href ? {href} : {to};
  return (
    <Link className={destaque ? 'footer-x__cta' : 'footer-x__link'} {...linkProps}>
      <Icone nome={icone} />
      {label}
    </Link>
  );
}

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer-x">
      <div className="footer-x__inner">
        {COLUNAS.map((col) => (
          <div className="footer-x__col" key={col.titulo}>
            <p className="footer-x__col-title">
              <Icone nome={col.icone} />
              {col.titulo}
            </p>
            <ul className="footer-x__list">
              {col.itens.map((item) => (
                <li key={item.label}>
                  <Item item={item} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-x__bottom">
        <p className="footer-x__copyright">
          © {ano} ZEROUM Software House
          <br />
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
