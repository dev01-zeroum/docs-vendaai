import React from 'react';
import Link from '@docusaurus/Link';

export default function CtaCard({ titulo, desc, ctaLabel, ctaTo }) {
  return (
    <section className="cta-card">
      <div className="cta-card__inner">
        <h2 className="cta-card__title">{titulo}</h2>
        <p className="cta-card__desc">{desc}</p>
        <Link to={ctaTo} className="landing-button landing-button--primary">
          {ctaLabel}
        </Link>
      </div>
    </section>
  );
}
