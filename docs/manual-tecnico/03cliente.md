---
title: 'Cliente'
slug: /manual-tecnico/cliente
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Cliente** reúne as configurações responsáveis por controlar o comportamento do cadastro, consulta e visualização dos clientes no **VendaAI**, permitindo definir regras de criação, permissões de acesso, compartilhamento entre vendedores e parâmetros de exibição das informações.

## 1 - Funcionalidades

A seção **Funcionalidades** permite configurar o comportamento do cadastro e da manutenção dos clientes no sistema.

<TelaParametro src="https://i.imgur.com/AuHP0IZ.png" alt="Cliente - Funcionalidades" legenda="Aba Cliente na tela de Parâmetros do sistema" />

<ListaCard>

- **Permitir edição de cliente** – Permite alterar as informações dos clientes já cadastrados.
- **Rota do cadastro** – Define a rota (tela) utilizada para criação e edição dos cadastros de clientes.
- **Cadastro de endereço com número no mesmo campo** – Permite que o endereço e o número sejam informados em um único campo.
- **Cadastrar novo cliente como ativo** – Define se novos clientes serão cadastrados automaticamente com o status **Ativo**.
- **Enviar notificação ao ativar cliente** – Envia uma notificação quando um cliente for alterado para o status ativo.
- **Habilitar cadastro exterior** – Permite o cadastro de clientes localizados no exterior.

</ListaCard>

---

## 2 - Visualização

A seção **Visualização** permite configurar quais clientes serão exibidos para os usuários e como ocorrerá o compartilhamento entre vendedores.

<TelaParametro src="https://i.imgur.com/rAIarJK.png" alt="Cliente - Visualização" legenda="Aba Cliente na tela de Parâmetros do sistema" />

<ListaCard>

- **Mostrar clientes inativos** – Permite exibir clientes com status inativo nas consultas.
- **Mostrar clientes do grupo para todos os vendedores** – Permite que todos os vendedores visualizem os clientes pertencentes ao mesmo grupo econômico.
- **Mostrar clientes inativos para todos os vendedores** – Permite que clientes inativos sejam visualizados por todos os vendedores.
- **Disponibilizar para todos os vendedores** – Compartilha a carteira de clientes entre todos os vendedores.
- **Mostrar para todos os vendedores após X dias sem vendas** – Define após quantos dias sem movimentação o cliente poderá ser visualizado por todos os vendedores.
- **Incluir novos clientes na liberação após X dias sem vendas** – Inclui automaticamente novos clientes no processo de liberação após o período informado sem movimentação comercial.

</ListaCard>

---

## 3 - Listagem (Visualização)

A seção **Listagem (Visualização)** permite personalizar as informações exibidas na consulta de clientes.

<TelaParametro src="https://i.imgur.com/pJj51fx.png" alt="Cliente - Listagem (Visualização)" legenda="Aba Cliente na tela de Parâmetros do sistema" />

<ListaCard>

- **Colunas exibidas na listagem de clientes** – Permite selecionar quais colunas serão apresentadas na tela de consulta dos clientes.

</ListaCard>

---

## 4 - Formulário (Visualização)

A seção **Formulário (Visualização)** permite personalizar os campos e seções exibidos na tela de cadastro e edição de clientes, além de definir quais informações serão obrigatórias ou poderão ser alteradas pelos usuários.

<TelaParametro src="https://i.imgur.com/NEyBBZb.png" alt="Cliente - Formulário (Visualização)" legenda="Aba Cliente na tela de Parâmetros do sistema" />

<ListaCard>

- **Seções e campos a serem visualizados na tela de clientes** – Permite selecionar quais seções e campos serão exibidos no formulário de cadastro e edição de clientes.
- **Campos obrigatórios** – Define quais campos deverão ser obrigatoriamente preenchidos durante o cadastro ou atualização de um cliente.
- **Campos editáveis** – Permite selecionar quais campos poderão ser alterados após o cadastro do cliente.

</ListaCard>

---

## 5 - Contatos (Visualização)

A seção **Contatos (Visualização)** permite configurar as regras aplicadas ao cadastro de contatos vinculados aos clientes.

<TelaParametro src="https://i.imgur.com/f1O09JY.png" alt="Cliente - Contatos (Visualização)" legenda="Aba Cliente na tela de Parâmetros do sistema" />

<ListaCard>

- **Campos obrigatórios no contato** – Permite definir quais informações deverão ser obrigatoriamente preenchidas durante o cadastro de um contato.

</ListaCard>

