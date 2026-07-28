// ============================================================
// Manual Técnico — abas da tela "Parâmetros do sistema" do VendaAI
// (projeto ZEROUM.VendaAI, componente system-parameters).
// ------------------------------------------------------------
// Fonte ÚNICA da lista de abas. É consumida por:
//   - sidebars.js          → monta o menu lateral (categoria "Parâmetros");
//   - ManualIndex.jsx      → monta o grid de cartões da Página Inicial.
//
// Cada aba corresponde a um "group" dos parâmetros no backend
// (prefixo da chave antes do ponto: Order.*, Client.*, CRM.* ...).
//
// Para adicionar uma aba: crie o .md em docs/manual-tecnico/ com o
// `slug` correspondente e acrescente uma entrada aqui. O `id` é o
// caminho do arquivo relativo a docs/ (sem .md).
//
// CommonJS de propósito: precisa ser `require()`-ado pelo sidebars.js.
// ============================================================

/**
 * `icon` é o nome de um ícone do set em src/components/shared/Icon.jsx
 * (nunca um emoji — quem renderiza é o <Icon name={tab.icon} />).
 *
 * @type {{id: string, slug: string, titulo: string, icon: string, desc: string}[]}
 */
const tabs = [
  { id: 'manual-tecnico/01geral',       slug: '/manual-tecnico/geral',       titulo: 'Geral',       icon: 'sliders',   desc: 'Logs de erro e tema padrão dos clientes.' },
  { id: 'manual-tecnico/02pedido',      slug: '/manual-tecnico/pedido',      titulo: 'Pedido',      icon: 'file',      desc: 'Preços, impostos, frete, bloqueios, descontos, margem e comissão.' },
  { id: 'manual-tecnico/03cliente',     slug: '/manual-tecnico/cliente',     titulo: 'Cliente',     icon: 'user',      desc: 'Cadastro, permissões e compartilhamento de clientes.' },
  { id: 'manual-tecnico/04prospect',    slug: '/manual-tecnico/prospect',    titulo: 'Prospect',    icon: 'target',    desc: 'Campos e regras do cadastro de prospects.' },
  { id: 'manual-tecnico/05catalogo',    slug: '/manual-tecnico/catalogo',    titulo: 'Catálogo',    icon: 'book',      desc: 'Exibição, filtros e ordenação dos produtos no catálogo.' },
  { id: 'manual-tecnico/06produto',     slug: '/manual-tecnico/produto',     titulo: 'Produto',     icon: 'box',       desc: 'Campos visíveis e obrigatórios no cadastro de produtos.' },
  { id: 'manual-tecnico/07estoque',     slug: '/manual-tecnico/estoque',     titulo: 'Estoque',     icon: 'warehouse', desc: 'Disponibilidade, armazéns e exibição do estoque.' },
  { id: 'manual-tecnico/08consultas',   slug: '/manual-tecnico/consultas',   titulo: 'Consultas',   icon: 'search',    desc: 'Colunas exibidas nas principais listagens.' },
  { id: 'manual-tecnico/09gateway',     slug: '/manual-tecnico/gateway',     titulo: 'Gateway',     icon: 'card',      desc: 'Meios de pagamento: Cielo, Pix, cartão e parcelamento.' },
  { id: 'manual-tecnico/10envios',      slug: '/manual-tecnico/envios',      titulo: 'Envios',      icon: 'truck',     desc: 'Frete, transportadoras e cotação de entrega.' },
  { id: 'manual-tecnico/11integracao',  slug: '/manual-tecnico/integracao',  titulo: 'Integração',  icon: 'link',      desc: 'Serviços externos: IA, consulta de crédito e APIs.' },
  { id: 'manual-tecnico/12marketplace', slug: '/manual-tecnico/marketplace', titulo: 'Marketplace', icon: 'cart',      desc: 'Importação e processamento de pedidos de marketplaces.' },
  { id: 'manual-tecnico/13notificacao', slug: '/manual-tecnico/notificacao', titulo: 'Notificação', icon: 'bell',      desc: 'SMS, WhatsApp e Discord para avisos do sistema.' },
  { id: 'manual-tecnico/14rest',        slug: '/manual-tecnico/rest',        titulo: 'REST',        icon: 'globe',     desc: 'Autenticação e endpoints da integração REST.' },
  { id: 'manual-tecnico/15titulo',      slug: '/manual-tecnico/titulo',      titulo: 'Título',      icon: 'money',     desc: 'Cobrança de títulos financeiros: encargos e vencimentos.' },
  { id: 'manual-tecnico/16crm',         slug: '/manual-tecnico/crm',         titulo: 'CRM',         icon: 'kanban',    desc: 'Negócios, funil padrão e automações do CRM.' },
  { id: 'manual-tecnico/17routing',     slug: '/manual-tecnico/routing',     titulo: 'Routing',     icon: 'map',       desc: 'Geocodificação, otimização de rotas e pontuação das visitas.' },
];

module.exports = tabs;
