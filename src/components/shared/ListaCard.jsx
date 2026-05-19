import React from 'react';

export default function ListaCard({ titulo, items, children }) {
  return (
    <div className="lista-card">
      {titulo && <p className="lista-card__titulo">{titulo}</p>}

      {items ? (
        <ul className="lista-card__items">
          {items.map((item) => (
            <li key={item.titulo} className="lista-card__item">
              <span className="lista-card__marker" aria-hidden="true" />
              <div className="lista-card__content">
                <strong>{item.titulo}</strong>
                {item.desc && <p className="lista-card__desc">{item.desc}</p>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="lista-card__raw">{children}</div>
      )}
    </div>
  );
}
