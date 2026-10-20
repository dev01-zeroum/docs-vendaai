---
title: 'Dashboard'
slug: /manual-dosan/dashboard
description: 'Como consultar o Dashboard operacional do Dosan e interpretar suas informações principais.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<ManualHeader
  titulo="Dashboard"
  resumo="Indicadores para acompanhamento da operação logística.">

O **Dashboard** é a área destinada à visão consolidada da operação e dos resultados das entregas.

</ManualHeader>

## Visão geral do painel

O Dashboard relaciona os registros ao **responsável selecionado** e ao **período informado**. Dessa forma, a consulta pode ser direcionada para uma pessoa específica e para as datas que precisam ser acompanhadas.

<ManualScreenshot
  src="https://i.imgur.com/d2Y8gHf.png"
  alt="Exemplo ilustrativo do Dashboard do Dosan com indicadores, gráfico por status e análise de perdas"
  variant="desktop"
/>

Os números da imagem são apenas ilustrativos. Os valores exibidos no ambiente seguem os registros encontrados pelos filtros aplicados.

## Filtros disponíveis

<ListaCard>

1. **Responsável** — define a pessoa considerada na consulta.
2. **Período** — delimita as datas inicial e final do acompanhamento.
3. **Calendário** — facilita a escolha do intervalo utilizado no painel.

</ListaCard>

## Principais informações

Quando existem registros para os filtros informados, o painel apresenta:

- **Total de entregas** — quantidade de entregas encontradas na consulta;
- **Entregas em aberto** — registros que ainda não atingiram um resultado final;
- **Canceladas / não entregues** — entregas encerradas sem conclusão positiva;
- **Valor total a receber** — soma dos valores a receber associados à consulta;
- **Quantidade de entregas por status** — distribuição visual dos registros entre os estados da operação;
- **Análise geral de entregas** — detalhamento das quantidades agrupadas por status;
- **Análise de perdas** — total de ocorrências de perda e o respectivo valor perdido.

O gráfico e a análise geral ajudam a identificar rapidamente quanto da operação foi finalizado e quanto ainda exige acompanhamento.

## Como consultar

<ListaCard>

1. Acesse **Dashboard** pelo menu lateral.
2. Selecione o responsável que será acompanhado.
3. Defina a data inicial e a data final.
4. Aguarde a atualização do painel.
5. Compare o total de entregas com a divisão por status.
6. Confira os registros em aberto, as ocorrências de perda e os valores do período.

</ListaCard>

## Quando nenhuma entrega for localizada

A mensagem **“Nenhuma entrega localizada”** indica que não existem registros compatíveis com o responsável e o período selecionados. Nesse caso, altere o responsável ou amplie o intervalo de datas antes de concluir que não há operação cadastrada.

<ManualScreenshot
  src="https://i.imgur.com/NjCh0IR.jpg"
  alt="Dashboard do Dosan com seleção de responsável, período e estado sem entregas"
  variant="compact"
/>

:::note Consulta sem resultados

O exemplo acima apresenta o estado sem resultados. Os indicadores aparecem somente quando a consulta encontra entregas compatíveis com o responsável e o período informados.

:::
