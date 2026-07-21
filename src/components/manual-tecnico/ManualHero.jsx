import React from 'react';
import Link from '@docusaurus/Link';

// Hero da Página Inicial do Manual Técnico — mesmo estilo do Hero da
// home do site (classes .landing-hero*). Traz o branding e o CTA
// para a primeira aba.
export default function ManualHero() {
  return (
    <section className="landing-hero">
      <div className="landing-hero__inner">
        <p className="landing-hero__eyebrow">Documentação oficial · Boletim Técnico</p>
        <h1 className="landing-hero__title">Manual Técnico</h1>
        <p className="landing-hero__subtitle">
          Referência completa da tela <strong>Parâmetros do sistema</strong> do VendaAI.
        </p>
        <p className="landing-hero__lead">
          É aqui que cada empresa define como a plataforma se comporta — impostos,
          bloqueios, integrações e muito mais. Este manual documenta todas as abas,
          seção por seção.
        </p>
        <div className="landing-hero__cta">
          <Link
            to="/manual-tecnico/geral"
            className="landing-button landing-button--primary">
            Começar pela aba Geral →
          </Link>
        </div>
      </div>
    </section>
  );
}
