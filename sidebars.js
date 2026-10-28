const manualTecnicoTabs = require('./src/manualTecnicoTabs');

module.exports = {
  // Menu lateral próprio do Manual Técnico — aparece apenas dentro do
  // manual (acesso por link) e não interfere no menu principal do site.
  manualTecnico: [
    {type: 'doc', id: 'manual-tecnico/00inicio', label: 'Página Inicial'},
    {
      type: 'category',
      label: 'Parâmetros',
      collapsed: false,
      items: manualTecnicoTabs.map((tab) => ({
        type: 'doc',
        id: tab.id,
        label: tab.titulo,
      })),
    },
  ],

  docs: [
    {
      type: 'doc',
      id: 'index',
      label: 'Página Inicial',
      // `key` desambigua a chave de tradução: existe outra "Página
      // Inicial" (a do Manual). Sem isso o write-translations falha.
      key: 'home-docs',
    },
    {
      type: 'category',
      label: 'Atualizações',
      collapsed: false,
      items: [
        // A edição vigente leva a etiqueta "atual" no menu (estilo em
        // custom.css). Ao publicar uma edição nova, mova a className para
        // ela — é o mesmo cuidado que o `novo: true` do EdicoesGrid.jsx.
        {type: 'doc', id: 'boletim/atualizacoes-01-2025', label: 'Atualizações - Jan/25'},
        {type: 'doc', id: 'boletim/atualizacoes-06-2025', label: 'Atualizações - Jun/25'},
        {type: 'doc', id: 'boletim/atualizacoes-01-2026', label: 'Atualizações - Jan/26'},
        {type: 'doc', id: 'boletim/atualizacoes-06-2026', label: 'Atualizações - Jun/26'},
        {type: 'doc', id: 'boletim/atualizacoes-07-2026', label: 'Atualizações - Jul/26'},
        {
          type: 'doc',
          id: 'boletim/atualizacoes-08-2026',
          label: 'Atualizações - Ago/26',
          className: 'sidebar-edicao-atual',
        },
      ],
    },
    {
      type: 'category',
      label: 'Fale Conosco',
      collapsed: false,
      items: [
        {type: 'doc', id: 'fale-conosco/duvidas', label: 'Suporte e Dúvidas de Uso'},
        {type: 'doc', id: 'fale-conosco/sugestoes', label: 'Sugestões'},
        {type: 'doc', id: 'fale-conosco/comercial', label: 'Comercial'},
      ],
    },
    {
      type: 'category',
      label: 'Manual',
      collapsed: false,
      items: [
        {type: 'doc', id: 'manual/sobreovendaai', label: 'Sobre o VendaAI'},
        {type: 'doc', id: 'manual/acessandovendaai', label: 'Acessando o VendaAI'},
        {
          type: 'doc',
          id: 'manual/paginainicial',
          label: 'Página Inicial',
          key: 'home-manual',
        },
        {type: 'doc', id: 'manual/dashboard', label: 'Dashboard'},
        {type: 'doc', id: 'manual/negocios', label: 'Negócios (CRM)'},
        {type: 'doc', id: 'manual/agenda', label: 'Agenda'},
        {type: 'doc', id: 'manual/catalogo', label: 'Catálogo'},
        {type: 'doc', id: 'manual/clientes', label: 'Clientes'},
        {type: 'doc', id: 'manual/vendas', label: 'Vendas'},
        {type: 'doc', id: 'manual/analisepedidos', label: 'Análise de Pedidos'},
        {type: 'doc', id: 'manual/consultas', label: 'Consultas'},
        {type: 'doc', id: 'manual/registros', label: 'Registros'},
      ],
    },
    {
      type: 'category',
      label: 'Manual Dosan',
      collapsed: false,
      items: [
        {type: 'doc', id: 'manual-dosan/00inicio', label: 'Sobre o Dosan'},
        {type: 'doc', id: 'manual-dosan/01acesso', label: 'Acessando o Dosan'},
        {
          type: 'doc',
          id: 'manual-dosan/02paginainicial',
          label: 'Página Inicial',
          key: 'home-manual-dosan',
        },
        {
          type: 'doc',
          id: 'manual-dosan/03dashboard',
          label: 'Dashboard',
          key: 'dashboard-manual-dosan',
        },
        {
          type: 'doc',
          id: 'manual-dosan/04rotas',
          label: 'Rotas',
          key: 'routes-manual-dosan',
        },
        {type: 'doc', id: 'manual-dosan/05rastreio', label: 'Rastreio'},
        {
          type: 'doc',
          id: 'manual-dosan/06distribuicao',
          label: 'Distribuição',
          key: 'distribution-manual-dosan',
        },
        {type: 'doc', id: 'manual-dosan/07entregas', label: 'Entregas'},
        {type: 'doc', id: 'manual-dosan/08cargas', label: 'Cargas'},
        {type: 'doc', id: 'manual-dosan/09contratantes', label: 'Contratantes'},
        {
          type: 'doc',
          id: 'manual-dosan/10aplicativo-movel',
          label: 'Uso em dispositivos móveis',
        },
      ],
    },
  ],

  // Menu lateral próprio do Manual Técnico do Dosan — mesmo esquema do
  // Manual Técnico do VendaAI: acesso por link, fora do menu principal.
  manualTecnicoDosan: [
    {
      type: 'doc',
      id: 'manual-tecnico-dosan/00inicio',
      label: 'Página Inicial',
      key: 'home-manual-tecnico-dosan',
    },
    {
      type: 'category',
      label: 'Fluxos',
      key: 'fluxos-manual-tecnico-dosan',
      collapsed: false,
      items: [
        {type: 'doc', id: 'manual-tecnico-dosan/01carga', label: 'Carga'},
        {type: 'doc', id: 'manual-tecnico-dosan/02entrega', label: 'Entrega'},
        {
          type: 'doc',
          id: 'manual-tecnico-dosan/03distribuicao',
          label: 'Distribuição',
          key: 'distribution-manual-tecnico-dosan',
        },
        {
          type: 'doc',
          id: 'manual-tecnico-dosan/04rotas',
          label: 'Rotas',
          key: 'routes-manual-tecnico-dosan',
        },
        {type: 'doc', id: 'manual-tecnico-dosan/05retira', label: 'Retira'},
        {
          type: 'doc',
          id: 'manual-tecnico-dosan/09dashboard',
          label: 'Dashboard',
          key: 'dashboard-manual-tecnico-dosan',
        },
        {
          type: 'doc',
          id: 'manual-tecnico-dosan/06status-integracoes',
          label: 'Status e integrações',
        },
        {
          type: 'doc',
          id: 'manual-tecnico-dosan/07registros',
          label: 'Registros',
          key: 'records-manual-tecnico-dosan',
        },
        {
          type: 'doc',
          id: 'manual-tecnico-dosan/08administracao',
          label: 'Administração',
        },
      ],
    },
  ],
};
