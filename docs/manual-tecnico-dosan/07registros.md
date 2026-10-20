---
title: 'Registros'
slug: /manual-tecnico-dosan/registros
description: 'Referência técnica dos cadastros de apoio e de seus impactos na operação do Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Registros"
  resumo="Cadastros de apoio, identificadores e impactos nos fluxos operacionais.">

O módulo **Registros** reúne os dados de apoio utilizados para formar cargas, distribuir entregas e executar rotas. Para a TI do cliente, esta área também ajuda a validar códigos, capacidades, vínculos e a disponibilidade dos registros consumidos pela operação.

</ManualHeader>

## 1 - Categorias disponíveis

Nessa área, estão disponíveis as seguintes categorias:

<ListaCard>

- **Veículos**
- **Endereços**
- **Cidades**
- **Estados**
- **Faixas de CEP**
- **Status da entrega**
- **Motivos de não entrega**

</ListaCard>

Cada categoria possui uma página própria para pesquisar, consultar e manter os dados utilizados pelos módulos operacionais do Dosan.

---

## 2 - Veículos

Como exemplo da seção de Registros, a área de **Veículos** permite consultar a frota cadastrada e incluir os veículos utilizados na operação.

### Informações do veículo

O cadastro reúne dados de identificação, documentação, capacidade e funcionalidades:

<ListaCard>

- tipo e corpo do veículo;
- nome, nome interno, placa e código;
- situação ativa ou inativa;
- RENAVAM e número do chassi;
- marca, modelo, versão, cor, ano de fabricação e ano do modelo;
- capacidade em peso, volume e paletes;
- altura máxima;
- refrigeração e limites de temperatura;
- presença de rastreador.

</ListaCard>

### Consultar veículos

A listagem permite pesquisar os veículos cadastrados e verificar informações como **nome**, **tipo de veículo**, **corpo do veículo**, **placa**, **RENAVAM**, **número do chassi**, **marca** e situação do cadastro.

Antes de cadastrar um novo veículo, pesquise pelo **nome**, **nome interno**, **placa** ou **código** para evitar duplicidades.

<ManualScreenshot
  src="https://i.imgur.com/NaM8ueb.png"
  alt="Exemplo anonimizado da pesquisa e da listagem de veículos"
  variant="compact"
/>

O botão azul com o símbolo **+**, localizado na parte superior, abre o formulário de um novo veículo.

### Criar um novo veículo

<ListaCard>

1. Acesse **Registros** no menu lateral.
2. Selecione **Veículos**.
3. Clique no botão azul com o símbolo **+**.
4. Preencha a identificação e os dados documentais do veículo.
5. Informe as capacidades de peso, volume e paletes utilizadas no planejamento das cargas.
6. Configure refrigeração, temperatura e rastreador quando esses recursos forem utilizados.
7. Defina se o veículo ficará ativo.
8. Revise os dados e clique em **Salvar**.

</ListaCard>

Na parte inicial do formulário, informe o tipo, o corpo do veículo, o nome, o código e o nome interno. Utilize a opção **Está ativo** para controlar a disponibilidade do cadastro na operação.

<ManualScreenshot
  src="https://i.imgur.com/plAyENW.png"
  alt="Formulário de veículo com os campos de identificação"
  variant="compact"
/>

Continue a rolagem do formulário para preencher as capacidades e as funcionalidades do veículo.

<ManualScreenshot
  src="https://i.imgur.com/U5Mmcf9.png"
  alt="Formulário de veículo com os campos de capacidade, refrigeração e rastreador"
  variant="compact"
/>

Após salvar, confirme se o veículo aparece na pesquisa e está disponível nas telas de **Distribuição**, **Cargas** e **Rotas**.

### Editar ou deletar um veículo

Localize o veículo na listagem e abra o menu **Ações**. A opção **Editar** permite alterar o cadastro; a opção **Deletar** remove o registro.

<ManualScreenshot
  src="https://i.imgur.com/TOZ1zNh.png"
  alt="Menu Ações de um veículo com as opções Editar e Deletar"
  variant="compact"
/>

Ao editar, revise principalmente a placa, as capacidades e a situação do cadastro, pois essas informações interferem diretamente no planejamento operacional.

:::warning Exclusão de veículo

Antes de utilizar **Deletar**, confirme se o veículo não está relacionado a entregas, cargas ou rotas. Quando for necessário apenas impedir novas utilizações, prefira desativar o cadastro.

:::

---

## 3 - Outros cadastros

### Endereços

O cadastro de endereços relaciona **cidade**, **nome**, **CEP**, **rua**, **bairro**, **número** e **complemento**.

### Cidades e estados

- **Cidades** — relaciona o estado, o nome, o código e a situação ativa;
- **Estados** — armazena nome, nome reduzido, código e situação ativa.

### Faixas de CEP

Permite cadastrar um intervalo com **nome**, **CEP inicial**, **CEP final**, **código** e situação ativa. A faixa pode ser utilizada nos filtros da Distribuição.

### Status da entrega

Cada status possui **nome**, **descrição**, **cores de apresentação**, **código** e situação ativa.

### Motivos de não entrega

Os motivos utilizados nas ocorrências possuem **nome**, **descrição**, **código** e situação ativa.

## 4 - Manutenção dos cadastros

As páginas de Registros seguem um fluxo semelhante de pesquisa, criação e manutenção.

<ListaCard>

1. Pesquise antes de criar um novo registro.
2. Confira o código utilizado pelas integrações.
3. Preencha os campos obrigatórios do cadastro.
4. Defina se o registro ficará ativo.
5. Salve e confirme sua disponibilidade no módulo operacional relacionado.

</ListaCard>

## 5 - Relação com a operação

| Cadastro | Onde é utilizado |
| --- | --- |
| Veículos | Distribuição, cargas, rotas e entregas |
| Endereços | Localização das entregas e planejamento das rotas |
| Cidades e estados | Filtros, endereços e agrupamento geográfico |
| Faixas de CEP | Seleção e organização dos registros na Distribuição |
| Status da entrega | Identificação da etapa atual de cada entrega |
| Motivos de não entrega | Registro do resultado de uma tentativa não concluída |

:::warning Alteração de cadastros utilizados

Antes de inativar ou alterar um registro, verifique se ele já está relacionado a entregas, cargas ou integrações. Sempre que possível, prefira a inativação à criação de um cadastro duplicado.

:::
