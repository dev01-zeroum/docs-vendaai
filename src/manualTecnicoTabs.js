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

/** @type {{id: string, slug: string, titulo: string, icon: string, desc: string}[]} */
const tabs = [
  { id: 'manual-tecnico/01geral',       slug: '/manual-tecnico/geral',       titulo: 'Geral',       icon: '⚙️', desc: 'Logs de erro e tema padrão dos clientes.' },
  { id: 'manual-tecnico/02pedido',      slug: '/manual-tecnico/pedido',      titulo: 'Pedido',      icon: '🧾', desc: 'Preços, impostos, frete, bloqueios, descontos, margem e comissão.' },
  { id: 'manual-tecnico/03cliente',     slug: '/manual-tecnico/cliente',     titulo: 'Cliente',     icon: '👤', desc: 'Cadastro, permissões e compartilhamento de clientes.' },
  { id: 'manual-tecnico/04prospect',    slug: '/manual-tecnico/prospect',    titulo: 'Prospect',    icon: '🎯', desc: 'Campos e regras do cadastro de prospects.' },
  { id: 'manual-tecnico/05catalogo',    slug: '/manual-tecnico/catalogo',    titulo: 'Catálogo',    icon: '📚', desc: 'Exibição, filtros e ordenação dos produtos no catálogo.' },
  { id: 'manual-tecnico/06produto',     slug: '/manual-tecnico/produto',     titulo: 'Produto',     icon: '📦', desc: 'Campos visíveis e obrigatórios no cadastro de produtos.' },
  { id: 'manual-tecnico/07estoque',     slug: '/manual-tecnico/estoque',     titulo: 'Estoque',     icon: '🏬', desc: 'Disponibilidade, armazéns e exibição do estoque.' },
  { id: 'manual-tecnico/08consultas',   slug: '/manual-tecnico/consultas',   titulo: 'Consultas',   icon: '🔍', desc: 'Colunas exibidas nas principais listagens.' },
  { id: 'manual-tecnico/09gateway',     slug: '/manual-tecnico/gateway',     titulo: 'Gateway',     icon: '💳', desc: 'Meios de pagamento: Cielo, Pix, cartão e parcelamento.' },
  { id: 'manual-tecnico/10envios',      slug: '/manual-tecnico/envios',      titulo: 'Envios',      icon: '🚚', desc: 'Frete, transportadoras e cotação de entrega.' },
  { id: 'manual-tecnico/11integracao',  slug: '/manual-tecnico/integracao',  titulo: 'Integração',  icon: '🔌', desc: 'Serviços externos: IA, consulta de crédito e APIs.' },
  { id: 'manual-tecnico/12marketplace', slug: '/manual-tecnico/marketplace', titulo: 'Marketplace', icon: '🛒', desc: 'Importação e processamento de pedidos de marketplaces.' },
  { id: 'manual-tecnico/13notificacao', slug: '/manual-tecnico/notificacao', titulo: 'Notificação', icon: '🔔', desc: 'SMS, WhatsApp e Discord para avisos do sistema.' },
  { id: 'manual-tecnico/14rest',        slug: '/manual-tecnico/rest',        titulo: 'REST',        icon: '🌐', desc: 'Autenticação e endpoints da integração REST.' },
  { id: 'manual-tecnico/15titulo',      slug: '/manual-tecnico/titulo',      titulo: 'Título',      icon: '💰', desc: 'Cobrança de títulos financeiros: encargos e vencimentos.' },
  { id: 'manual-tecnico/16crm',         slug: '/manual-tecnico/crm',         titulo: 'CRM',         icon: '🤝', desc: 'Negócios, funil padrão e automações do CRM.' },
  { id: 'manual-tecnico/17routing',     slug: '/manual-tecnico/routing',     titulo: 'Routing',     icon: '🗺️', desc: 'Geocodificação, otimização de rotas e pontuação das visitas.' },
];

module.exports = tabs;
