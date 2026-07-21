---
title: 'Gateway'
slug: /manual-tecnico/gateway
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Gateway** reúne as configurações necessárias para integração do **VendaAI** com provedores de pagamento, permitindo configurar credenciais de autenticação, parâmetros para geração de cobranças via Pix e Cartão de Crédito, além das regras de parcelamento utilizadas pelo sistema.

## 1 - Cielo

A seção **Cielo** permite configurar as credenciais utilizadas para autenticação e comunicação com os serviços da Cielo.

<TelaParametro src="https://i.imgur.com/rJDa596.png" alt="Gateway - Cielo" legenda="Aba Gateway na tela de Parâmetros do sistema" />

<ListaCard>

- **ID do Cliente** – Identificador da aplicação fornecido pela Cielo para autenticação.
- **Segredo do Cliente** – Chave de autenticação utilizada juntamente com o ID do Cliente para acesso aos serviços da Cielo.

</ListaCard>

---

## 2 - Banco do Brasil

A seção **Banco do Brasil** permite configurar os parâmetros necessários para integração com a API de pagamentos do Banco do Brasil.

<TelaParametro src="https://i.imgur.com/jCyu7aj.png" alt="Gateway - Banco do Brasil" legenda="Aba Gateway na tela de Parâmetros do sistema" />

<ListaCard>

- **client_id** – Identificador da aplicação utilizado na autenticação da API.
- **client_secret** – Chave secreta utilizada para autenticação da aplicação.
- **developer_application_key** – Chave da aplicação fornecida pelo Banco do Brasil para acesso às APIs.
- **Chave Pix (aleatória)** – Chave Pix utilizada para recebimento dos pagamentos.
- **Validade do Pix em horas** – Define por quanto tempo uma cobrança Pix permanecerá válida.
- **Certificado (.cert)** – Certificado digital utilizado para autenticação nas requisições à API.
- **Chave Privada (.key)** – Chave privada correspondente ao certificado digital.
- **Senha da Chave Privada (se encriptada)** – Senha utilizada para descriptografar a chave privada, quando aplicável.

</ListaCard>

---

## 3 - Rede

A seção **Rede** permite configurar a integração com a adquirente Rede, incluindo credenciais de autenticação, regras de parcelamento e parâmetros de pagamento.

<TelaParametro src="https://i.imgur.com/33F7jX0.png" alt="Gateway - Rede" legenda="Aba Gateway na tela de Parâmetros do sistema" />

<ListaCard>

- **PV (Número de Filiação)** – Número de filiação fornecido pela Rede para identificação do estabelecimento.
- **Chave de Integração** – Chave utilizada para autenticação das requisições enviadas à API da Rede.
- **Máximo de parcelas para cartão de crédito** – Define a quantidade máxima de parcelas permitidas nas vendas com cartão.
- **Taxas de parcelamento** – Permite configurar as taxas aplicadas para cada quantidade de parcelas.
- **Valor mínimo por parcela** – Define o valor mínimo permitido para cada parcela.
- **Acréscimo/Desconto por meio de pagamento** – Permite configurar percentuais de acréscimo ou desconto conforme o meio de pagamento utilizado.
- **Validade do Pix em horas** – Define o tempo de validade das cobranças Pix geradas pela integração.
- **Habilitar Cartão de Crédito no pagamento de título** – Permite realizar o pagamento de títulos utilizando cartão de crédito.
- **Habilitar Pix no pagamento de título** – Permite realizar o pagamento de títulos utilizando Pix.

</ListaCard>

