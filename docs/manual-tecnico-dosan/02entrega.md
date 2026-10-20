---
title: 'Entrega'
slug: /manual-tecnico-dosan/entrega
description: 'Estrutura, estados e evidências da entrega no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Entrega"
  resumo="Registro central da operação logística e de suas evidências.">

A **Entrega** representa o documento ou conjunto de volumes que deve ser preparado, distribuído, transportado e concluído no Dosan.

</ManualHeader>

## 1 - Identificação e referências

Uma entrega pode ser correlacionada por informações como:

- código e token da entrega;
- identificador de QR Code utilizado na busca e nas impressões;
- número e série do documento fiscal;
- chave da NF-e e identificadores de rastreio;
- contratante e cliente;
- endereço do destino;
- responsáveis pela coleta, distribuição e entrega;
- veículo e rota relacionados;
- datas de emissão, entrega e recebimento;
- quantidade de volumes, peso e valores;
- observações operacionais e internas.

## 2 - Localização e consulta

A entrega pode ser localizada pela pesquisa convencional, utilizando dados como cliente, nota fiscal, código e token, ou pela leitura do QR Code apresentado nas impressões relacionadas ao pedido.

Os filtros permitem restringir a listagem por status, responsáveis, contratante, transportadora, redespacho, veículo e data da entrega.

<ManualScreenshot
  src="https://i.imgur.com/Xq8iJQa.png"
  alt="Lista técnica das entregas e seus vínculos operacionais"
/>

O **Mapa de entregas** utiliza o dia ou o período filtrado para posicionar os pedidos que ainda não possuem entregador associado. Essa visão apoia a distribuição e pode depender da configuração do ambiente.

O módulo **Rastreio** possui outra finalidade: apresentar a localização em tempo real dos motoristas recebida pelo serviço de rastreamento. Ele não deve ser confundido com o mapa de pedidos pendentes de atribuição.

<ManualScreenshot
  src="https://i.imgur.com/nXVSpHH.png"
  alt="Filtros avançados utilizados na consulta das entregas"
/>

<ManualScreenshot
  src="https://i.imgur.com/A09ffHa.png"
  alt="Janela de busca de uma entrega por QR Code"
/>

## 3 - Estados operacionais

As telas mostram estados associados à preparação, embarque, distribuição, rota, retirada e conclusão. O estado controla quais ações ficam disponíveis na lista, nos detalhes e no dispositivo móvel.

<ListaCard>

- **Em preparação** — registro ainda em organização para a operação.
- **Embarcado** — entrega relacionada ao transporte ou à carga.
- **Em distribuição** — entrega em processo de atribuição operacional.
- **Aguardando retirada** — registro separado para o fluxo Retira.
- **Entregue, não entregue ou reprogramada** — resultados possíveis da tentativa em campo.

</ListaCard>

O conjunto disponível é definido pelo cadastro **Status da entrega** e pelas regras da operação. Por isso, os nomes apresentados podem variar entre ambientes, mas cada mudança precisa permanecer registrada no histórico.

## 4 - Evidências de conclusão

A conclusão pode armazenar nome e documento do recebedor, assinatura, fotografias, comprovantes, data, horário e localização geográfica.

## 5 - Estrutura dos detalhes

A visualização está organizada em quatro grupos:

- **Contratante** — vínculo com a empresa responsável pela operação;
- **Sobre a Entrega** — responsáveis, status, cliente, prioridade, retirada, sequência e valores;
- **Endereço da Entrega** — localização completa e tipo do endereço;
- **Informações complementares** — datas, códigos, nota fiscal, volumes, peso e observações.

## 6 - Ações relacionadas ao fluxo

- importação e exportação por planilha;
- busca de NF-e e leitura por QR Code;
- impressão de etiquetas e dos romaneios de pedido, separação e totalização;
- alteração de veículo;
- distribuição individual ou em lote;
- inclusão em carga e rota;
- finalização pelo dispositivo móvel.

O menu por registro também expõe a consulta do **Histórico de status**, essencial para rastrear as mudanças ocorridas durante o ciclo da entrega.

<ManualScreenshot
  src="https://i.imgur.com/IcU613J.png"
  alt="Menu de ações técnicas disponível em uma entrega"
/>

## 7 - Documentos operacionais

:::info Disponibilidade

Os romaneios dependem da integração com o **VendaAI**. O recurso fica habilitado para clientes que também utilizam o portal de vendas, pois as informações dos pedidos são cruzadas entre os dois sistemas.

:::

<ManualScreenshot
  src="https://i.imgur.com/C9d9mmh.png"
  alt="Menu de geração dos romaneios"
/>

- **Romaneio de pedido** — detalha individualmente o pedido, a nota fiscal e os produtos, com quantidades, valores e peso.
- **Romaneio de separação** — consolida os produtos que devem ser separados e relaciona cada item às notas, pedidos e destinatários correspondentes.
- **Romaneio totalizador** — consolida as entregas selecionadas, mantendo a ordem, o destinatário e os totais de itens, peso, paletes, volumes e valores.

<ManualScreenshot
  src="https://i.imgur.com/eDHUfLe.png"
  alt="Exemplo anonimizado de romaneio de pedido"
  variant="document"
/>

<ManualScreenshot
  src="https://i.imgur.com/cojZxzE.png"
  alt="Exemplo anonimizado de romaneio de separação"
  variant="document"
/>

<ManualScreenshot
  src="https://i.imgur.com/W9BkdTv.png"
  alt="Exemplo anonimizado de romaneio totalizador"
  variant="document"
/>

A geração desses documentos deve considerar exatamente o conjunto de entregas selecionado e preservar os vínculos entre pedido, nota fiscal, destinatário e produtos.

## 8 - Validações para diagnóstico

Uma entrega não deve perder seu histórico ao mudar de responsável, veículo, carga ou rota. Toda transição relevante deve manter data, usuário e origem da alteração.

Além do histórico, devem permanecer consistentes o documento fiscal, o destinatário, os volumes, as evidências e a referência ao sistema de origem.

Em caso de divergência, compare primeiro o **Histórico de status**, o documento fiscal e o código recebido do sistema de origem. Evite repetir a importação antes de confirmar se a entrega já existe com outro status ou vínculo operacional.
