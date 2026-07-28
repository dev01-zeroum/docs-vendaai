import React from 'react';
import DocHeader from '@site/src/components/shared/DocHeader';

// Cabeçalho das páginas do Manual do usuário — mesmo padrão visual
// das edições do Boletim (DocHeader).
//
// Uso no .md (com `hide_title: true` no front matter):
//
//   <ManualHeader titulo="Dashboard" resumo="Deck curto da página.">
//
//   Parágrafo de contexto que abre a página.
//
//   </ManualHeader>
export default function ManualHeader({titulo, resumo, children}) {
  return (
    <DocHeader titulo={titulo} subtitulo={resumo} label="Sobre esta página">
      {children}
    </DocHeader>
  );
}
