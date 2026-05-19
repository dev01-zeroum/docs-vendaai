import React from 'react';

const ITENS = [
  'Dark mode',
  'Busca avançada',
  'Integrações e relatórios personalizados',
];

export default function JaImplementadas() {
  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">Histórico</p>
        <h2 className="page-section__title">Sugestões que viraram realidade</h2>
        <p className="page-section__lead">
          Algumas das melhores ideias da comunidade já estão no VendaAI:
        </p>
      </header>

      <ul className="ja-implementadas">
        {ITENS.map((item) => (
          <li key={item} className="ja-implementadas__item">
            <span aria-hidden="true">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
