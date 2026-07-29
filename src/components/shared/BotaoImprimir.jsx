import React from 'react';
import {useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Icon from '@site/src/components/shared/Icon';

// ============================================================
// BotaoImprimir — imprime a página atual (ou salva em PDF)
// ------------------------------------------------------------
// Chama o diálogo de impressão do próprio navegador, onde
// "Salvar como PDF" já é uma opção nativa em todos eles. Sem
// dependência, sem geração de arquivo no servidor e sempre em
// dia com o conteúdo da página.
//
// O que faz o PDF sair apresentável é a folha `@media print`
// do custom.css, que esconde menu, sumário e rodapé e força o
// tema claro. Sem ela o botão só imprimiria a tela como está.
//
// A linha com a URL de origem é impressa junto: uma página de
// manual impressa circula solta, e sem ela ninguém sabe de onde
// veio nem onde achar a versão atualizada.
// ============================================================
export default function BotaoImprimir({rotulo = 'Imprimir'}) {
  const {pathname} = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const url = siteConfig.url + pathname;

  return (
    <>
      {/* aria-label fixo porque o rótulo visível some no celular, para
          o botão não disputar largura com o título. */}
      <button
        type="button"
        className="botao-imprimir"
        onClick={() => window.print()}
        aria-label="Imprimir esta página ou salvar em PDF"
        title="Imprimir esta página ou salvar em PDF"
      >
        <Icon name="printer" size={16} />
        <span className="botao-imprimir__rotulo">{rotulo}</span>
      </button>

      {/* Cabeçalho que existe só no papel: marca à esquerda, endereço de
          origem à direita, fio embaixo. Uma folha de manual circula solta
          pela empresa — sem isso ninguém sabe de onde veio nem onde achar
          a versão atual. aria-hidden porque na tela essa informação já
          está na barra do navegador. */}
      <div className="print-cabecalho" aria-hidden="true">
        <span className="print-cabecalho__marca">Documentação VendaAI</span>
        <span className="print-cabecalho__url">{url}</span>
      </div>
    </>
  );
}
