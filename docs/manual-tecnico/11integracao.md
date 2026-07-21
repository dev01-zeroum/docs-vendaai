---
title: 'Integração'
slug: /manual-tecnico/integracao
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Integração** reúne as configurações necessárias para integração do **VendaAI** com serviços externos, APIs e provedores de Inteligência Artificial, permitindo configurar credenciais de autenticação, modelos de IA, consultas de crédito e demais serviços utilizados pela plataforma.

## 1 - ChatGPT

A seção **ChatGPT** permite configurar a credencial utilizada para comunicação com os serviços da OpenAI.

<TelaParametro src="https://i.imgur.com/dcNXrC4.png" alt="Integração - ChatGPT" legenda="Aba Integração na tela de Parâmetros do sistema" />

<ListaCard>

- **Chave Secreta** – Chave de autenticação utilizada para acessar os serviços da OpenAI.

</ListaCard>

---

## 2 - Inteligência Artificial

A seção **Inteligência Artificial** permite definir o provedor de IA utilizado pelo sistema, bem como configurar os modelos e credenciais de acesso de cada plataforma suportada.

<TelaParametro src="https://i.imgur.com/Fxt5xrF.png" alt="Integração - Inteligência Artificial" legenda="Aba Integração na tela de Parâmetros do sistema" />

<ListaCard>

- **Habilitar Insights na análise de crédito** – Ativa a utilização de Inteligência Artificial para geração de insights durante a análise de crédito.
- **Provider LLM ativo (Claude | OpenAI | Gemini)** – Define qual provedor de modelo de linguagem será utilizado pelo sistema.
- **Anthropic API Key** – Chave de autenticação utilizada para acesso aos modelos Claude (Anthropic).
- **Modelo Claude** – Define o modelo Claude utilizado nas requisições.
- **Modelo OpenAI (usa Integration.OpenIA.Token)** – Define o modelo OpenAI utilizado pelo sistema.
- **Google Gemini API Key** – Chave de autenticação utilizada para acesso aos modelos Gemini.
- **Modelo Gemini** – Define o modelo Gemini utilizado nas integrações.

</ListaCard>

---

## 3 - Boleto B3

A seção **Boleto B3** permite configurar a integração com o serviço de emissão e gerenciamento de boletos.

<TelaParametro src="https://i.imgur.com/7yMrKcG.png" alt="Integração - Boleto B3" legenda="Aba Integração na tela de Parâmetros do sistema" />

<ListaCard>

- **URL** – Endereço do serviço utilizado para integração.
- **Usuário** – Usuário utilizado para autenticação no serviço.
- **Senha** – Senha utilizada para autenticação.

</ListaCard>

---

## 4 - ApiFull

A seção **ApiFull** permite configurar a integração com o serviço **ApiFull**, utilizado para consultas de crédito.

<TelaParametro src="https://i.imgur.com/piNCYN4.png" alt="Integração - ApiFull" legenda="Aba Integração na tela de Parâmetros do sistema" />

<ListaCard>

- **Habilitar ApiFull (consulta de crédito)** – Ativa a integração com o serviço de consulta de crédito.
- **URL Base** – Endereço base da API utilizada pelo serviço.
- **API Key** – Chave de autenticação utilizada para acesso à API.

</ListaCard>

---

## 5 - ReceitaWS

A seção **ReceitaWS** permite configurar a integração com o serviço **ReceitaWS**, utilizado para consulta automática de informações cadastrais de empresas por meio do CNPJ.

<TelaParametro src="https://i.imgur.com/cz8eQZ5.png" alt="Integração - ReceitaWS" legenda="Aba Integração na tela de Parâmetros do sistema" />

<ListaCard>

- **Token** – Token de autenticação utilizado para acesso à API do ReceitaWS.
- **Habilitar consulta de IE** – Permite consultar automaticamente a Inscrição Estadual durante a integração.
- **Campos a serem integrados** – Define quais informações retornadas pela ReceitaWS serão utilizadas para preencher o cadastro do cliente.
- **Validar CNPJ no WS ao integrar venda (0 = desativado)** – Define se o CNPJ será validado automaticamente durante a integração da venda.

</ListaCard>

---

## 6 - WhatsApp Evolution API

A seção **WhatsApp Evolution API** permite configurar a integração com o serviço **Evolution API**, utilizado para envio de mensagens pelo WhatsApp.

<TelaParametro src="https://i.imgur.com/z4HUS31.png" alt="Integração - WhatsApp Evolution API" legenda="Aba Integração na tela de Parâmetros do sistema" />

<ListaCard>

- **Habilitar WhatsApp** – Ativa a integração com a Evolution API.
- **Token** – Token utilizado para autenticação da API.
- **URL** – Endereço do servidor da Evolution API.
- **Instância** – Nome da instância utilizada para envio e recebimento das mensagens.

</ListaCard>

---

## 7 - AwesomeAPI Exchange

A seção **AwesomeAPI Exchange** permite configurar a integração com a **AwesomeAPI**, utilizada para obtenção de cotações de moedas.

<TelaParametro src="https://i.imgur.com/FtlvXOK.png" alt="Integração - AwesomeAPI Exchange" legenda="Aba Integração na tela de Parâmetros do sistema" />

<ListaCard>

- **Token** – Token de autenticação utilizado para acesso à API.
- **Cotação Dólar** – Configuração utilizada para consulta da cotação do dólar.
- **Cotação Euro** – Configuração utilizada para consulta da cotação do euro.

</ListaCard>

---

## 8 - ZEROUM Reporting

A seção **ZEROUM Reporting** permite configurar a integração com o serviço de geração de relatórios da ZEROUM.

<TelaParametro src="https://i.imgur.com/AI8BMrH.png" alt="Integração - ZEROUM Reporting" legenda="Aba Integração na tela de Parâmetros do sistema" />

<ListaCard>

- **URL para geração de relatórios** – Endereço utilizado pelo sistema para emissão e geração de relatórios.

</ListaCard>

