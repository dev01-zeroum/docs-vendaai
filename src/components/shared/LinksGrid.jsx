import React from 'react';
import Link from '@docusaurus/Link';

export default function LinksGrid({ eyebrow, titulo, lead, items }) {
  return (
    <section className="page-section">
      {(eyebrow || titulo || lead) && (
        <header className="page-section__header">
          {eyebrow && <p className="page-section__eyebrow">{eyebrow}</p>}
          {titulo && <h2 className="page-section__title">{titulo}</h2>}
          {lead && <p className="page-section__lead">{lead}</p>}
        </header>
      )}

      <div className="links-grid">
        {items.map((item) => (
          <Link key={item.href} to={item.href} className="link-card">
            {item.icon && (
              <div className="link-card__icon" aria-hidden="true">{item.icon}</div>
            )}
            <h3 className="link-card__titulo">{item.titulo}</h3>
            <p className="link-card__desc">{item.desc}</p>
            <span className="link-card__arrow">Ver detalhes →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
