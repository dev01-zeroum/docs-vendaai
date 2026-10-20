---
title: 'Entregas'
slug: /manual-dosan/entregas
description: 'Consulta e acompanhamento das entregas no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<ManualHeader
  titulo="Entregas"
  resumo="Consulta, preparação, execução e comprovação das entregas.">

O módulo **Entregas** concentra os documentos da operação e as ações utilizadas do recebimento até a conclusão da entrega.

</ManualHeader>

## Lista e pesquisa

A listagem permite pesquisar registros, ler um QR Code e aplicar filtros por **status**, **distribuidor**, **entregador**, **contratante**, **transportadora**, **redespacho**, **veículo** e **data da entrega**. Também é possível exibir somente as entregas atrasadas.

Entre as informações exibidas estão **status**, **número e série da nota fiscal**, **endereço**, **contratante**, **cliente**, **entregador responsável**, **datas de emissão e recebimento**, **código**, **token** e **volumes**.

<ManualScreenshot
  src="https://i.imgur.com/Xq8iJQa.png"
  alt="Lista de entregas com pesquisa e ações operacionais"
/>

### Pesquisa convencional

O campo de pesquisa pode ser utilizado para localizar as entregas pelos dados disponíveis na listagem, como o nome do cliente, número da nota fiscal, código ou token. Os filtros avançados ajudam a restringir o resultado por responsável, período e situação da entrega.

<ManualScreenshot
  src="https://i.imgur.com/nXVSpHH.png"
  alt="Filtros avançados disponíveis na lista de entregas"
/>

### Busca por QR Code

A opção **Buscar QR Code** permite localizar rapidamente um pedido por meio do código apresentado nas impressões geradas para a entrega. Depois da leitura, o Dosan identifica o registro correspondente na listagem.

<ManualScreenshot
  src="https://i.imgur.com/A09ffHa.png"
  alt="Janela de busca de uma entrega por QR Code"
/>

## Ações por entrega

O menu **Ações** de cada registro pode disponibilizar:

- **Visualizar** — abre os detalhes sem entrar no modo de edição;
- **Editar** — abre o formulário para usuários autorizados;
- **Etiqueta** — gera a identificação da entrega;
- **Histórico de status** — apresenta as mudanças registradas;
- **Deletar** — remove o registro, quando permitido.

<ManualScreenshot
  src="https://i.imgur.com/IcU613J.png"
  alt="Menu de ações disponível em uma entrega"
/>

:::warning Exclusão de entrega

Antes de utilizar **Deletar**, confirme se o registro não participa de uma carga ou rota e se o histórico não precisa ser preservado. Quando a intenção for corrigir dados, utilize a edição ou o fluxo operacional adequado.

:::

## Ações em lote

Conforme as permissões e os recursos habilitados no ambiente, a tela pode disponibilizar ações para:

- importar ou exportar dados pelo Excel;
- imprimir etiquetas;
- alterar o veículo;
- gerar romaneio de pedido, romaneio de separação e romaneio totalizador;
- buscar NF-e;
- escanear documentos;
- iniciar entregas;
- distribuir registros selecionados.

As ações são aplicadas às entregas marcadas na primeira coluna da tabela. Antes de executar uma operação em lote, confirme se todos os registros selecionados pertencem ao mesmo contexto operacional.

## Mapa de entregas

Conforme a configuração da operação, a página **Entregas** disponibiliza uma visualização em mapa. Ela considera o dia ou o período informado nos filtros e apresenta os pedidos que ainda não possuem um entregador associado.

Utilize esse mapa para conferir a distribuição geográfica dos pedidos antes de realizar a atribuição. A função pode não aparecer ou ficar sem registros quando não estiver habilitada ou quando nenhum pedido atender aos filtros.

:::note Mapa de entregas e Rastreio

O **Mapa de entregas** apoia o planejamento dos pedidos ainda sem entregador. O módulo **Rastreio**, disponível no menu lateral, acompanha em tempo real os motoristas integrados ao serviço de localização.

:::

## Romaneios

:::info Disponibilidade

Os romaneios dependem da integração com o **VendaAI**. O recurso fica habilitado para clientes que também utilizam o portal de vendas, pois as informações dos pedidos são cruzadas entre os dois sistemas.

:::

O menu de romaneios disponibiliza três formatos de impressão:

<ManualScreenshot
  src="https://i.imgur.com/C9d9mmh.png"
  alt="Menu com os três formatos de romaneio"
/>

### Romaneio de pedido

Apresenta os dados gerais de um pedido, incluindo empresa, data da entrega, nota fiscal, pedido no ERP e a relação dos produtos com código, descrição, unidade, quantidade, preço e peso.

<ManualScreenshot
  src="https://i.imgur.com/eDHUfLe.png"
  alt="Exemplo anonimizado de romaneio de pedido"
  variant="document"
/>

### Romaneio de separação

Agrupa os produtos que precisam ser separados e conferidos para a operação. O documento mostra a quantidade de cada produto e sua distribuição entre notas, pedidos e destinatários, além de unidade, paletes, volumes e peso.

<ManualScreenshot
  src="https://i.imgur.com/cojZxzE.png"
  alt="Exemplo anonimizado de romaneio de separação"
  variant="document"
/>

### Romaneio totalizador

Consolida todas as entregas selecionadas e apresenta os totais da operação, como quantidade de entregas e itens, peso, paletes, volumes e valores. A listagem também identifica pedido, nota, destinatário, cidade e ordem de cada entrega.

<ManualScreenshot
  src="https://i.imgur.com/W9BkdTv.png"
  alt="Exemplo anonimizado de romaneio totalizador"
  variant="document"
/>

## Detalhes da entrega

A página de detalhes é dividida em **Contratante**, **Sobre a Entrega**, **Endereço da Entrega** e **Informações complementares**.

Entre os campos apresentados estão responsáveis pela coleta, distribuição e entrega; status; data; dados de contato do cliente; prioridade; alerta por e-mail; retirada; sequência da rota; valores; transportadora; redespacho; veículo; endereço; códigos de identificação e rastreio; nota fiscal; volumes; peso; observações e mensagem da nota.

## Informações que devem ser conferidas

- destinatário e endereço completo;
- número e série da nota fiscal;
- quantidade de volumes e peso;
- entregador, veículo e data da entrega;
- status atual e histórico de alterações;
- observações e instruções registradas para a operação.

## Concluir uma entrega

<ListaCard>

1. Abra a entrega correspondente à parada atual.
2. Confira os dados do destinatário e da carga.
3. Informe o nome e o documento do recebedor, quando exigidos.
4. Registre a assinatura e as fotos obrigatórias.
5. Confirme se a entrega foi realizada, não realizada ou reprogramada.
6. Verifique se o status foi atualizado.

</ListaCard>

As evidências podem incluir assinatura, comprovante, imagens e localização no mapa.

:::warning Antes de concluir

Confira o resultado selecionado e as evidências anexadas. A conclusão atualiza o status da entrega e pode ser sincronizada com os sistemas integrados.

:::
