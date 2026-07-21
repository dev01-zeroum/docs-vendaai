// docusaurus.config.js
module.exports = {
  title: 'Atualizações ZEROUM',
  tagline: 'Documentação oficial',
  favicon: '/favicon.ico',

  organizationName: 'dev01-zeroum',
  projectName: 'docs-boletim',
  url: 'https://docs.vendaai.com.br',
  baseUrl: '/',

  customFields: {
    customDomain: 'docs.vendaai.com.br',
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
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
      ],
    },
    // Rodapé é customizado em src/theme/Footer/index.js
    // (colunas, ícones e links são definidos lá).
  },
};
