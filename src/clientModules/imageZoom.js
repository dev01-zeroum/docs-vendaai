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
// No celular o caminho é outro: o medium-zoom amplia só até a
// imagem caber na tela, e uma tela de ERP com 9 colunas continua
// ilegível em 390px. Lá o toque abre a imagem direto, entregando
// o visualizador nativo do sistema — com pinça e arrasto de
// verdade, que é o que permite ler um campo específico.
//
// Registrado em docusaurus.config.js → clientModules.
// Para excluir uma imagem, marque-a com data-nozoom.
// ============================================================

const SELETOR = '.theme-doc-markdown img:not([data-nozoom])';

// Mesmo ponto de corte do Docusaurus para o layout mobile.
const TELA_PEQUENA = '(max-width: 996px)';

let zoom;
let comClique = [];

// O overlay acompanha o tema claro/escuro.
function corDeFundo() {
  return document.documentElement.dataset.theme === 'dark'
    ? 'rgba(18, 18, 20, 0.94)'
    : 'rgba(248, 250, 252, 0.96)';
}

function abrirEmNovaAba(evento) {
  evento.preventDefault();
  window.open(evento.currentTarget.src, '_blank', 'noopener');
}

function soltarCliques() {
  comClique.forEach((img) => img.removeEventListener('click', abrirEmNovaAba));
  comClique = [];
}

function aplicar() {
  const imagens = document.querySelectorAll(SELETOR);

  // Solta o que ficou da rota (ou do tamanho de tela) anterior.
  soltarCliques();
  if (zoom) zoom.detach();

  if (!imagens.length) return;

  if (window.matchMedia(TELA_PEQUENA).matches) {
    imagens.forEach((img) => {
      img.addEventListener('click', abrirEmNovaAba);
      comClique.push(img);
    });
    return;
  }

  if (!zoom) {
    zoom = mediumZoom({margin: 28, background: corDeFundo()});
  }

  zoom.update({background: corDeFundo()});
  zoom.attach(imagens);
}

export function onRouteDidUpdate() {
  if (typeof window === 'undefined') return;
  // O DOM da nova rota só existe depois do próximo paint.
  window.requestAnimationFrame(aplicar);
}

// Girar o celular ou redimensionar a janela troca o comportamento sem
// mudar de rota — sem isto, a página continuaria com o modo antigo.
if (typeof window !== 'undefined') {
  window.matchMedia(TELA_PEQUENA).addEventListener('change', aplicar);
}
