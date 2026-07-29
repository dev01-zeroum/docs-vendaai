import React from 'react';
import {useLocation} from '@docusaurus/router';
import tabs from '@site/src/manualTecnicoTabs';
import BotaoImprimir from '@site/src/components/shared/BotaoImprimir';

function normalizar(path) {
  return path.replace(/\/+$/, '') || '/';
}

// Cabeçalho das páginas de aba do Manual Técnico, no estilo da landing:
// ícone + eyebrow "Parâmetros do sistema" + título. Detecta a aba atual
// pela URL (manualTecnicoTabs.js). Usado com `hide_title: true` no doc,
// para substituir o título automático do Docusaurus.
export default function ManualTabHeader() {
  const {pathname} = useLocation();
  const atual = normalizar(pathname);
  const tab = tabs.find((t) => normalizar(t.slug) === atual);
  if (!tab) return null;

  return (
    <header className="manual-tab-header">
      <p className="manual-tab-header__eyebrow">Parâmetros do sistema</p>
      <div className="doc-header__topo">
        <h1 className="manual-tab-header__title">{tab.titulo}</h1>
        <BotaoImprimir />
      </div>
    </header>
  );
}
