import React from 'react';
import Link from '@docusaurus/Link';
import tabs from '@site/src/manualTecnicoTabs';

// Seção "As abas de parâmetros" da Página Inicial: cabeçalho no estilo
// da landing (.page-section) + grid compacto de cartões (ícone + título
// + descrição curta) para as 16 abas. A lista vem do manualTecnicoTabs.js
// (mesma fonte usada pelo menu lateral).
export default function ManualIndex() {
  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">Navegação</p>
        <h2 className="page-section__title">As 16 abas de parâmetros</h2>
        <p className="page-section__lead">
          Abra qualquer aba pelo menu lateral ou por um dos cartões abaixo.
        </p>
      </header>

      <div className="param-grid">
        {tabs.map((tab) => (
          <Link key={tab.slug} to={tab.slug} className="param-card">
            <span className="param-card__icon" aria-hidden="true">{tab.icon}</span>
            <span className="param-card__body">
              <span className="param-card__titulo">{tab.titulo}</span>
              <span className="param-card__desc">{tab.desc}</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
