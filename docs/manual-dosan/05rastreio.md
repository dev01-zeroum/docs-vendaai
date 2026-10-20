---
title: 'Rastreio'
slug: /manual-dosan/rastreio
description: 'Rastreio em tempo real dos motoristas e veículos integrados ao Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<ManualHeader
  titulo="Rastreio"
  resumo="Localização em tempo real dos motoristas integrados à operação.">

O módulo **Rastreio** apresenta a localização dos motoristas em tempo real. O recurso depende de contratação e da instalação de equipamentos de rastreamento nos veículos da empresa.

</ManualHeader>

## Informações da tela

- **Quantidade de motoristas** — contador de responsáveis disponíveis no rastreamento;
- **Buscar motorista** — pesquisa um motorista pelo nome;
- **Lista de motoristas** — apresenta os responsáveis localizados pela integração;
- **Mapa** — mostra a posição recebida do serviço de rastreamento.

<ManualScreenshot
  src="https://i.imgur.com/APoq9P8.jpg"
  alt="Rastreio em Tempo Real com busca de motorista e mapa"
/>

## Como consultar

<ListaCard>

1. Acesse **Rastreio** pelo menu lateral.
2. Confira o total de motoristas identificado pela integração.
3. Utilize **Buscar motorista** para localizar um responsável específico.
4. Selecione o motorista disponível para acompanhar sua posição no mapa.
5. Utilize os controles do mapa para ampliar, reduzir ou alternar entre mapa e satélite.

</ListaCard>

## Quando nenhum motorista for encontrado

<ListaCard>

- confirme se o recurso está habilitado para o ambiente;
- verifique se o motorista ou veículo está configurado no serviço de rastreamento;
- confirme se o dispositivo está transmitindo localização;
- confirme se existem motoristas conectados no período da consulta.

</ListaCard>
