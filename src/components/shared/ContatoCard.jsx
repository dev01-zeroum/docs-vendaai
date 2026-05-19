import React from 'react';
import Link from '@docusaurus/Link';

export default function ContatoCard({
  eyebrow = 'Fale com a gente',
  titulo,
  role,
  nome,
  email,
  avatar,
  ctaLabel = 'Enviar e-mail',
  ctaSubject,
}) {
  const mailto = ctaSubject
    ? `mailto:${email}?subject=${encodeURIComponent(ctaSubject)}`
    : `mailto:${email}`;

  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">{eyebrow}</p>
        <h2 className="page-section__title">{titulo}</h2>
      </header>

      <article className="contato-card">
        <div className="contato-card__info">
          {avatar && (
            <div className="contato-card__avatar" aria-hidden="true">{avatar}</div>
          )}
          <div>
            {role && <p className="contato-card__role">{role}</p>}
            <h3 className="contato-card__nome">{nome}</h3>
            <p className="contato-card__email-text">{email}</p>
          </div>
        </div>
        <div className="contato-card__actions">
          <Link to={mailto} className="landing-button landing-button--primary">
            ✉️ {ctaLabel}
          </Link>
        </div>
      </article>
    </section>
  );
}
