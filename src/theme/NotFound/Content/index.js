import React from 'react';
import clsx from 'clsx';
import LinksGrid from '@site/src/components/shared/LinksGrid';

// ============================================================
// Swizzle de @theme/NotFound/Content — página 404
// ------------------------------------------------------------
// A do tema é um texto seco em inglês traduzido, sem caminho de
// volta. E o 404 aqui é uma página que vai ser vista: os links
// do site circulam por WhatsApp e e-mail, onde chegam cortados.
//
// Por isso o foco não é o erro, é a saída: dizer em uma linha o
// que aconteceu e oferecer os quatro destinos que cobrem quase
// toda intenção de quem chegou aqui. A busca do topo continua
// disponível (Ctrl + K).
// ============================================================
const DESTINOS = [
  {
    icon: 'home',
    titulo: 'Página Inicial',
    desc: 'Todas as edições das Atualizações ZEROUM, da mais recente à primeira.',
    href: '/',
  },
  {
    icon: 'book',
    titulo: 'Manual do VendaAI',
    desc: 'Como usar cada área da plataforma, tela por tela, do login ao pedido.',
    href: '/manual/sobreovendaai',
  },
  {
    icon: 'support',
    titulo: 'Suporte e dúvidas',
    desc: 'Canais de atendimento para dúvidas de uso e habilitação de melhorias.',
    href: '/fale-conosco/duvidas',
  },
  {
    icon: 'briefcase',
    titulo: 'Comercial',
    desc: 'Contratação de recursos modulados, pacotes e propostas sob medida.',
    href: '/fale-conosco/comercial',
  },
];

export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="pagina-404">
        <p className="pagina-404__codigo">Erro 404</p>
        <h1 className="pagina-404__titulo">Esta página não existe</h1>
        <p className="pagina-404__lead">
          O endereço pode ter mudado de lugar, ou o link chegou até você cortado pelo
          caminho. Use a busca no topo da página ou siga por um dos atalhos abaixo.
        </p>
      </div>

      <LinksGrid items={DESTINOS} />
    </main>
  );
}
