---
title: 'Rotas'
slug: /manual-dosan/rotas
description: 'Como consultar, planejar e acompanhar rotas no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<ManualHeader
  titulo="Rotas"
  resumo="Planejamento, sequência de paradas e acompanhamento da execução.">

O módulo **Rotas** reúne a visão geral da rota, a ordem das entregas e os fluxos de retirada.

</ManualHeader>

## Visões do módulo

O módulo pode apresentar as seguintes abas:

- **Overview** — resumo da rota, com horários, distância, duração e totais da operação;
- **Rotas** — sequência planejada de paradas e entregas;
- **Retira** — controle das retiradas realizadas por transportadora ou cliente, quando esse fluxo estiver habilitado para a operação.

### Overview

A visão **Overview** combina o mapa com a **Sequência de rota**. O primeiro ponto representa a localização de origem e pode aparecer como **Localização não definida** quando ainda não foi informado.

<ManualScreenshot
  src="https://i.imgur.com/ibWoPQV.jpg"
  alt="Overview de Rotas com mapa e sequência inicial"
/>

### Rotas

A aba **Rotas** apresenta os registros encontrados para o responsável e o período selecionados. Quando não existem entregas compatíveis, a tabela informa **Nenhum registro encontrado**.

<ManualScreenshot
  src="https://i.imgur.com/WqP6o0q.jpg"
  alt="Consulta de Rotas no computador com responsável, período e abas de visualização"
/>

## Localizando uma rota

Utilize o responsável pela rota e o período desejado para consultar os registros. A tela disponibiliza a opção **Exportar para o Excel** para gerar uma planilha com os dados da consulta.

Quando não houver uma rota para os filtros informados, a página apresenta **“Nenhum registro encontrado”**. Verifique principalmente o entregador e a data selecionados.

## Resumo e sequência da rota

O resumo pode apresentar quantidade de entregas, volumes, tempo estimado, distância, início e fim da rota. A sequência mostra cada parada, destinatário, endereço, volumes, peso, prazo e situação.

O mapa e a sequência devem ser conferidos juntos: a ordem numérica identifica a posição de cada parada, enquanto o mapa ajuda a entender sua distribuição geográfica.

<ManualScreenshot
  src="https://i.imgur.com/KXiAJBd.png"
  alt="Exemplo anonimizado e ilustrativo de uma rota com várias paradas"
/>

### Alterar a ordem manualmente

Cada parada possui uma **alça com três linhas** ao lado do número da sequência. Para definir uma ordem própria:

<ListaCard>

1. Localize a parada que deseja mover.
2. Pressione a alça de três linhas e arraste o cartão para a nova posição.
3. Repita o processo até obter a ordem desejada.
4. Confira os números das paradas e o trajeto atualizado no mapa.
5. Selecione **Salvar** para registrar a nova sequência.

</ListaCard>

### Recalcular automaticamente

Utilize **Recalcular Rotas** quando quiser que o Dosan calcule novamente a ordem das paradas. Depois do processamento, confira a sequência sugerida e selecione **Salvar** para mantê-la.

:::warning Ordem da rota

Antes de salvar, confirme se a sequência atende às prioridades e restrições da operação. Um recálculo pode apresentar uma ordem diferente da organização manual realizada anteriormente.

:::

### Lista no celular

<ManualScreenshot
  src="https://i.imgur.com/1GnBVaC.png"
  alt="Visualização móvel da lista de paradas da rota"
  variant="mobile"
/>

### Mapa no celular

<ManualScreenshot
  src="https://i.imgur.com/7sRuFYW.png"
  alt="Visualização móvel do mapa de rotas no Dosan"
  variant="mobile"
/>

### Sequência no celular

<ManualScreenshot
  src="https://i.imgur.com/StaOH2q.png"
  alt="Visualização móvel da sequência de paradas da rota"
  variant="mobile"
/>

## Execução da rota

<ListaCard>

1. Consulte a sequência de paradas.
2. Abra a parada que será atendida.
3. Use a opção de navegação para chegar ao destino.
4. Recalcule a rota quando houver mudança operacional.
5. Registre a conclusão, a reprogramação ou a não realização da entrega.
6. Finalize a rota após tratar todas as paradas.

</ListaCard>

## Retiradas

Na aba **Retira**, é possível localizar registros por transportadora, contratante ou redespacho e confirmar a retirada informando os dados exigidos, como veículo, motorista e data.

:::note Disponibilidade da aba

A opção **Retira** depende da configuração e das permissões do ambiente. Quando não estiver habilitada, o módulo exibirá somente as visões **Overview** e **Rotas**.

:::
