import mediumZoom from 'medium-zoom';

// ============================================================
// Zoom nas imagens de conteúdo
// ------------------------------------------------------------
// Os prints do manual e dos boletins são telas de sistema densas
// (tabelas, campos pequenos) que ficam ilegíveis na largura da
// coluna. Clicar abre a imagem em tamanho cheio.
//
// Usa medium-zoom direto em vez de um plugin de Docusaurus para
// não amarrar o site a mais uma dependência que precise
// acompanhar as versões do framework.
//
// Registrado em docusaurus.config.js → clientModules.
// Para excluir uma imagem, marque-a com data-nozoom.
// ============================================================

const SELETOR = '.theme-doc-markdown img:not([data-nozoom])';

let zoom;

// O overlay acompanha o tema claro/escuro.
function corDeFundo() {
  return document.documentElement.dataset.theme === 'dark'
    ? 'rgba(9, 14, 24, 0.92)'
    : 'rgba(248, 250, 252, 0.96)';
}

function aplicar() {
  const imagens = document.querySelectorAll(SELETOR);

  if (!zoom) {
    zoom = mediumZoom({margin: 28, background: corDeFundo()});
  }

  // Solta as imagens da rota anterior antes de pegar as novas.
  zoom.detach();
  zoom.update({background: corDeFundo()});

  if (imagens.length) {
    zoom.attach(imagens);
  }
}

export function onRouteDidUpdate() {
  if (typeof window === 'undefined') return;
  // O DOM da nova rota só existe depois do próximo paint.
  window.requestAnimationFrame(aplicar);
}
