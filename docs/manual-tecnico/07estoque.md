---
title: 'Estoque'
slug: /manual-tecnico/estoque
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Estoque** reúne as configurações responsáveis por controlar a visualização e o comportamento das informações de estoque no **VendaAI**, permitindo definir regras de exibição, disponibilidade dos produtos, armazéns e parâmetros utilizados durante a consulta e comercialização.

## 1 - Funcionalidades

A seção **Funcionalidades** permite configurar como as informações de estoque serão tratadas durante a consulta e inclusão de produtos nos pedidos.

<TelaParametro src="https://i.imgur.com/UyauQh1.png" alt="Estoque - Funcionalidades" legenda="Aba Estoque na tela de Parâmetros do sistema" />

<ListaCard>

- **Habilitar visualização do estoque** – Permite exibir as informações de estoque dos produtos no sistema.
- **Visualizar todas as filiais** – Exibe os estoques de todas as filiais disponíveis para o usuário.
- **Ocultar produtos sem estoque** – Remove da listagem os produtos que não possuem saldo disponível.
- **Desativar compra de produtos sem estoque** – Impede a inclusão de produtos sem disponibilidade de estoque nos pedidos.
- **Ocultar listagem de estoque zero** – Oculta registros de estoque cujo saldo seja igual a zero.
- **Alertar produto sem estoque ao adicionar** – Exibe um aviso ao usuário ao tentar adicionar um produto sem estoque ao pedido.
- **Bloquear estoque futuro** – Impede a utilização de estoques previstos para movimentações futuras.

</ListaCard>

---

## 2 - Visualização

A seção **Visualização** permite personalizar as informações exibidas na consulta de estoque e definir parâmetros relacionados aos armazéns.

<TelaParametro src="https://i.imgur.com/heEVMcS.png" alt="Estoque - Visualização" legenda="Aba Estoque na tela de Parâmetros do sistema" />

<ListaCard>

- **Campos a serem visualizados na listagem de estoque** – Permite selecionar quais colunas serão exibidas na consulta de estoque.
- **Exibir saldo dos armazéns** – Define de quais armazéns o saldo em estoque será exibido na consulta.
- **Armazém padrão no envio** – Define o armazém utilizado como padrão durante o envio das informações.
- **Armazéns futuros** – Permite informar quais armazéns serão considerados como estoque futuro.
- **Ordenação da listagem de estoque** – Define a ordem padrão de exibição dos registros de estoque.

</ListaCard>

