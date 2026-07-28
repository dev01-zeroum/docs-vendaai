// docusaurus.config.js
module.exports = {
  title: 'Atualizações ZEROUM',
  tagline: 'Documentação oficial',
  favicon: '/favicon.ico',

  organizationName: 'dev01-zeroum',
  // Precisa bater com o nome atual do repositório: é daqui que o
  // `docusaurus deploy` monta a URL de push do gh-pages.
  projectName: 'docs-vendaai',
  url: 'https://docs.vendaai.com.br',
  baseUrl: '/',

  customFields: {
    customDomain: 'docs.vendaai.com.br',
  },

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',

  markdown: {
    hooks: {
      // No v3 esta opção saiu da raiz da config para cá.
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
 
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/', // deixa docs na raiz
          sidebarPath: require.resolve('./sidebars.js'),
        },
        // O site não tem blog; sem isso o v3 publica uma rota /blog vazia.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          // Manual técnico é acessível apenas por link: fora do sitemap
          // (os próprios arquivos também enviam <meta robots noindex>).
          ignorePatterns: ['/manual-tecnico', '/manual-tecnico/', '/manual-tecnico/**'],
        },
      },
    ],
  ],

  clientModules: [require.resolve('./src/clientModules/imageZoom.js')],

  // Busca local: indexa em tempo de build e roda no navegador, sem
  // depender de serviço externo (Algolia e afins).
  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['pt', 'en'],
        docsRouteBasePath: '/', // docs estão na raiz
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        // Manual Técnico é acesso por link (tem noindex e fica fora do
        // sitemap). Pela mesma razão, fora da busca pública.
        ignoreFiles: [/^\/manual-tecnico/],
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 60,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    docs: {
      sidebar: {
        // As seções do menu ficam sempre à vista (visual editorial do
        // custom.css). Recolher uma não fecha as outras.
        autoCollapseCategories: false,
        hideable: true,
      },
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Logo VendaAI',
        src: 'img/logo.svg',
        srcDark: 'img/logo_branco.svg',
        width: 130,
      },
      items: [
        {
          href: 'https://vendaai.com.br',
          label: 'Site Oficial',
          position: 'right',
          className: 'navbar-cta',
          'aria-label': 'Site oficial VendaAI (abre em nova aba)',
        },
        // Caixa de busca no canto superior direito.
        { type: 'search', position: 'right' },
      ],
    },
    // Rodapé é customizado em src/theme/Footer/index.js
    // (colunas, ícones e links são definidos lá).
  },
};
