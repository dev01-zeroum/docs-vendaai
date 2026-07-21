---
title: 'Pedido'
slug: /manual-tecnico/pedido
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Pedido** reúne as configurações responsáveis por controlar o comportamento dos pedidos no **VendaAI**, permitindo definir regras relacionadas à precificação, estoque, impostos, frete, efetivação, validações e demais funcionalidades utilizadas durante o processo de venda.

## 1 - Funcionalidades

A seção **Funcionalidades** permite habilitar ou desabilitar recursos que influenciam diretamente o fluxo de criação, edição e integração dos pedidos.

<TelaParametro src="https://i.imgur.com/HdVOSgu.png" alt="Pedido - Funcionalidades" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Cálculo de impostos** – Habilita o cálculo de impostos durante o processamento do pedido.
- **Usar motivo de perda** – Permite informar o motivo quando um pedido ou oportunidade for perdida.
- **Tabela de preço por região** – Utiliza tabelas de preço distintas conforme a região do cliente.
- **Permitir múltiplo respeitando o saldo** – Obriga que a quantidade solicitada respeite o múltiplo definido e o saldo disponível.
- **Bloquear envio com limite excedido** – Impede o envio do pedido quando o limite permitido for ultrapassado.
- **Reservar estoque em pagamento Pix/Cartão** – Realiza a reserva do estoque para pedidos aguardando confirmação de pagamento via Pix ou Cartão.
- **Bloquear impressão sem taxas** – Impede a impressão do pedido caso as taxas obrigatórias não tenham sido calculadas.
- **Top Produtos** – Habilita a funcionalidade de destaque dos produtos mais vendidos.
- **Enviar e-mail para cliente de efetivação** – Envia automaticamente um e-mail ao cliente quando o pedido for efetivado.
- **Habilitar medidas no produto encomendado** – Permite informar medidas em produtos sob encomenda.
- **Somar frete no total sem taxas** – Considera o valor do frete no total do pedido desconsiderando as taxas.
- **Habilitar saldo flex do vendedor** – Permite utilizar o saldo flexível disponível para o vendedor.

- **Calcular taxas automaticamente ao salvar** – Executa o cálculo das taxas sempre que o pedido for salvo.
- **Pode alterar o preço do produto** – Permite ao usuário modificar o preço dos produtos no pedido.
- **Habilitar tabela de preço no item** – Permite selecionar uma tabela de preço individualmente para cada item.
- **Permitir múltiplo respeitando o lote inteiro** – Exige que a quantidade respeite o múltiplo considerando o lote completo.
- **Bloquear envio com data vencida** – Impede o envio de pedidos com data de validade expirada.
- **Exibir imagem do produto na busca** – Exibe a imagem dos produtos durante a pesquisa.
- **Adicionar valor do item bônus ao pedido** – Inclui o valor dos itens bonificados no valor total do pedido.
- **Mudar empresa ao copiar venda** – Permite alterar a empresa ao copiar um pedido existente.
- **Anexar PDF no e-mail de efetivação** – Envia um arquivo PDF do pedido juntamente com o e-mail de efetivação.
- **Habilitar cálculo de frete** – Ativa o cálculo automático do frete.
- **Somar custo do frete no frete** – Acrescenta o custo do frete ao valor final do frete apresentado.

- **Usar efetivação de pedido** – Habilita o processo de efetivação dos pedidos.
- **Pode alterar a tabela de preço** – Permite alterar a tabela de preços utilizada no pedido.
- **Habilitar OverPrice** – Ativa o controle de OverPrice durante a venda.
- **Alertar limites estourados ao salvar** – Exibe alertas caso algum limite seja excedido ao salvar o pedido.
- **Reserva de estoque no ERP** – Realiza a reserva de estoque diretamente no ERP.
- **Adicionar produto repetido** – Permite inserir o mesmo produto mais de uma vez no pedido.
- **Mix Sugerido** – Exibe sugestões de produtos com base no mix de vendas.
- **Atualizar estoque ao copiar venda** – Atualiza a disponibilidade de estoque ao copiar um pedido.
- **Validação do estoque ao integrar** – Valida a disponibilidade de estoque durante a integração com o ERP.
- **Usar frete no cálculo de desconto/acréscimo da condição de pagamento** – Considera o valor do frete no cálculo financeiro da condição de pagamento.
- **Atualizar preços ao copiar venda** – Atualiza automaticamente os preços dos produtos ao copiar um pedido.

</ListaCard>

## 2 - Valores Padrões

A seção **Valores Padrões** permite definir as configurações utilizadas como padrão na criação dos pedidos, estabelecendo parâmetros relacionados à precificação, transações, exibição de produtos, cálculo de descontos e limites operacionais.

<TelaParametro src="https://i.imgur.com/EcVKl0g.png" alt="Pedido - Valores Padrões" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Tabela de preço padrão** – Define a tabela de preços utilizada por padrão na criação dos pedidos.
- **Tipo de transação padrão** – Define o tipo de transação padrão utilizado nas vendas.
- **Tipo de transação para bonificação padrão** – Define o tipo de transação utilizado para pedidos de bonificação.
- **Modelo pedido perfil cliente** – Define o modelo de interface utilizado na criação de pedidos pelo perfil de cliente.
- **Modelo da busca de produto** – Define o formato da pesquisa de produtos.
- **Modelo da query na busca de produto** – Determina o modelo de consulta utilizado durante a pesquisa de produtos.
- **Modo de acréscimo/desconto da condição de pagamento** – Define como os acréscimos e descontos da condição de pagamento serão aplicados ao pedido.
- **Modo do cálculo de acréscimo/desconto** – Determina o método utilizado para calcular os acréscimos e descontos.
- **Modelo dos produtos na impressão** – Define o layout utilizado na impressão dos produtos do pedido.
- **Modelo de visualização do estoque** – Define como as informações de estoque serão apresentadas ao usuário.
- **Quantidade máxima de produtos** – Define o número máximo de itens permitidos em um pedido.

</ListaCard>

---

## 3 - Datas

A seção **Datas** permite configurar os prazos padrão utilizados na criação dos pedidos, controlando as datas de entrega e faturamento.

<TelaParametro src="https://i.imgur.com/7ECB1lQ.png" alt="Pedido - Datas" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Data de entrega D + X** – Define a quantidade de dias adicionados à data atual para sugerir a data de entrega.
- **Data de entrega mínima D + X** – Define o prazo mínimo permitido para a entrega dos pedidos.
- **Atualizar data se estiver vencida** – Atualiza automaticamente a data do pedido quando ela estiver vencida.
- **Data de faturamento mínima D + X** – Define o prazo mínimo para faturamento do pedido.

</ListaCard>

---

## 4 - E-mail

A seção **E-mail** permite configurar os endereços utilizados para o envio de notificações automáticas relacionadas aos pedidos.

<TelaParametro src="https://i.imgur.com/U9TwPCf.png" alt="Pedido - E-mail" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **E-mails para efetivação de pedidos** – Define os destinatários que receberão notificações quando um pedido for efetivado.
- **Bloquear envio e disparar e-mail para cliente inativo** – Impede o envio do pedido quando o cliente estiver inativo e envia uma notificação por e-mail aos responsáveis.
- **E-mail para produto sob encomenda** – Define os destinatários das notificações referentes a produtos sob encomenda.
- **E-mail para edição de pedido integrado** – Define os destinatários das notificações quando um pedido integrado for alterado.

</ListaCard>

---

## 5 - Bloqueios

A seção **Bloqueios** permite configurar as regras de validação aplicadas durante o processamento dos pedidos, controlando situações como limite de crédito, condições de pagamento e obrigatoriedade de preenchimento de campos.

<TelaParametro src="https://i.imgur.com/aSTxsMu.png" alt="Pedido - Bloqueios" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Modo do bloqueio** – Define o comportamento do sistema quando uma regra de bloqueio é identificada.
- **Exceções de condição de pagamento para bloqueio de limite de crédito** – Permite informar condições de pagamento que não serão consideradas na validação do limite de crédito.
- **Valor para bloqueio de limite de crédito** – Define quais valores serão considerados na validação do limite de crédito.
- **Campos obrigatórios no motivo de perda** – Define quais campos devem ser obrigatoriamente preenchidos ao registrar o motivo de perda do pedido.

</ListaCard>

---

## 6 - Descontos

A seção **Descontos** reúne as configurações responsáveis pelo controle das regras de desconto aplicadas aos pedidos.

<TelaParametro src="https://i.imgur.com/YAXCrwG.png" alt="Pedido - Descontos" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Momento da validação do bloqueio** – Define em qual etapa do processo o sistema realizará a validação dos descontos.
- **Cores no campo desconto** – Configura as cores utilizadas para indicar visualmente a situação do desconto informado.
- **Valor do desconto máximo no item** – Define o percentual ou valor máximo permitido de desconto por item.
- **Descontos sucessivos** – Permite aplicar mais de um desconto consecutivamente sobre o mesmo item.
- **Dias para ativar cupom** – Define a quantidade de dias necessários para que um cupom fique disponível para utilização.

</ListaCard>

---

## 7 - Preço Mínimo

A seção **Preço Mínimo** permite configurar as regras utilizadas para validação do menor preço permitido durante a venda.

<TelaParametro src="https://i.imgur.com/LxV0nBo.png" alt="Pedido - Preço Mínimo" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Preço mínimo calculado pela região do cliente** – Calcula o preço mínimo considerando a região cadastrada para o cliente.
- **Preço mínimo com desconto extra ao atingir peso mínimo** – Permite aplicar uma regra diferenciada de preço mínimo quando o pedido atingir o peso mínimo definido.

</ListaCard>

---

## 8 - Visualização

A seção **Visualização** permite personalizar as informações apresentadas nas telas relacionadas aos pedidos.

<TelaParametro src="https://i.imgur.com/p1V1IYv.png" alt="Pedido - Visualização" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Colunas a serem exibidas na listagem de pedidos** – Permite selecionar quais colunas serão apresentadas na consulta de pedidos.
- **Seções e campos a serem exibidos na tela do pedido** – Permite configurar quais seções e campos ficarão visíveis durante a criação ou edição de um pedido.
- **Campos somente leitura** – Permite selecionar os campos que poderão apenas ser visualizados, impedindo alterações pelos usuários.
- **Campos obrigatórios** – Define os campos que deverão ser obrigatoriamente preenchidos para permitir a criação ou alteração de um pedido.
- **Filtros avançados** – Configura os campos disponíveis para pesquisa avançada na listagem de pedidos.
- **Campos a serem visualizados nos pedidos ERP** – Permite selecionar quais informações serão exibidas na consulta de pedidos integrados ao ERP.

</ListaCard>

---

## 09 - Impressão

A seção **Impressão** reúne as configurações relacionadas à apresentação e impressão dos pedidos.

<TelaParametro src="https://i.imgur.com/QLrKlYJ.png" alt="Pedido - Impressão" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Exibir imagem do produto** – Inclui a imagem dos produtos na impressão do pedido.
- **Preço unitário a partir do total** – Calcula o preço unitário considerando o valor total do item.
- **Exibir status do estoque nas filiais** – Apresenta a disponibilidade de estoque em cada filial durante a impressão.
- **Exibir preço médio** – Exibe o preço médio dos produtos no documento impresso.
- **Status dos estoques nos armazéns** – Define quais status de estoque serão considerados na impressão.
- **Campos a serem visualizados na tela de impressão do pedido** – Permite selecionar quais informações serão exibidas na tela de impressão.
- **Bloquear impressão nos status** – Define os status do pedido nos quais a impressão será bloqueada.

</ListaCard>

## 10 - Exibição da Grid / Produtos

A seção **Exibição da Grid / Produtos** permite configurar a forma como os produtos são apresentados durante a criação e edição dos pedidos, definindo regras de visualização, cálculos, limites e comportamento da grade de itens.

<TelaParametro src="https://i.imgur.com/Da3qPFS.png" alt="Pedido - Exibição da Grid / Produtos" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Utilizar 2ª unidade de medida na quantidade** – Permite utilizar a segunda unidade de medida durante a definição da quantidade do item.
- **Utilizar 2ª unidade de medida no cálculo do preço** – Considera a segunda unidade de medida para o cálculo do valor do produto.
- **Exibir unidade de medida do produto na quantidade** – Exibe a unidade de medida ao lado do campo de quantidade.
- **Exibir unidade de medida do produto na 2ª quantidade** – Exibe a unidade de medida correspondente ao segundo campo de quantidade.
- **Travar botão de remover** – Impede que os itens adicionados ao pedido sejam removidos.
- **Tamanho padrão do zoom** – Define o percentual de zoom utilizado na exibição da grade de produtos.
- **Ordenação dos produtos** – Define o critério de ordenação dos itens na grade do pedido.
- **Casas decimais no campo Quantidade** – Define a quantidade de casas decimais permitidas para o campo de quantidade.
- **Casas decimais no campo Preço** – Define a quantidade de casas decimais utilizadas para exibição e cálculo do preço.
- **Casas decimais no cálculo** – Define a precisão decimal utilizada nos cálculos do pedido.
- **Valor máximo permitido na quantidade** – Determina a quantidade máxima que poderá ser informada para um item.
- **Atualizar preços após X dias** – Define o período para atualização automática dos preços dos produtos.
- **Adicionar o produto e avançar para o campo** – Define para qual campo o cursor avança ao adicionar um produto na grade (por exemplo, a linha de desconto).

</ListaCard>

---

## 11 - Assinatura

A seção **Assinatura** concentra as configurações utilizadas para autenticação junto aos serviços de assinatura eletrônica.

<TelaParametro src="https://i.imgur.com/3T4rXAt.png" alt="Pedido - Assinatura" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Token de autenticação com a CertSign** – Token utilizado para autenticação e comunicação com os serviços da CertSign.

</ListaCard>

---

## 12 - Margem

A seção **Margem** permite configurar as regras utilizadas para validação da margem de venda dos produtos.

<TelaParametro src="https://i.imgur.com/7fy6LwW.png" alt="Pedido - Margem" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Incluir frete FOB no custo do produto** – Considera o valor do frete FOB no cálculo do custo do produto.
- **Impedir pedido abaixo da margem** – Define a margem mínima permitida para aprovação do pedido.
- **Cores no campo margem** – Configura as cores utilizadas para indicar visualmente a situação da margem de venda.
- **Fórmula do cálculo da margem** – Define a fórmula utilizada para calcular a margem de cada item.
- **Fórmula do cálculo da margem geral** – Define a fórmula utilizada para calcular a margem total do pedido.
- **Ignorar tabelas no cálculo** – Permite desconsiderar determinadas tabelas durante o cálculo da margem.

</ListaCard>

---

## 13 - Comissão

A seção **Comissão** permite configurar as regras utilizadas para o cálculo e gerenciamento das comissões dos vendedores durante o processamento dos pedidos.

<TelaParametro src="https://i.imgur.com/J3CWF8S.png" alt="Pedido - Comissão" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Regra para o cálculo de comissão** – Define a regra utilizada para calcular a comissão dos vendedores.
- **Permitir editar comissão** – Permite que o valor ou percentual de comissão seja alterado manualmente durante a elaboração do pedido.

</ListaCard>

---

## 14 - Checkout

A seção **Checkout** permite personalizar as informações exibidas durante a finalização do pedido.

<TelaParametro src="https://i.imgur.com/wR4ou3r.png" alt="Pedido - Checkout" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Campos a serem exibidos no checkout** – Permite selecionar quais campos estarão disponíveis na etapa de finalização do pedido.

</ListaCard>

---

## 15 - Integração

A seção **Integração** reúne as configurações relacionadas ao envio e persistência de informações entre o **VendaAI** e os sistemas integrados.

<TelaParametro src="https://i.imgur.com/HqFU1au.png" alt="Pedido - Integração" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Persistir campos na integração** – Permite definir quais campos deverão manter seus valores durante o processo de integração entre os sistemas.

</ListaCard>

---

## 16 - Exportação

A seção **Exportação** permite configurar quais informações serão disponibilizadas nos arquivos de exportação do sistema.

<TelaParametro src="https://i.imgur.com/yeKT8rM.png" alt="Pedido - Exportação" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Campos a serem exportados na consulta Vendas + Produtos** – Permite selecionar os campos que serão incluídos na exportação das informações de vendas e respectivos produtos.

</ListaCard>

---

## 17 - Regras de Negócio

A seção **Regras de Negócio** permite definir validações obrigatórias durante o processo de criação e efetivação dos pedidos.

<TelaParametro src="https://i.imgur.com/fU6OUQW.png" alt="Pedido - Regras de Negócio" legenda="Aba Pedido na tela de Parâmetros do sistema" />

<ListaCard>

- **Exigir regra para tabela de preço** – Obriga a utilização de uma regra válida para a tabela de preços antes da conclusão do pedido.
- **Exigir regra para condição de pagamento** – Obriga a utilização de uma regra válida para a condição de pagamento selecionada.

</ListaCard>

