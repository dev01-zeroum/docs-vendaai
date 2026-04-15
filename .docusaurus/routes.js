import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'bc9'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'b09'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/boletim-01-2025',
        component: ComponentCreator('/boletim-01-2025', '3cb'),
        exact: true
      },
      {
        path: '/boletim-06-2025',
        component: ComponentCreator('/boletim-06-2025', '690'),
        exact: true
      },
      {
        path: '/boletim/boletim-01-2025',
        component: ComponentCreator('/boletim/boletim-01-2025', 'a67'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/boletim/boletim-06-2025',
        component: ComponentCreator('/boletim/boletim-06-2025', '022'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/fale-conosco/comercial',
        component: ComponentCreator('/fale-conosco/comercial', 'dff'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/fale-conosco/sugestoes',
        component: ComponentCreator('/fale-conosco/sugestoes', '28f'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/fale-conosco/suporte-duvida-uso',
        component: ComponentCreator('/fale-conosco/suporte-duvida-uso', 'ee8'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/faq/perguntas-respostas',
        component: ComponentCreator('/faq/perguntas-respostas', '0bb'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/identidade/identidade-vendaai',
        component: ComponentCreator('/identidade/identidade-vendaai', '538'),
        exact: true
      },
      {
        path: '/manual/acesso',
        component: ComponentCreator('/manual/acesso', 'ea5'),
        exact: true
      },
      {
        path: '/manual/crm',
        component: ComponentCreator('/manual/crm', '30e'),
        exact: true
      },
      {
        path: '/manual/em-desenvolvimento',
        component: ComponentCreator('/manual/em-desenvolvimento', '4f4'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/manual/expedicao',
        component: ComponentCreator('/manual/expedicao', '061'),
        exact: true
      },
      {
        path: '/manual/introducao',
        component: ComponentCreator('/manual/introducao', '357'),
        exact: true
      },
      {
        path: '/manual/pedidos',
        component: ComponentCreator('/manual/pedidos', '011'),
        exact: true
      },
      {
        path: '/manual/telas',
        component: ComponentCreator('/manual/telas', 'e82'),
        exact: true
      },
      {
        path: '/sugestoes',
        component: ComponentCreator('/sugestoes', '5de'),
        exact: true
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
