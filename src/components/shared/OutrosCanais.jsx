import React from 'react';
import Link from '@docusaurus/Link';

export default function OutrosCanais({
  eyebrow = 'Outros canais',
  titulo,
  canais,
}) {
  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">{eyebrow}</p>
        <h2 className="page-section__title">{titulo}</h2>
      </header>

      <div className="outros-canais">
        {canais.map((c) => (
          <Link key={c.to} to={c.to} className="outros-canal">
            <span className="outros-canal__icon" aria-hidden="true">{c.icon}</span>
            <div>
              <h3 className="outros-canal__titulo">{c.titulo}</h3>
              <p className="outros-canal__desc">{c.desc}</p>
            </div>
            <span className="outros-canal__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
