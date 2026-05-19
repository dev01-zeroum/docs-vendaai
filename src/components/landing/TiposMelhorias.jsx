import React from 'react';

export default function TiposMelhorias() {
  return (
    <section className="page-section">
      <header className="page-section__header">
        <p className="page-section__eyebrow">Como funcionam as melhorias</p>
        <h2 className="page-section__title">Dois tipos, propósitos diferentes</h2>
        <p className="page-section__lead">
          Cada novidade entregue no VendaAI se enquadra em uma destas categorias.
          A diferença está em <em>como</em> habilitar.
        </p>
      </header>

      <div className="landing-tipos">
        <article className="landing-tipo landing-tipo--padrao">
          <div className="landing-tipo__icon" aria-hidden="true">✓</div>
          <h3 className="landing-tipo__title">Melhoria de Produto Padrão</h3>
          <p className="landing-tipo__desc">
            Funcionalidades <strong>já prontas</strong> que qualquer cliente pode
            ativar sem custo adicional.
          </p>
          <ul className="landing-tipo__list">
            <li>Habilitação <strong>gratuita</strong></li>
            <li>Solicitação via equipe de suporte</li>
            <li>Disponível imediatamente</li>
          </ul>
        </article>

        <article className="landing-tipo landing-tipo--modulado">
          <div className="landing-tipo__icon" aria-hidden="true">⚙</div>
          <h3 className="landing-tipo__title">Novo Recurso Modulado</h3>
          <p className="landing-tipo__desc">
            Recursos avançados que demandam <strong>desenvolvimento dedicado</strong>{' '}
            e habilitação pela equipe comercial.
          </p>
          <ul className="landing-tipo__list">
            <li>Customização sob demanda</li>
            <li>Contratação via equipe comercial</li>
            <li>Cronograma combinado</li>
          </ul>
        </article>
      </div>
    </section>
  );
}
