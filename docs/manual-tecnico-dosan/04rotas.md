---
title: 'Rotas'
slug: /manual-tecnico-dosan/rotas
description: 'Planejamento, estrutura e execução técnica das rotas no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Rotas"
  resumo="Ordenação das paradas, métricas e execução em campo.">

A **Rota** organiza as entregas em uma sequência de paradas e disponibiliza os dados necessários para acompanhamento e execução.

</ManualHeader>

## 1 - Estrutura da rota

<ListaCard>

- responsável ou entregador;
- período da operação;
- ponto de origem e destino;
- entregas e sequência das paradas;
- distância e tempo estimados;
- quantidade de entregas e volumes;
- peso e prazo de cada parada;
- estado de execução da rota e das entregas.

</ListaCard>

## 2 - Visão geral

A aba **Overview** consolida horários, distância, duração, totais e informações de início e fim. A aba **Rotas** apresenta a sequência planejada dos destinatários.

A consulta utiliza o responsável pela rota e um período. Os dados resultantes podem ser exportados para Excel.

<ManualScreenshot
  src="https://i.imgur.com/ibWoPQV.jpg"
  alt="Overview técnico da rota com mapa e sequência de paradas"
/>

<ManualScreenshot
  src="https://i.imgur.com/WqP6o0q.jpg"
  alt="Consulta técnica de rotas por responsável e período"
/>

## 3 - Planejamento

O sistema permite definir ou alterar a localização de origem e recalcular a rota. A sequência precisa permanecer coerente com as entregas vinculadas e com os endereços geocodificados.

<ManualScreenshot
  src="https://i.imgur.com/KXiAJBd.png"
  alt="Planejamento anonimizado e ilustrativo de uma rota com múltiplas paradas"
/>

| Informação | Finalidade técnica |
| --- | --- |
| Responsável | Delimita as entregas consideradas na consulta |
| Período | Define a janela operacional da rota |
| Origem | Estabelece o ponto inicial utilizado no planejamento |
| Sequência | Mantém a ordem de execução das paradas |
| Coordenadas | Posicionam origem e destinos no mapa |
| Distância e duração | Registram as estimativas produzidas pelo cálculo |

Quando a origem ainda não estiver configurada, a interface pode apresentar **Localização não definida**. A rota não deve ser liberada sem validar esse ponto e os endereços das entregas.

### Ordenação manual e automática

- **Ordenação manual** — a alça de três linhas permite arrastar uma parada para outra posição. O sistema deve atualizar os números da sequência sem alterar o vínculo de cada cartão com sua entrega.
- **Recálculo automático** — a ação **Recalcular Rotas** solicita uma nova ordenação das paradas com base nos dados disponíveis para o cálculo.
- **Persistência** — a ação **Salvar** registra a sequência que estiver apresentada após a ordenação manual ou o recálculo.

Depois de salvar, a TI deve conseguir confirmar que todas as paradas originais continuam presentes, sem duplicidades, e que os identificadores das entregas permanecem associados aos mesmos destinatários.

## 4 - Execução

No dispositivo móvel, o entregador acessa a próxima parada, alterna entre lista e mapa, inicia a navegação e registra o resultado da tentativa.

<ManualScreenshot
  src="https://i.imgur.com/1GnBVaC.png"
  alt="Lista móvel das paradas utilizadas durante a execução da rota"
  variant="mobile"
/>

<ManualScreenshot
  src="https://i.imgur.com/7sRuFYW.png"
  alt="Visualização móvel do mapa de rotas"
  variant="mobile"
/>

<ManualScreenshot
  src="https://i.imgur.com/StaOH2q.png"
  alt="Visualização móvel da sequência de paradas"
  variant="mobile"
/>

## 5 - Recálculo e reprocessamento

Mudanças de endereço, reprogramações ou entregas não realizadas podem exigir novo cálculo da sequência. O recálculo não deve apagar as evidências e os eventos já registrados.

O resultado recalculado precisa atualizar a ordem e as estimativas sem criar cópias das entregas. Paradas já concluídas devem permanecer vinculadas ao histórico da rota original.

## 6 - Encerramento

A rota deve ser finalizada somente depois que todas as paradas tiverem um resultado compatível com o fluxo da empresa.

O encerramento deve preservar as distâncias, horários, resultados das paradas e evidências registradas durante a execução.

## 7 - Validações para diagnóstico

- cada parada deve apontar para uma única entrega válida;
- todas as entregas da rota devem pertencer ao responsável e ao período selecionados;
- mudanças de ordem precisam ser refletidas na visualização móvel;
- uma entrega concluída não deve voltar para a fila sem uma ação registrada;
- o encerramento deve registrar usuário, data e resultado final.
