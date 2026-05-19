import React from 'react';

export default function BoletimHeader({ dataPublicacao, children }) {
  return (
    <header className="boletim-header">
      <h1 className="boletim-header__title">Atualizações ZEROUM</h1>

      {dataPublicacao && (
        <p className="boletim-header__subtitle">
          Publicado em {dataPublicacao}
        </p>
      )}

      <div className="boletim-header__objetivo">
        <p className="boletim-header__objetivo-label">Objetivo desta edição</p>
        <div className="boletim-header__objetivo-text">{children}</div>
      </div>
    </header>
  );
}
