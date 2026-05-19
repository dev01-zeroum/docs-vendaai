import React from 'react';
import Link from '@docusaurus/Link';

export default function CanaisGrid({ eyebrow, titulo, lead, canais }) {
  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">{eyebrow}</p>
        <h2 className="page-section__title">{titulo}</h2>
        {lead && <p className="page-section__lead">{lead}</p>}
      </header>

      <div className="canais-grid">
        {canais.map((c) => (
          <article key={c.titulo} className="canal-card">
            <div className="canal-card__icon" aria-hidden="true">{c.icon}</div>
            <h3 className="canal-card__titulo">{c.titulo}</h3>
            <p className="canal-card__desc">{c.desc}</p>
            <Link
              to={c.href}
              className="landing-button landing-button--primary canal-card__cta">
              {c.ctaLabel}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
