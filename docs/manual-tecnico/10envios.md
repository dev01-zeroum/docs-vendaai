---
title: 'Envios'
slug: /manual-tecnico/envios
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Envios** reúne as configurações responsáveis pelo gerenciamento das regras de frete e transporte no **VendaAI**, permitindo definir parâmetros para transportadoras, cálculo de frete e integração com plataformas de cotação.

## 1 - Funcionalidades

A seção **Funcionalidades** permite configurar as regras utilizadas no cálculo e seleção das opções de envio dos pedidos.

<TelaParametro src="https://i.imgur.com/Dm8WzCw.png" alt="Envios - Funcionalidades" legenda="Aba Envios na tela de Parâmetros do sistema" />

<ListaCard>

- **Habilitar transportadoras por tipo de envio** – Permite definir transportadoras específicas de acordo com o tipo de envio selecionado.
- **Habilitar frete mínimo por cidade** – Ativa a validação de um valor mínimo de frete conforme a cidade de destino.
- **Habilitar custo do frete por peso em regiões** – Permite calcular o custo do frete considerando o peso dos produtos e a região de entrega.

</ListaCard>

---

## 2 - Frete Rápido

A seção **Frete Rápido** permite configurar a integração com a plataforma **Frete Rápido**, utilizada para cotação e cálculo de fretes.

<TelaParametro src="https://i.imgur.com/WiBAEYH.png" alt="Envios - Frete Rápido" legenda="Aba Envios na tela de Parâmetros do sistema" />

<ListaCard>

- **Token** – Token de autenticação utilizado para comunicação com a API da plataforma Frete Rápido.
- **Código da Plataforma** – Código de identificação da empresa na plataforma Frete Rápido.
- **CNPJ Credenciado** – CNPJ utilizado para autenticação e identificação do estabelecimento junto à plataforma.
- **CEP de origem do expedidor** – CEP utilizado como origem para o cálculo das cotações de frete.

</ListaCard>

