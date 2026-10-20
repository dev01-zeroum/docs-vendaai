---
title: 'Distribuição'
slug: /manual-tecnico-dosan/distribuicao
description: 'Fluxo técnico de distribuição das entregas no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Distribuição"
  resumo="Atribuição das entregas antes da consolidação e da execução.">

A **Distribuição** posiciona as entregas na estrutura responsável por preparar ou executar a operação.

</ManualHeader>

## 1 - Entrada do fluxo

O processo parte da seleção de uma ou várias entregas elegíveis. A grade permite conferir status, código, token, nota fiscal, contratante, cliente, CPF/CNPJ, cidade, rua, bairro, estado e data da entrega.

<ManualScreenshot
  src="https://i.imgur.com/6j1Q3sj.png"
  alt="Lista anonimizada de entregas disponíveis para distribuição"
/>

## 2 - Filtros

A consulta pode ser refinada por cidade, estado, contratante, faixa de CEP, transportadora, status e data da entrega.

## 3 - Operações disponíveis

- **Buscar NFe** — consulta a nota fiscal do pedido no Protheus ou no VendaAI, quando o documento já estiver disponível no sistema de origem;
- **Coletar e Alocar** — executa em conjunto as etapas habilitadas para a operação;
- **Iniciar Entregas** — avança os registros selecionados para o início do fluxo;
- **Distribuir Selecionado(s)** — abre a atribuição em lote das entregas marcadas.

## 4 - Dados informados

<ListaCard>

- **Entregador responsável** — usuário que receberá as entregas selecionadas.
- **Veículo** — veículo que será aplicado às entregas selecionadas.
- **Data da entrega** — período previsto para execução.

</ListaCard>

## 5 - Resultado da distribuição

Ao confirmar, o Dosan aplica o entregador, o veículo e a data a todas as entregas selecionadas e atualiza o estado para indicar que elas entraram no processo de distribuição.

<ManualScreenshot
  src="https://i.imgur.com/8KHMzuQ.png"
  alt="Formulário para atribuição do entregador, veículo e data"
/>

:::warning Sobrescrita na distribuição em lote

Quando uma entrega já possui veículo ou data de entrega, os valores anteriores são substituídos pelos dados informados na nova distribuição.

:::

## 6 - Validação da operação em lote

- a seleção deve permanecer estável até a confirmação;
- os mesmos valores devem ser aplicados a todos os registros marcados;
- o resultado deve ser conferido em todas as entregas marcadas;
- os valores anteriores devem permanecer consultáveis no histórico;
- registros não processados devem ser identificados antes de repetir a operação.

## 7 - Pontos para a TI validar

- status necessário para a entrega aparecer na distribuição;
- diferenças entre distribuição individual e em lote;
- comportamento esperado ao redistribuir uma entrega;
- vínculos existentes com carga ou rota antes da alteração;
- responsável, veículo e data efetivamente gravados após a confirmação;
- usuário e horário apresentados no histórico;
- sistema que forneceu a NF-e quando a busca envolver Protheus ou VendaAI.

:::note Relação com as etapas seguintes

A distribuição prepara os vínculos utilizados por carga e rota. Quando a operação adotar outra ordem, os módulos seguintes devem respeitar o entregador, o veículo e a data mais recentes registrados na entrega.

:::
