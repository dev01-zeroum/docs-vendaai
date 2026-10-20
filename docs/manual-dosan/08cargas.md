---
title: 'Cargas'
slug: /manual-dosan/cargas
description: 'Como criar e gerenciar cargas no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<ManualHeader
  titulo="Cargas"
  resumo="Agrupamento de entregas, controle de capacidade e emissão de romaneios.">

O módulo **Cargas** permite agrupar entregas em um veículo e acompanhar o preenchimento da carga.

</ManualHeader>

## Lista de cargas

A listagem apresenta o código, o status, o veículo, a quantidade de paletes, o indicador **% Carga** e os valores **cobrado**, **pago** e **total** da carga. O indicador **% Carga** mostra o percentual da capacidade do veículo que já está ocupado pela carga.

<ManualScreenshot
  src="https://i.imgur.com/TQOddUB.jpg"
  alt="Lista de cargas com status, percentual de ocupação e valores"
/>

O campo de pesquisa e os filtros avançados ajudam a localizar uma carga específica. O menu **Ações** reúne as opções liberadas para consulta, edição e geração de documentos.

<ManualScreenshot
  src="https://i.imgur.com/Y5NjIjO.jpg"
  alt="Menu de ações disponível para uma carga"
/>

## Criar uma carga

<ListaCard>

1. Selecione **Criar nova carga**.
2. Informe o veículo e a quantidade de paletes.
3. Defina o entregador responsável e a data da entrega.
4. Preencha as observações necessárias.
5. Adicione as entregas que participarão da carga.
6. Confira o peso, a capacidade e os valores consolidados.
7. Salve a carga.

</ListaCard>

## Detalhes e valores

O formulário apresenta os campos **Veículo**, **Qtde Paletes**, **Entregador Responsável**, **Data da Entrega**, **Observação** e **Observação interna**.

A seção **Valores da Carga** organiza cada descrição com o valor cobrado, o valor pago e o valor resultante. Utilize **Adicionar Valor** para incluir uma nova composição quando necessário.

## Entregas e capacidade

O formulário exibe as entregas relacionadas e a seção **Carga do Veículo**. Nela, você pode conferir o peso carregado, a capacidade máxima do veículo, o percentual ocupado e o peso que ainda está disponível. Os totais devem ser conferidos antes da liberação da carga.

Quando a capacidade em peso estiver cadastrada no veículo, o percentual corresponde à relação entre o **peso carregado** e a **capacidade máxima**. Por exemplo, uma carga de 500 kg em um veículo com capacidade de 1.000 kg representa **50% da carga**.

<ManualScreenshot
  src="https://i.imgur.com/0RxBk28.png"
  alt="Detalhes da carga com peso, percentual ocupado e capacidade disponível"
/>

## Romaneios

:::info Disponibilidade

Os romaneios dependem da integração com o **VendaAI**. O recurso fica habilitado para clientes que também utilizam o portal de vendas, pois as informações dos pedidos são cruzadas entre os dois sistemas.

:::

O módulo permite gerar documentos operacionais, incluindo **romaneio de separação** e **romaneio totalizador**.

## Conferência antes de salvar

- confirme o veículo e o entregador responsável;
- revise a data prevista para a entrega;
- verifique se todas as entregas corretas foram adicionadas;
- compare o peso carregado com a capacidade do veículo;
- confira o indicador **% Carga** e o saldo de peso disponível;
- valide os valores cobrados e pagos registrados na carga.

:::warning Capacidade do veículo

O indicador **% Carga** é uma referência direta da ocupação. Quando o peso se aproximar ou ultrapassar a capacidade informada no cadastro do veículo, revise a composição antes de liberar a operação.

:::
