module.exports = {
  docs: [
    {
      type: 'doc',
      id: 'index',
      label: 'Início',
    },
    {
      type: 'category',
      label: 'Boletins',
      items: [
        { type: 'doc', id: 'boletim/boletim-06-2025', label: 'Boletim - Jun/25' },
        { type: 'doc', id: 'boletim/boletim-01-2025', label: 'Boletim - Jan/25' },
      ],
    },
    {
      type: 'category',
      label: 'Fale Conosco',
      items: [
        { type: 'doc', id: 'fale-conosco/comercial', label: 'Comercial' },
        { type: 'doc', id: 'fale-conosco/suporte-duvida-uso', label: 'Suporte e Dúvidas de Uso' },
        { type: 'doc', id: 'fale-conosco/sugestoes', label: 'Sugestões' },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      items: [
        { type: 'doc', id: 'faq/perguntas-respostas', label: 'Perguntas e Respostas' },
      ],
    },
    {
      type: 'category',
      label: 'Manual',
      items: [
        { type: 'doc', id: 'manual/em-desenvolvimento', label: 'Em Desenvolvimento' },
      ],
    },
  ],
};
