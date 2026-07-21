---
title: 'REST'
slug: /manual-tecnico/rest
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **REST** reúne as configurações utilizadas para integração do **VendaAI** com serviços REST, permitindo configurar autenticação, endpoints e parâmetros necessários para comunicação com sistemas externos.

## 1 - REST API

A seção **REST API** concentra as configurações gerais utilizadas para autenticação e comunicação com os serviços REST do sistema.

<TelaParametro src="https://i.imgur.com/WKVut17.png" alt="REST - REST API" legenda="Aba REST na tela de Parâmetros do sistema" />

<ListaCard>

- **Usar TenantId no envio** – Inclui o identificador da empresa (TenantId) nas requisições enviadas ao serviço.
- **Usuário de autenticação** – Usuário utilizado para autenticar as chamadas aos serviços REST.
- **Senha de autenticação** – Senha utilizada na autenticação dos serviços REST.
- **Timeout em segundos** – Tempo máximo, em segundos, de espera pela resposta do serviço.
- **URL para inclusão/edição de Cliente** – Endpoint utilizado para incluir ou editar clientes no sistema externo.
- **URL para liberar pedido de venda** – Endpoint utilizado para liberar um pedido de venda no sistema externo.

</ListaCard>

---

## 2 - REST URL

A seção **REST URL** reúne os endpoints utilizados pelas funcionalidades integradas do **VendaAI**.

<TelaParametro src="https://i.imgur.com/seGDLDC.png" alt="REST - REST URL" legenda="Aba REST na tela de Parâmetros do sistema" />

<ListaCard>

- **URL Base** – Endereço base a partir do qual os demais endpoints são montados.
- **Consulta de Títulos** – Endpoint para consulta de títulos financeiros em aberto.
- **Baixa e Acordo de Títulos** – Endpoint para registrar baixas e acordos de títulos.
- **Consulta de Comissão** – Endpoint para consulta das comissões.
- **Consulta de DANFE e XML** – Endpoint para obtenção da DANFE e do XML da nota.
- **2ª Via de Boleto** – Endpoint para emissão da segunda via de boleto.
- **Consulta de Pedidos ERP** – Endpoint para consulta dos pedidos no ERP.
- **Pedidos em Andamento** – Endpoint para consulta dos pedidos em andamento.
- **Consulta de Poder em Terceiros** – Endpoint para consulta de estoque em poder de terceiros.
- **Inclusão de Documentos** – Endpoint para inclusão de documentos do cliente.
- **Inclusão/Edição de Pedido** – Endpoint para incluir ou editar pedidos de venda.
- **Cálculo de Taxas** – Endpoint para cálculo das taxas do pedido.
- **Excluir Venda** – Endpoint para exclusão de uma venda.
- **Inclusão/Edição de Produto** – Endpoint para incluir ou editar produtos.
- **Cálculo de Rentabilidade** – Endpoint para cálculo da rentabilidade do pedido.
- **Consulta de Datas de Entrega** – Endpoint para consulta das datas de entrega disponíveis.
- **Consulta de Saldo Flex** – Endpoint para consulta do saldo flex do vendedor.
- **Faturamento de Pedido** – Endpoint para faturar um pedido de venda.
- **Top Produtos por Cliente** – Endpoint para buscar os produtos mais comprados por cliente.
- **Compras de um Produto** – Endpoint para consulta do histórico de compras de um produto.
- **Vendas de um Produto** – Endpoint para consulta do histórico de vendas de um produto.
- **Pedidos de Compra de um Produto** – Endpoint para consulta dos pedidos de compra de um produto.
- **Pix QR Code** – Endpoint para obtenção do QR Code de pagamento via Pix.

</ListaCard>

---

## 3 - Downloads

A seção **Downloads** permite configurar os parâmetros utilizados na geração e disponibilização de documentos pelo sistema.

<TelaParametro src="https://i.imgur.com/Zk0g0Fl.png" alt="REST - Downloads" legenda="Aba REST na tela de Parâmetros do sistema" />

<ListaCard>

- **Séries das DANFEs** – Define as séries de DANFE consideradas na geração e no download de documentos.

</ListaCard>
