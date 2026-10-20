---
title: 'Status e integrações'
slug: /manual-tecnico-dosan/status-integracoes
description: 'Ciclo técnico dos registros e integrações relacionadas ao Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Status e integrações"
  resumo="Transições entre módulos e comunicação com sistemas externos.">

O fluxo técnico do Dosan depende da consistência dos status entre a **Entrega**, a **Distribuição**, a **Carga**, a **Rota** e os sistemas integrados.

</ManualHeader>

## 1 - Fluxo de referência

1. O documento de origem gera ou atualiza uma entrega no Dosan.
2. A entrega é preparada e distribuída para a operação responsável.
3. O registro é incluído em uma carga e associado a um veículo.
4. As entregas são ordenadas em uma rota.
5. O entregador executa as paradas e registra ocorrências ou evidências.
6. O resultado atualiza a entrega e pode retornar ao sistema de origem.

| Evento | Registro afetado | Informação que deve permanecer correlacionada |
| --- | --- | --- |
| Importação do pedido | Entrega | Código de origem, cliente e documento fiscal |
| Busca da NF-e | Entrega | Pedido, número, série e chave da nota |
| Distribuição | Entrega | Entregador, veículo e data |
| Inclusão em carga | Carga e entrega | Identificadores, peso, volumes e capacidade |
| Inclusão em rota | Rota e entrega | Responsável, sequência e localização |
| Conclusão | Entrega | Resultado, recebedor, evidências e horário |

## 2 - Identificadores de status e ocorrências

Os status utilizados pela entrega possuem **nome**, **descrição**, **cor**, **cor de fundo**, **código** e indicador de atividade. A alteração de um status existente deve considerar registros históricos e integrações que dependam de seu código.

Para a integração, o **código** é a referência mais estável. A descrição e as cores ajudam na leitura da interface, mas não devem ser utilizadas isoladamente para correlacionar estados entre sistemas.

### Motivos de não entrega

As ocorrências de entrega não realizada utilizam um cadastro próprio com **nome**, **descrição**, **código** e indicador de atividade. O código deve permanecer estável quando for consumido por integrações ou relatórios.

## 3 - Sistemas integrados

### VendaAI

O VendaAI pode fornecer pedidos ao Dosan e receber alterações de status. O mapeamento da operação precisa definir quais registros entram, quais identificadores são preservados e quais resultados retornam ao sistema de origem.

### Protheus e NF-e

A ação **Buscar NFe** pode consultar a nota fiscal no Protheus ou utilizar o documento já disponível no VendaAI. A atualização deve preservar o pedido de origem e evitar a criação de uma segunda entrega para a mesma nota.

### Traccar

O Traccar pode fornecer a localização utilizada pelo módulo Rastreio. Para diagnóstico, confira a associação entre motorista, veículo ou dispositivo, o horário da última posição e a disponibilidade do serviço.

<ManualScreenshot
  src="https://i.imgur.com/APoq9P8.jpg"
  alt="Tela de rastreio vinculada à configuração do Traccar"
/>

Quando nenhum motorista é retornado, a tela informa que não há responsáveis localizados e orienta a verificar a configuração do Traccar. Esse estado deve ser tratado como ausência de dados de rastreamento, não como ausência de entregas.

## 4 - Checklist de diagnóstico

- confirme se o código do documento de origem já existe no Dosan antes de repetir a importação;
- compare o status atual com o **Histórico de status**;
- confira a correlação entre entrega, carga, rota e documento fiscal;
- identifique a última sincronização concluída com sucesso;
- verifique se outra alteração ocorreu no mesmo registro durante o processamento;
- confirme se status ou motivos inativados ainda aparecem corretamente no histórico;
- registre a mensagem apresentada sem expor credenciais ou dados pessoais completos.

## 5 - Quando a sincronização falhar

1. Identifique o sistema de origem, o registro e o horário aproximado da tentativa.
2. Consulte o histórico para localizar o último estado confirmado.
3. Verifique se a entrega já foi importada com outro status, código ou documento fiscal.
4. Diferencie uma falha de comunicação de uma ocorrência operacional da entrega.
5. Reúna a mensagem exibida e os identificadores antes de solicitar um novo processamento.

Evite repetir várias vezes a mesma importação ou atualização sem conferir o resultado anterior, pois isso dificulta a identificação de duplicidades e divergências.

## 6 - Responsabilidade pelos dados

O mapeamento de status deve definir qual sistema é responsável por cada informação e como divergências são tratadas. O Dosan precisa manter a correlação entre o identificador interno da entrega, o documento fiscal e o código recebido do sistema de origem.

| Informação | Definição que a integração deve possuir |
| --- | --- |
| Pedido e documento fiscal | Sistema que cria ou atualiza o registro |
| Status operacional | Eventos que alteram o estado e sistema que recebe o retorno |
| Entregador, veículo e data | Módulo responsável pela atribuição mais recente |
| Evidências de entrega | Origem, armazenamento e disponibilidade para consulta |
| Localização | Serviço responsável e frequência esperada de atualização |

## 7 - Informações para o suporte

Ao encaminhar uma divergência, informe o código da entrega, pedido ou NF-e, status atual, status esperado, sistema de origem, data e horário, ação executada e mensagem apresentada. Quando possível, anexe uma captura anonimizada do histórico.

:::warning Credenciais e dados sensíveis

Não envie senhas, tokens, chaves de API ou documentos pessoais completos. Se uma validação exigir esse tipo de informação, combine um canal seguro com a equipe responsável.

:::

:::warning Configuração por ambiente

Os códigos e as transições dependem da integração contratada. Alterações no cadastro de status ou motivos devem ser comparadas com os mapeamentos utilizados pelo VendaAI, Protheus, Traccar e demais serviços habilitados.

:::
