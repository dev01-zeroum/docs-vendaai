import React from 'react';
import BotaoImprimir from '@site/src/components/shared/BotaoImprimir';

// ============================================================
// DocHeader — cabeçalho editorial padrão das páginas de conteúdo
// ------------------------------------------------------------
// Título grande, deck em itálico e um card destacado com o
// contexto da página. É o padrão visual do Boletim, reaproveitado
// pelo Manual para o site inteiro falar a mesma língua.
//
// Use sempre com `hide_title: true` no front matter do .md —
// senão o Docusaurus renderiza um <h1> duplicado.
//
// Consumidores: BoletimHeader.jsx e ManualHeader.jsx.
// ============================================================
export default function DocHeader({titulo, subtitulo, label, children}) {
  return (
    <header className="doc-header">
      <div className="doc-header__topo">
        <h1 className="doc-header__title">{titulo}</h1>
        <BotaoImprimir />
      </div>

      {subtitulo && <p className="doc-header__subtitle">{subtitulo}</p>}

      {children && (
        <div className="doc-header__objetivo">
          {label && <p className="doc-header__objetivo-label">{label}</p>}
          <div className="doc-header__objetivo-text">{children}</div>
        </div>
      )}
    </header>
  );
}
