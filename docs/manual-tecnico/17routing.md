---
title: 'Routing'
slug: /manual-tecnico/routing
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Routing** reúne as configurações de **roteirização** do **VendaAI**, definindo o provedor de geocodificação, os parâmetros de cálculo de distância e tempo e os pesos usados na priorização das visitas.

## 1 - Geocodificação

A seção **Geocodificação** define como os endereços são convertidos em coordenadas para o cálculo das rotas.

<TelaParametro src="https://i.imgur.com/0Roc7F7.png" alt="Routing - Geocodificação" legenda="Aba Routing na tela de Parâmetros do sistema" />

<ListaCard>

- **Provedor de geocodificação** – Define o serviço utilizado para converter endereços em coordenadas (Google ou manual).
- **Chave da API Google Maps** – Chave de autenticação utilizada para acessar a API do Google Maps na geocodificação.

</ListaCard>

## 2 - Otimização

A seção **Otimização** reúne os parâmetros utilizados no cálculo e na otimização das rotas.

<TelaParametro src="https://i.imgur.com/sdyhAjc.png" alt="Routing - Otimização" legenda="Aba Routing na tela de Parâmetros do sistema" />

<ListaCard>

- **Usar matriz de distância externa** – Ativa o uso de um serviço externo de matriz de distância no cálculo das rotas.
- **Velocidade média padrão (km/h)** – Velocidade média considerada na estimativa de tempo das rotas.

</ListaCard>

## 3 - Pontuação

A seção **Pontuação** define os pesos utilizados para priorizar os clientes na montagem das rotas.

<TelaParametro src="https://i.imgur.com/7hFj81I.png" alt="Routing - Pontuação" legenda="Aba Routing na tela de Parâmetros do sistema" />

<ListaCard>

- **Peso da prioridade na pontuação** – Define o peso da prioridade do cliente no cálculo da pontuação de roteirização.
- **Peso do atraso na pontuação** – Define o peso do atraso (visitas/títulos vencidos) na pontuação.
- **Peso dos dias sem compra** – Define o peso dos dias sem compra do cliente na pontuação.

</ListaCard>
