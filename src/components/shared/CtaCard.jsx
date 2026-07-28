import React from 'react';
import Link from '@docusaurus/Link';
import Icon from '@site/src/components/shared/Icon';

// `ctaIcon` (opcional) é o nome de um ícone do set — quando informado,
// aparece antes do texto no lugar da seta padrão do botão.
export default function CtaCard({ titulo, desc, ctaLabel, ctaTo, ctaIcon }) {
  return (
    <section className="cta-card">
      <div className="cta-card__inner">
        <h2 className="cta-card__title">{titulo}</h2>
        <p className="cta-card__desc">{desc}</p>
        <Link to={ctaTo} className="landing-button landing-button--primary">
          {ctaIcon && <Icon name={ctaIcon} size={18} />}
          {ctaLabel}
          {!ctaIcon && <Icon name="arrow" size={18} />}
        </Link>
      </div>
    </section>
  );
}
