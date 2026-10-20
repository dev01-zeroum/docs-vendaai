---
title: 'Retira'
slug: /manual-tecnico-dosan/retira
description: 'Fluxo técnico de retirada no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Retira"
  resumo="Tratamento das entregas retiradas pelo cliente ou por uma transportadora.">

**Retira** é um fluxo alternativo apresentado dentro do módulo Rotas para registros que não seguem a entrega convencional até o destinatário.

Essa aba depende da configuração e das permissões da operação. Por isso, pode não aparecer em todos os ambientes.

</ManualHeader>

## 1 - Consulta

A aba permite pesquisar e filtrar por transportadora, contratante e redespacho. A listagem apresenta o documento, a situação, o endereço, a chave da NF-e e a data relacionada.

| Informação | Uso no fluxo |
| --- | --- |
| Transportadora | Identifica quem realizará a retirada |
| Contratante | Mantém o vínculo comercial do documento |
| Redespacho | Registra o responsável intermediário, quando houver |
| Documento e chave da NF-e | Identificam a entrega e sua origem fiscal |
| Veículo e motorista | Comprovam quem recebeu os volumes |
| Data da retirada | Posiciona o evento no histórico operacional |

## 2 - Confirmação da retirada

<ListaCard>

1. Abra a ação **Visualizar** do registro.
2. Confira o pedido e a situação atual.
3. Informe ou confirme o veículo.
4. Informe ou confirme o motorista.
5. Verifique a data da retirada.
6. Confirme a operação.

</ListaCard>

## 3 - Agrupamento

Quando uma retirada reúne mais de um documento ou nota, a interface apresenta os registros relacionados para conferência antes da confirmação.

A confirmação deve considerar todo o conjunto exibido. Se apenas parte dos documentos for retirada, os registros restantes precisam continuar disponíveis e com o status anterior.

## 4 - Pontos para a TI validar

- status necessário para o registro aparecer na aba **Retira**;
- transportadora, contratante ou redespacho utilizados na classificação;
- obrigatoriedade de veículo, motorista e data;
- tratamento definido quando uma confirmação precisa ser corrigida;
- atualização correspondente no sistema de origem;
- data, usuário e resultado apresentados no histórico.

Os controles também devem impedir que a mesma retirada seja confirmada duas vezes e manter o vínculo com o documento fiscal mesmo quando houver reprocessamento da integração.

## 5 - Resultado esperado

Após a confirmação, o registro deve indicar que a retirada foi realizada, manter os dados do veículo e do motorista e registrar a data e o usuário responsável pela ação. Quando houver integração, a mudança deve ser enviada ao sistema de origem sem gerar uma nova entrega.

| Momento | Estado esperado |
| --- | --- |
| Antes da confirmação | Documento disponível e aguardando retirada |
| Durante a confirmação | Veículo, motorista e data validados |
| Após a confirmação | Retirada registrada e histórico atualizado |
| Sincronização | Resultado correlacionado ao documento no sistema de origem |

:::note Disponibilidade

A aba **Retira** não aparece em todos os ambientes. Sua exibição depende das permissões e da configuração adotada para a operação.

:::
