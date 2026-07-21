---
title: 'CRM'
slug: /manual-tecnico/crm
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **CRM** reúne as configurações responsáveis pelo gerenciamento das funcionalidades do CRM do **VendaAI**, permitindo definir regras para criação de negócios, integração com plataformas externas, visualização de informações e automação dos processos comerciais.

## 1 - Funcionalidades

A seção **Funcionalidades** permite configurar o comportamento do CRM durante a criação e atualização de negócios.

<TelaParametro src="https://i.imgur.com/0BeUHmm.png" alt="CRM - Funcionalidades" legenda="Aba CRM na tela de Parâmetros do sistema" />

<ListaCard>

- **Abrir negócio ao mover** – Abre automaticamente o negócio ao movê-lo entre etapas do funil.
- **Validar cliente/prospect da carteira** – Verifica se o cliente ou prospect pertence à carteira do vendedor ao criar o negócio.
- **Enviar e-mail de notificação diária** – Envia um resumo diário por e-mail com as atividades do CRM.
- **Marcar como ganho ao integrar venda** – Marca o negócio como ganho automaticamente quando a venda é integrada.

</ListaCard>

---

## 2 - Valores Padrões

A seção **Valores Padrões** permite definir as configurações padrão utilizadas na criação de novos negócios.

<TelaParametro src="https://i.imgur.com/oiVJib0.png" alt="CRM - Valores Padrões" legenda="Aba CRM na tela de Parâmetros do sistema" />

<ListaCard>

- **Funil padrão para criação de negócios** – Define o funil utilizado por padrão ao criar um novo negócio.
- **Etapa padrão para criação do negócio** – Define a etapa inicial padrão dos negócios criados.

</ListaCard>

---

## 3 - Visualização

A seção **Visualização** permite configurar as informações exibidas no CRM e os campos obrigatórios durante o registro dos motivos de perda.

<TelaParametro src="https://i.imgur.com/bEPd6QQ.png" alt="CRM - Visualização" legenda="Aba CRM na tela de Parâmetros do sistema" />

<ListaCard>

- **Seções e campos a serem visualizados no CRM** – Permite selecionar quais seções e campos aparecem na tela do negócio.
- **Campos obrigatórios no motivo da perda** – Define quais campos devem ser preenchidos ao registrar a perda de um negócio.

</ListaCard>

---

## 4 - RD Station

A seção **RD Station** permite configurar a integração do **VendaAI** com a plataforma **RD Station CRM**, definindo as credenciais de autenticação e os parâmetros utilizados para criação e sincronização de negócios.

<TelaParametro src="https://i.imgur.com/hFiDB6b.png" alt="CRM - RD Station" legenda="Aba CRM na tela de Parâmetros do sistema" />

<ListaCard>

- **Access Token** – Token de acesso para autenticação com a API do RD Station.
- **Refresh Token** – Token utilizado para renovar o acesso à API do RD Station.
- **Client ID** – Identificador da aplicação no RD Station.
- **Client Secret** – Chave secreta da aplicação no RD Station.
- **Código** – Código de autorização utilizado na integração com o RD Station.
- **Ignorar eventos com os nomes** – Lista de eventos que serão ignorados na sincronização com o RD Station.
- **Funil padrão para criação de negócios** – Define o funil utilizado ao criar negócios vindos do RD Station.
- **Etapa padrão para o negócio** – Define a etapa inicial dos negócios criados a partir do RD Station.
- **Canal padrão para o negócio** – Define o canal (origem) atribuído aos negócios do RD Station.
- **Vendedor responsável para o negócio** – Define o vendedor associado aos negócios criados pela integração.

</ListaCard>
