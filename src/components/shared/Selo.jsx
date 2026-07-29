import React from 'react';

// ============================================================
// Selo — etiqueta curta para classificar um item dentro do texto
// ------------------------------------------------------------
// Nasceu para os boletins: cada edição separa "Melhorias de Produto
// Padrão" de "Novos Recursos Modulados" em seções, mas a página é
// longa — ao chegar no item 4 já não se vê o título da seção. O selo
// repete a classificação onde a dúvida aparece.
//
// No Manual, onde tudo é padrão, o selo não serve para isso: use-o
// só para marcar uma tela que dependa de recurso modulado, ou seja,
// quando a informação for exceção. Selo em tudo não informa nada.
//
// Uso:
//   import Selo from '@site/src/components/shared/Selo';
//   <Selo tipo="padrao" />
//   <Selo tipo="modulado" />
//   <Selo tipo="modulado">Sob contratação</Selo>
// ============================================================

const ROTULOS = {
  padrao: 'Padrão',
  modulado: 'Modulado',
};

export default function Selo({tipo = 'padrao', children}) {
  return (
    <span className={`selo selo--${tipo}`}>{children || ROTULOS[tipo] || tipo}</span>
  );
}
