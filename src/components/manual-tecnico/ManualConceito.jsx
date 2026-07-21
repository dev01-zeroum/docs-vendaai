import React from 'react';

// Blocos conceituais da Página Inicial do Manual Técnico:
//   1) "O que são os parâmetros" — 2 cards (estilo .landing-tipo);
//   2) "Tipos de parâmetro" — 4 cards (estilo .porque-card).
// Reaproveita as classes já existentes no custom.css.
const TIPOS = [
  {
    icon: '🔘',
    titulo: 'Liga / desliga',
    desc: 'Ativa ou desativa um recurso. Ex.: “Cálculo de impostos”.',
  },
  {
    icon: '🔢',
    titulo: 'Valor',
    desc: 'Um número ou texto livre. Ex.: prazo mínimo de entrega.',
  },
  {
    icon: '📋',
    titulo: 'Lista',
    desc: 'Uma opção entre valores predefinidos. Ex.: tema padrão.',
  },
  {
    icon: '☑️',
    titulo: 'Múltipla escolha',
    desc: 'Vários itens ao mesmo tempo. Ex.: campos obrigatórios.',
  },
];

export default function ManualConceito() {
  return (
    <>
      <section className="page-section">
        <header className="page-section__header">
          <p className="page-section__eyebrow">Sobre</p>
          <h2 className="page-section__title">O que são os parâmetros</h2>
          <p className="page-section__lead">
            Configurações que definem o comportamento do VendaAI para cada empresa —
            sem depender de alterações no código.
          </p>
        </header>

        <div className="landing-tipos">
          <article className="landing-tipo landing-tipo--modulado">
            <div className="landing-tipo__icon" aria-hidden="true">🎛️</div>
            <h3 className="landing-tipo__title">Controlam o comportamento</h3>
            <p className="landing-tipo__desc">
              Ligam, desligam ou ajustam recursos: calcular impostos, exigir campos,
              bloquear pedidos acima do limite de crédito, conectar serviços externos…
            </p>
            <ul className="landing-tipo__list">
              <li>Valem <strong>por empresa</strong></li>
              <li>Entram em vigor ao salvar</li>
              <li>Sem nova versão do sistema</li>
            </ul>
          </article>

          <article className="landing-tipo landing-tipo--padrao">
            <div className="landing-tipo__icon" aria-hidden="true">🗂️</div>
            <h3 className="landing-tipo__title">Organizados por abas</h3>
            <p className="landing-tipo__desc">
              Cada aba é uma área do sistema (Pedido, Cliente, Estoque…). Dentro dela,
              seções agrupam os parâmetros por contexto.
            </p>
            <ul className="landing-tipo__list">
              <li><strong>16 abas</strong> de parâmetros</li>
              <li>Divididas em seções</li>
              <li>Uma página por aba</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="page-section">
        <header className="page-section__header">
          <p className="page-section__eyebrow">Formatos</p>
          <h2 className="page-section__title">Tipos de parâmetro</h2>
          <p className="page-section__lead">
            Independentemente da aba, cada parâmetro assume uma destas formas.
          </p>
        </header>

        <div className="porque-grid">
          {TIPOS.map((t) => (
            <div key={t.titulo} className="porque-card">
              <div className="porque-card__icon" aria-hidden="true">{t.icon}</div>
              <p className="porque-card__titulo">{t.titulo}</p>
              <p className="porque-card__desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
