---
title: 'Distribuição'
slug: /manual-dosan/distribuicao
description: 'Como distribuir entregas para empresas, veículos e responsáveis no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<ManualHeader
  titulo="Distribuição"
  resumo="Preparação das entregas antes da criação ou execução das rotas.">

O módulo **Distribuição** permite selecionar uma ou várias entregas e direcioná-las para o entregador responsável pela operação.

</ManualHeader>

## Lista de entregas

A tela apresenta pesquisa, seleção de registros e informações como **status**, **código**, **token**, **número e série da nota fiscal**, **contratante**, **cliente**, **CPF/CNPJ**, **cidade**, **rua**, **bairro**, **estado** e **data da entrega**.

<ManualScreenshot
  src="https://i.imgur.com/6j1Q3sj.png"
  alt="Lista de entregas disponíveis para distribuição"
/>

## Pesquisa e filtros

Além da pesquisa rápida, os filtros avançados permitem refinar os registros por:

- cidade e estado;
- contratante;
- faixa de CEP;
- transportadora;
- status;
- data da entrega.

Utilize os filtros antes de marcar os registros. A seleção em lote deve conter somente as entregas que receberão o mesmo entregador, veículo e data.

## Ações disponíveis

Conforme as permissões da operação, a página apresenta as ações **Buscar NFe**, **Coletar e Alocar**, **Iniciar Entregas** e **Distribuir Selecionado(s)**.

### Buscar NF-e

A opção **Buscar NFe** consulta a nota fiscal vinculada ao pedido nos sistemas integrados. A nota pode ser obtida diretamente do **Protheus** ou do **VendaAI**, quando o pedido já possuir o documento fiscal disponível.

## Distribuir entregas

<ListaCard>

1. Localize e marque uma ou várias entregas.
2. Selecione a ação de distribuição.
3. Selecione o entregador responsável.
4. Selecione o veículo.
5. Defina a data da entrega.
6. Confirme a distribuição.

</ListaCard>

<ManualScreenshot
  src="https://i.imgur.com/8KHMzuQ.png"
  alt="Formulário para selecionar entregador, veículo e data da entrega"
/>

Após a confirmação, o entregador, o veículo e a data são aplicados a todas as entregas selecionadas, e o status é atualizado para refletir a etapa da distribuição.

## Resultado esperado

- todas as entregas marcadas recebem o responsável informado;
- o veículo selecionado fica vinculado aos registros;
- a data escolhida passa a representar a previsão da execução;
- as entregas ficam disponíveis para as próximas etapas da operação;
- a alteração pode ser conferida novamente na listagem e nos detalhes da entrega.

:::warning Substituição de informações

Se uma entrega já possuir veículo ou data de entrega, a nova distribuição substituirá esses dados pelos valores selecionados no formulário.

:::

Antes de confirmar uma nova distribuição, revise os registros selecionados para evitar a substituição acidental de informações já definidas.
