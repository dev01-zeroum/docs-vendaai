---
title: 'Dashboard'
slug: /manual-tecnico-dosan/dashboard
description: 'Consolidação dos indicadores e diagnóstico das consultas do Dashboard do Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Dashboard"
  resumo="Consolidação dos indicadores por responsável e período.">

O **Dashboard** reúne indicadores de entregas e perdas a partir do responsável e do intervalo de datas informados. Para a TI do cliente, a principal validação é confirmar que todos os componentes utilizam o mesmo conjunto de registros.

</ManualHeader>

## 1 - Filtros da consulta

- **Responsável** — define a pessoa ou operação considerada no painel;
- **Período** — delimita as datas inicial e final da consolidação;
- **Calendário** — aplica o intervalo selecionado e atualiza os componentes.

<ManualScreenshot
  src="https://i.imgur.com/d2Y8gHf.png"
  alt="Exemplo ilustrativo da consolidação de entregas e perdas no Dashboard"
/>

Os valores da imagem são ilustrativos. Os resultados apresentados no ambiente dependem dos registros encontrados pelos filtros aplicados.

## 2 - Componentes consolidados

| Componente | Consolidação esperada |
| --- | --- |
| Total de entregas | Quantidade total de registros encontrados no filtro |
| Entregas em aberto | Registros que ainda não atingiram um status final |
| Canceladas / não entregues | Registros encerrados com resultado negativo |
| Valor total a receber | Soma dos valores a receber considerados pela consulta |
| Gráfico por status | Distribuição do total entre os diferentes status |
| Análise geral | Quantidades detalhadas por status |
| Análise de perdas | Quantidade e valor associados às perdas registradas |

## 3 - Validações de consistência

- aplicar o mesmo responsável e intervalo de datas em todos os componentes;
- garantir que a soma das quantidades por status corresponda ao total do gráfico;
- manter cards, gráfico e análise geral sincronizados após uma mudança de status;
- preservar o status histórico utilizado nos relatórios, mesmo quando um cadastro for posteriormente inativado;
- utilizar o mesmo critério de data e fuso horário em toda a consolidação;
- confirmar que a regra financeira corresponde aos campos habilitados e ao mapeamento da integração.

## 4 - Consulta sem resultados

A ausência de indicadores pode representar uma consulta sem registros, e não necessariamente uma falha. Antes de encaminhar o caso:

1. confirme o responsável selecionado;
2. amplie o intervalo de datas;
3. pesquise na página **Entregas** pelos mesmos critérios;
4. confira as datas e o status dos registros esperados;
5. atualize a consulta após uma mudança recente de status.

Se os registros aparecerem em **Entregas**, mas não forem consolidados no Dashboard com os mesmos critérios, reúna os identificadores para análise.

## 5 - Informações para diagnóstico

Registre o responsável, o período e o horário da consulta, além do total esperado e do total apresentado. Quando a divergência envolver um status ou valor específico, informe também os códigos das entregas utilizadas na comparação.

:::warning Dados das capturas

Ao registrar o painel, oculte nomes, documentos e valores sensíveis que não sejam necessários para demonstrar a divergência.

:::
