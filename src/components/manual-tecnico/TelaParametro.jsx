import React from 'react';

// Figura emoldurada com o print de uma aba da tela "Parâmetros do sistema".
// Enquanto o `src` não é informado, mostra um placeholder elegante — assim
// dá pra visualizar o layout antes dos prints ficarem prontos.
//
// Uso: <TelaParametro src="URL" legenda="Aba Pedido — Parâmetros do sistema" />
export default function TelaParametro({src, alt, legenda}) {
  return (
    <figure className="tela-parametro">
      {src ? (
        <img
          className="tela-parametro__img"
          src={src}
          alt={alt || legenda || 'Tela de Parâmetros do sistema'}
          loading="lazy"
        />
      ) : (
        <div className="tela-parametro__placeholder">
          <span className="tela-parametro__placeholder-icon" aria-hidden="true">🖼️</span>
          <span className="tela-parametro__placeholder-text">Print da aba em breve</span>
        </div>
      )}
      {legenda && <figcaption className="tela-parametro__legenda">{legenda}</figcaption>}
    </figure>
  );
}
