---
title: 'Marketplace'
slug: /manual-tecnico/marketplace
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Marketplace** reúne as configurações necessárias para integração do **VendaAI** com plataformas de marketplace, permitindo definir parâmetros de autenticação, configurações comerciais e informações padrão utilizadas durante a importação e processamento dos pedidos.

## 1 - Wake

A seção **Wake** permite configurar a integração com a plataforma **Wake**, definindo as credenciais de acesso e os parâmetros padrão utilizados na criação dos pedidos importados.

<TelaParametro src="https://i.imgur.com/tgJekKI.png" alt="Marketplace - Wake" legenda="Aba Marketplace na tela de Parâmetros do sistema" />

<ListaCard>

- **Habilitar Wake** – Ativa a integração com a plataforma Wake.
- **Token** – Token de autenticação utilizado para comunicação com a API da Wake.
- **Tabela de preço** – Define a tabela de preços utilizada nos pedidos importados pela integração.
- **Vendedor padrão** – Define o vendedor que será associado aos pedidos importados.
- **Tipo da venda padrão** – Define o tipo de transação utilizado como padrão nos pedidos da integração.
- **Condição de pagamento padrão** – Define a condição de pagamento aplicada aos pedidos importados.
- **Tipo de frete padrão** – Define o tipo de frete utilizado por padrão nos pedidos provenientes da Wake.
- **Transportadora padrão** – Define a transportadora utilizada por padrão durante o processamento dos pedidos.
- **Empresa/Filial padrão** – Define a empresa ou filial responsável pelo processamento dos pedidos importados.
- **Armazém do estoque** – Define o armazém utilizado para consulta e baixa de estoque dos pedidos integrados.

</ListaCard>

