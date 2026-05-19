import React from 'react';

const RAZOES = [
  {
    icon: '💡',
    titulo: 'Inovação',
    desc: 'Suas ideias se transformam em novas funcionalidades.',
  },
  {
    icon: '🚀',
    titulo: 'Melhoria contínua',
    desc: 'Evoluímos o VendaAI com base no feedback real de quem usa.',
  },
  {
    icon: '🎯',
    titulo: 'Priorização',
    desc: 'As sugestões mais pedidas ganham prioridade no roadmap.',
  },
];

export default function PorQueImportam() {
  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">Sua opinião importa</p>
        <h2 className="page-section__title">Por que sugerir?</h2>
      </header>

      <div className="porque-grid">
        {RAZOES.map((r) => (
          <article key={r.titulo} className="porque-card">
            <div className="porque-card__icon" aria-hidden="true">{r.icon}</div>
            <h3 className="porque-card__titulo">{r.titulo}</h3>
            <p className="porque-card__desc">{r.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
