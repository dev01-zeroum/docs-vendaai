import React from 'react';
import Link from '@docusaurus/Link';

const EDICOES = [
  {
    slug: '/boletim/atualizacoes-06-2026',
    periodo: 'Jun/2026',
    titulo: 'Atualizações ZEROUM – Junho/26',
    destaque: 'Pedidos em dólar, integrações de pagamento e logística',
    novo: true,
  },
  {
    slug: '/boletim/atualizacoes-01-2026',
    periodo: 'Jan/2026',
    titulo: 'Atualizações ZEROUM – Janeiro/26',
    destaque: 'Configurador de produtos, painel de cobrança e ERP Datasul',
  },
  {
    slug: '/boletim/atualizacoes-06-2025',
    periodo: 'Jun/2025',
    titulo: 'Atualizações ZEROUM – Junho/25',
    destaque: 'Painel de produtos, Expedição e integrações de e-commerce',
  },
  {
    slug: '/boletim/atualizacoes-01-2025',
    periodo: 'Jan/2025',
    titulo: 'Atualizações ZEROUM – Janeiro/25',
    destaque: 'Combos, produtos relacionados e melhorias de catálogo',
  },
];

export default function EdicoesGrid() {
  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">Edições disponíveis</p>
        <h2 className="page-section__title">Todas as atualizações</h2>
      </header>

      <div className="landing-edicoes">
        {EDICOES.map((ed) => (
          <Link key={ed.slug} to={ed.slug} className="landing-edicao">
            <div className="landing-edicao__top">
              <span className="landing-edicao__periodo">{ed.periodo}</span>
              {ed.novo && <span className="landing-edicao__badge">Novo</span>}
            </div>
            <h3 className="landing-edicao__titulo">{ed.titulo}</h3>
            <p className="landing-edicao__destaque">{ed.destaque}</p>
            <span className="landing-edicao__link">Ver edição →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
