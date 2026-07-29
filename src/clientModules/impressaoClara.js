// ============================================================
// Impressão sempre no tema claro
// ------------------------------------------------------------
// Papel é branco. Tentar "consertar" o tema escuro na folha de
// impressão é enxugar gelo: são mais de vinte regras
// [data-theme='dark'] espalhadas pelo CSS (sombras, gradientes,
// bordas em rgba branco, o filtro de brilho dos prints), e basta
// uma escapar para sair uma moldura preta no papel.
//
// Aqui a raiz é atacada: antes de imprimir, o atributo data-theme
// do <html> vira 'light' — todas aquelas regras deixam de casar de
// uma vez — e depois volta ao que era. Só o atributo do DOM é
// tocado; a preferência salva do usuário não muda, então ao
// terminar a impressão a tela continua escura como estava.
//
// Registrado em docusaurus.config.js → clientModules.
// ============================================================

const ATRIBUTO = 'data-theme';

let temaAnterior = null;

function paraClaro() {
  const html = document.documentElement;
  // Já estamos no meio de uma impressão: não sobrescreve o valor salvo.
  if (temaAnterior !== null) return;

  temaAnterior = html.getAttribute(ATRIBUTO);
  if (temaAnterior === 'dark') {
    html.setAttribute(ATRIBUTO, 'light');
  }
}

function restaurar() {
  if (temaAnterior === null) return;

  if (temaAnterior === 'dark') {
    document.documentElement.setAttribute(ATRIBUTO, temaAnterior);
  }
  temaAnterior = null;
}

if (typeof window !== 'undefined') {
  // Cobre tanto o botão de imprimir quanto o Ctrl+P do navegador.
  window.addEventListener('beforeprint', paraClaro);
  window.addEventListener('afterprint', restaurar);

  // Safari não dispara before/afterprint de forma confiável; o
  // matchMedia('print') cobre esse caso.
  const midia = window.matchMedia('print');
  if (midia.addEventListener) {
    midia.addEventListener('change', (evento) => {
      if (evento.matches) paraClaro();
      else restaurar();
    });
  }
}

export function onRouteDidUpdate() {
  // Nada a fazer por rota: os listeners são globais e vivem enquanto
  // a aba existir. A exportação mantém o módulo no formato que o
  // Docusaurus espera de um clientModule.
}
