---
title: 'Contratantes'
slug: /manual-dosan/contratantes
description: 'Cadastro e consulta de contratantes no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<ManualHeader
  titulo="Contratantes"
  resumo="Empresas responsáveis pela contratação da operação logística.">

O módulo **Contratantes** reúne as empresas vinculadas às entregas e cargas processadas no Dosan.

</ManualHeader>

## Lista de contratantes

A listagem apresenta **nome**, **CPF/CNPJ**, **telefone**, **WhatsApp**, **e-mail**, **códigos da empresa e da filial**, situação ativa e informações de pendências financeiras e integrações com marketplaces.

Use a pesquisa para localizar um registro. O menu **Operações no Excel** permite trabalhar com os dados em planilha, conforme as permissões do usuário.

<ManualScreenshot
  src="https://i.imgur.com/KxIqOTX.png"
  alt="Lista anonimizada de contratantes com dados de identificação e contato"
/>

## Informações principais

<ListaCard>

- identificação pelo nome ou nome fantasia;
- CPF ou CNPJ;
- telefone, WhatsApp e e-mail;
- códigos da empresa e da filial no sistema de origem;
- situação ativa ou inativa;
- indicadores de pendências financeiras;
- integrações habilitadas para o cadastro.

</ListaCard>

## Criar um contratante

O formulário **Detalhes do Contratante** é dividido em três grupos:

### Geral

Reúne avatar, CPF/CNPJ, nome, nome fantasia, e-mail, contato, telefone ou WhatsApp, códigos, observação, distribuidor responsável e situação do cadastro. Também apresenta controles de pendências financeiras e integrações com marketplaces.

<ManualScreenshot
  src="https://i.imgur.com/mTtI1M0.png"
  alt="Parte inicial do formulário para criar um contratante"
/>

### Endereço

Contém CEP, endereço e número, complemento, cidade e estado.

### Informações adicionais

Permite definir valores ou percentuais de coleta e entrega para a operação e para o entregador.

## Como localizar ou cadastrar

<ListaCard>

1. Acesse **Contratantes** no menu lateral.
2. Utilize a pesquisa para verificar se a empresa já está cadastrada.
3. Para um novo registro, abra a opção de criação.
4. Preencha os dados gerais e o endereço.
5. Revise os códigos utilizados nas integrações.
6. Salve e confirme se o contratante aparece na listagem.

</ListaCard>

:::warning Evite cadastros duplicados

Antes de criar um contratante, pesquise pelo nome e pelo CPF/CNPJ. Cadastros duplicados podem separar entregas e históricos que pertencem à mesma empresa.

:::
