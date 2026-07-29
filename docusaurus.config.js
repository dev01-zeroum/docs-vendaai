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

  // Ícone e nome usados quando alguém salva o site na tela inicial do
  // celular — o manual é consultado do telefone, e sem isto o atalho
  // fica sem ícone. O manifest declara `display: browser` de propósito:
  // em modo standalone o site abriria sem barra do navegador, e quem
  // clicasse num link externo (site oficial, chamado) ficaria sem botão
  // de voltar.
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
    },
    {
      tagName: 'link',
      attributes: {rel: 'manifest', href: '/manifest.webmanifest'},
    },
    {
      tagName: 'meta',
      attributes: {name: 'theme-color', content: '#1b1b1d'},
    },
  ],

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
          ignorePatterns: [
            '/manual-tecnico',
            '/manual-tecnico/',
            '/manual-tecnico/**',
            '/search', // página de resultados da busca: não indexar
          ],
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
        // Lista curta e trecho curto: sugestão, não página de resultados.
        searchResultLimits: 6,
        searchResultContextMaxLength: 35,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
      },
    ],
  ],

  themeConfig: {
    // Card exibido quando o link do site é colado no WhatsApp, Teams,
    // e-mail ou redes. Sem isto, o link aparece "pelado".
    // Para trocar a arte: static/img/og-cover.png, 1200x630.
    image: 'img/og-cover.png',

    metadata: [
      {
        name: 'description',
        content:
          'Documentação oficial do VendaAI: manual do sistema, atualizações de produto e canais de suporte.',
      },
      // O Docusaurus já emite og:image/og:title/twitter:card. Aqui entra
      // só o que ele não deduz sozinho.
      {property: 'og:site_name', content: 'Atualizações ZEROUM'},
      {property: 'og:locale', content: 'pt_BR'},
    ],

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
        {type: 'search', position: 'right'},
      ],
    },
    // Rodapé é customizado em src/theme/Footer/index.js
    // (colunas, ícones e links são definidos lá).
  },
};
