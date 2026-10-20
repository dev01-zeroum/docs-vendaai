---
title: 'Carga'
slug: /manual-tecnico-dosan/carga
description: 'Estrutura e fluxo técnico de cargas no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Carga"
  resumo="Agrupamento de entregas, capacidade do veículo e documentos operacionais.">

A **Carga** consolida uma ou mais entregas para transporte por um veículo e um responsável definidos.

</ManualHeader>

## 1 - Vínculos principais

<ListaCard>

- **Veículo** — determina a capacidade disponível para a carga.
- **Entregador responsável** — identifica quem executará o transporte.
- **Entregas** — registros adicionados à composição da carga.
- **Data da entrega** — posiciona a carga no período operacional.

</ListaCard>

## 2 - Dados apresentados

O formulário apresenta **veículo**, **quantidade de paletes**, **entregador responsável**, **data da entrega**, **observação** e **observação interna**. Também exibe informações calculadas da capacidade e as entregas relacionadas.

A listagem consolida **código**, **status**, **veículo**, **quantidade de paletes**, **% Carga** e os valores **cobrado**, **pago** e **total**.

<ManualScreenshot
  src="https://i.imgur.com/TQOddUB.jpg"
  alt="Lista técnica de cargas com status, ocupação e valores"
/>

<ManualScreenshot
  src="https://i.imgur.com/Y5NjIjO.jpg"
  alt="Ações disponíveis para consulta e tratamento de uma carga"
/>

## 3 - Composição e capacidade

Cada entrega adicionada contribui para os totais de peso, volume, quantidade e valores. O indicador **% Carga** representa o percentual da capacidade do veículo já ocupado pelo peso da carga. Na seção **Carga do Veículo**, o sistema também apresenta o peso carregado, a capacidade máxima, o saldo disponível e a indicação de que a carga está dentro do limite.

Quando a capacidade em peso estiver informada, o cálculo de referência é:

**% Carga = (peso carregado ÷ capacidade máxima do veículo) × 100**

O saldo disponível corresponde à diferença entre a capacidade máxima e o peso já carregado. Quando o veículo não possuir capacidade cadastrada, a TI deve considerar o percentual inconclusivo e revisar o cadastro antes de comparar os valores.

<ManualScreenshot
  src="https://i.imgur.com/0RxBk28.png"
  alt="Detalhes da carga com peso, percentual ocupado e capacidade disponível"
/>

## 4 - Valores da carga

A grade de valores possui as colunas **Descrição**, **Valor Cobrado**, **Valor Pago** e **Valor**. Os registros adicionados são consolidados nos totais apresentados na listagem da carga.

### Pontos de validação

- conferir se o ambiente sinaliza quando a capacidade informada é excedida;
- verificar se uma entrega aparece em outra carga incompatível;
- comparar os totais antes e depois de adicionar ou remover uma entrega;
- confirmar os vínculos após editar veículo, responsável ou data;
- observar se o estado atual da carga permite a alteração pretendida.

## 5 - Ciclo de referência

1. A carga é criada com veículo, responsável e data.
2. As entregas elegíveis são pesquisadas e adicionadas.
3. O sistema recalcula capacidade e totais.
4. A carga é salva e fica disponível para o fluxo seguinte.
5. Os romaneios podem ser gerados para separação e conferência.

## 6 - Documentos relacionados

:::info Disponibilidade

Os romaneios dependem da integração com o **VendaAI**. O recurso fica habilitado para clientes que também utilizam o portal de vendas, pois as informações dos pedidos são cruzadas entre os dois sistemas.

:::

O fluxo de carga utiliza dois documentos principais:

- **Romaneio de separação** — organiza os itens que devem ser separados para a carga;
- **Romaneio totalizador** — consolida as entregas, volumes, peso e demais totais operacionais.

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

:::note Regra de capacidade

O percentual exibido depende da capacidade informada no cadastro do veículo e do peso consolidado das entregas. Alterações nesses vínculos exigem novo cálculo dos totais apresentados.

:::
