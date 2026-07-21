---
title: 'Notificação'
slug: /manual-tecnico/notificacao
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Notificação** reúne as configurações utilizadas para integração do **VendaAI** com serviços de envio de notificações, permitindo configurar provedores de SMS, WhatsApp e Discord para comunicação com usuários e monitoramento do sistema.

## 1 - Twilio

A seção **Twilio** permite configurar a integração com a plataforma **Twilio**, utilizada para envio de mensagens SMS.

<TelaParametro src="https://i.imgur.com/FBu3l1j.png" alt="Notificação - Twilio" legenda="Aba Notificação na tela de Parâmetros do sistema" />

<ListaCard>

- **Habilitar envio de SMS via Twilio** – Ativa a integração com a plataforma Twilio para envio de mensagens SMS.
- **Account SID** – Identificador da conta utilizado para autenticação na API da Twilio.
- **Auth Token** – Chave de autenticação da conta Twilio.
- **Número de envio** – Número de telefone utilizado como remetente das mensagens SMS.

</ListaCard>

---

## 2 - WhatsApp

A seção **WhatsApp** permite configurar os parâmetros utilizados para envio de notificações via WhatsApp.

<TelaParametro src="https://i.imgur.com/UdcZLBh.png" alt="Notificação - WhatsApp" legenda="Aba Notificação na tela de Parâmetros do sistema" />

<ListaCard>

- **Token de autenticação** – Token utilizado para autenticação do serviço de envio de mensagens.
- **Números que receberão erros** – Lista de números que receberão notificações quando ocorrerem erros no sistema.

</ListaCard>

---

## 3 - Discord

A seção **Discord** permite configurar a integração com um servidor do Discord para envio de notificações e alertas do sistema.

<TelaParametro src="https://i.imgur.com/TNp9pfY.png" alt="Notificação - Discord" legenda="Aba Notificação na tela de Parâmetros do sistema" />

<ListaCard>

- **Bot Token** – Token de autenticação do bot utilizado para comunicação com a API do Discord.
- **Channel ID** – Identificador do canal onde as notificações serão enviadas.

</ListaCard>

