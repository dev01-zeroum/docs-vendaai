---
title: 'Administração'
slug: /manual-tecnico-dosan/administracao
description: 'Referência técnica para usuários, autorizações e validação de acessos no Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import ListaCard from '@site/src/components/shared/ListaCard';
import ManualScreenshot from '@site/src/components/manual/ManualScreenshot';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Administração"
  resumo="Usuários, autorizações e validação dos acessos ao ambiente.">

O módulo **Administração** reúne os recursos de controle de acesso do Dosan. Esta referência ajuda a TI do cliente a validar usuários, autorizações e diferenças de visualização entre perfis.

</ManualHeader>

## 1 - Usuários

A listagem de usuários apresenta **login**, **nome**, **sobrenome**, **autorizações**, **endereço de e-mail**, confirmação do e-mail, situação ativa e **data de criação**.

As ações principais da página são **Operações no Excel**, **Criar novo usuário** e **Selecionar Permissões** para os registros marcados.

<ManualScreenshot
  src="https://i.imgur.com/gDX6hwY.png"
  alt="Lista anonimizada de usuários e autorizações do ambiente"
/>

As ações observadas incluem:

- acessar o sistema como o usuário selecionado;
- editar o cadastro;
- configurar permissões;
- excluir o usuário, quando permitido.

:::warning Acesso como outro usuário

Utilize a opção de acessar o sistema como outro usuário somente em diagnósticos autorizados. Essa ação pode expor as mesmas informações disponíveis para o perfil selecionado e deve permanecer identificável nos registros de auditoria.

:::

## 2 - Fluxo básico de manutenção

<ListaCard>

1. Pesquise o usuário pelo login, nome ou e-mail.
2. Confira se o cadastro já existe e está ativo.
3. Abra **Ações** para editar o usuário necessário.
4. Utilize **Selecionar Permissões** para revisar os acessos concedidos.
5. Confirme se o usuário visualiza somente os módulos adequados à sua função.

</ListaCard>

## 3 - Áreas administrativas visíveis

Conforme o perfil, o menu também pode apresentar:

<ListaCard>

- **Unidades organizacionais**;
- **Autorizações**;
- **Logs de Auditoria**;
- **Configurações Visuais**;
- **Configurações**;
- **Notificação em massa**.

</ListaCard>

## 4 - Validações de acesso

Quando um usuário não visualizar um módulo ou não conseguir executar uma ação, confira:

- se o cadastro está ativo e o e-mail pertence ao usuário correto;
- se as autorizações necessárias foram associadas ao perfil;
- se o comportamento ocorre somente com esse usuário ou com todos os perfis equivalentes;
- se o acesso foi testado novamente após a alteração das permissões;
- se a tela ou ação esperada faz parte dos recursos habilitados no ambiente.

Ao encaminhar uma divergência, informe o login do usuário, a tela esperada, a ação indisponível e uma captura sem senhas ou dados pessoais completos.

:::warning Permissões

Alterações em usuários e autorizações afetam imediatamente as telas e ações disponíveis para a equipe. Realize essas mudanças somente com a aprovação do responsável pelo ambiente.

:::
