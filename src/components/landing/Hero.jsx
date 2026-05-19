import React from 'react';
import Link from '@docusaurus/Link';

export default function Hero() {
  return (
    <section className="landing-hero">
      <div className="landing-hero__inner">
        <p className="landing-hero__eyebrow">Documentação oficial</p>
        <h1 className="landing-hero__title">Atualizações ZEROUM</h1>
        <p className="landing-hero__subtitle">
          Acompanhe a evolução do <strong>VendaAI</strong> a cada nova edição.
        </p>
        <p className="landing-hero__lead">
          Aqui você encontra as melhorias entregues, novos recursos disponíveis para
          contratação e correções de cada ciclo — tudo de forma direta e transparente.
        </p>
        <div className="landing-hero__cta">
          <Link
            to="/boletim/atualizacoes-06-2026"
            className="landing-button landing-button--primary">
            Ver última edição →
          </Link>
        </div>
      </div>
    </section>
  );
}
