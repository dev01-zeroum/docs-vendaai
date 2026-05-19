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
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Suporte',
          items: [
            {
              label: 'Abrir chamado',
              href: 'https://zeroum.zumdesk.com.br',
            },
            {
              label: 'suporte@vendaai.com.br',
              href: 'mailto:suporte@vendaai.com.br',
            },
            {
              label: 'WhatsApp +55 11 97438-4612',
              href: 'https://wa.me/5511974384612',
            },
          ],
        },
        {
          title: 'Comercial',
          items: [
            {
              label: 'Falar com o Comercial',
              to: '/fale-conosco/comercial',
            },
            {
              label: 'contato@itzeroum.com.br',
              href: 'mailto:contato@itzeroum.com.br',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Site oficial',
              href: 'https://vendaai.com.br',
            },
            {
              label: 'Última edição',
              to: '/boletim/atualizacoes-06-2026',
            },
            {
              label: 'Sugestões',
              to: '/fale-conosco/sugestoes',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ZEROUM Software House. Todos os direitos reservados.`,
    },
  },
};
