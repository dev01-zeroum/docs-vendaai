import React from 'react';
import clsx from 'clsx';

// ============================================================
// Swizzle de @theme/MDXComponents/Img
// ------------------------------------------------------------
// Toda imagem escrita em markdown vira uma <figure> com legenda
// visível. O texto da legenda é o próprio `alt` — que já está
// escrito, descritivo e revisado em todas as imagens do site
// (o markdownlint garante que nenhuma fique sem, regra MD045).
//
// Por que legenda: quem escaneia a página sem ler o texto corrido
// precisa saber o que o print mostra. O <TelaParametro> do Manual
// Técnico já fazia isso com figcaption; aqui o mesmo padrão passa
// a valer para o Manual e os boletins.
//
// O `loading`/`decoding` repetem o que o tema já fazia — não são
// novidade nossa, e sumiriam se este arquivo não os mantivesse.
// ============================================================
export default function MDXImg({className, ...props}) {
  const legenda = typeof props.alt === 'string' ? props.alt.trim() : '';

  const imagem = (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      decoding="async"
      loading="lazy"
      {...props}
      className={clsx(className, 'figura-conteudo__img')}
    />
  );

  // Sem alt não há o que legendar — a imagem sai solta, como antes.
  if (!legenda) return imagem;

  return (
    <figure className="figura-conteudo">
      {imagem}
      {/* aria-hidden: o leitor de tela já anuncia este mesmo texto pelo
          alt da imagem. Sem isso, ele leria a descrição duas vezes. */}
      <figcaption className="figura-conteudo__legenda" aria-hidden="true">
        {legenda}
      </figcaption>
    </figure>
  );
}
