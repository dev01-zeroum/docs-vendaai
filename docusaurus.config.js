// docusaurus.config.js
module.exports = {
  title: 'Boletim VendaAI',
  tagline: 'Documentação oficial',
  favicon: 'img/favicon.ico',

  organizationName: 'ThiagoOthero',
  projectName: 'vendaai-docs',
  url: 'https://docs.vendaai.com.br',
  baseUrl: '/',

  customFields: {
    customDomain: 'docs.vendaai.com.br',
  },

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
 
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
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'Logo VendaAI',
        src: 'img/logo.svg',
        srcDark: 'img/logo_branco.svg',
        width: 130,
      //height: 39,
      // height: undefined, // deixa automático
      },
      items: [
        //{
        //  type: 'doc',
        //  docId: 'index',
        //  position: 'left',
        //  label: 'Página Inicial',
        //},
        {
          href: 'https://vendaai.com.br',
          label: 'Site Oficial',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} ZeroUm Software House, Inc.`,
    },
  },
};
