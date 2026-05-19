import React from 'react';

const SERVICOS = [
  {
    icon: '🚀',
    titulo: 'Contratação de Recursos Modulados',
    desc: 'Habilitação dos novos recursos apresentadosnas Atualizações, com cronograma combinado e equipe dedicada.',
  },
  {
    icon: '📦',
    titulo: 'Pacotes Personalizados',
    desc: 'Combinações de funcionalidades alinhadas ao seu cenário de operação, com proposta sob medida.',
  },
  {
    icon: '💡',
    titulo: 'Consultoria de Funcionalidades',
    desc: 'Esclarecimento sobre o que cada recurso entrega e qual faz mais sentido pro seu momento.',
  },
];

export default function ServicosCards() {
  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">Como podemos ajudar</p>
        <h2 className="page-section__title">O que o nosso comercial entrega</h2>
        <p className="page-section__lead">
          Estamos à disposição pra orientar sobre as evoluções do VendaAI e propor o
          melhor caminho pro seu cenário.
        </p>
      </header>

      <div className="comercial-servicos">
        {SERVICOS.map((s) => (
          <article key={s.titulo} className="comercial-servico">
            <div className="comercial-servico__icon" aria-hidden="true">
              {s.icon}
            </div>
            <h3 className="comercial-servico__titulo">{s.titulo}</h3>
            <p className="comercial-servico__desc">{s.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
