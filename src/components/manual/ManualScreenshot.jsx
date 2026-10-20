import React from 'react';

const widths = {
  compact: '700px',
  desktop: '880px',
  document: '920px',
  mobile: '360px',
};

export default function ManualScreenshot({alt, src, variant = 'desktop'}) {
  const maxWidth = widths[variant] ?? widths.desktop;

  return (
    <figure
      className="figura-conteudo"
      style={{maxWidth, marginLeft: 'auto', marginRight: 'auto'}}
    >
      <img
        src={src}
        alt={alt}
        style={{width: '100%', height: 'auto', objectFit: 'contain'}}
      />
      <figcaption className="figura-conteudo__legenda" aria-hidden="true">
        {alt}
      </figcaption>
    </figure>
  );
}
