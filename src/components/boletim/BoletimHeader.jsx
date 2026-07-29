import React from 'react';
import DocHeader from '@site/src/components/shared/DocHeader';

// Cabeçalho das edições do Boletim. O visual vem do DocHeader —
// o mesmo usado pelas páginas do Manual.
export default function BoletimHeader({dataPublicacao, children}) {
  return (
    <DocHeader
      titulo="Atualizações ZEROUM"
      subtitulo={dataPublicacao && `Publicado em ${dataPublicacao}`}
      label="Objetivo desta edição"
    >
      {children}
    </DocHeader>
  );
}
