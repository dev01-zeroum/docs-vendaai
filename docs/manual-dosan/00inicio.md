---
title: 'Manual do Dosan'
slug: /manual-dosan
description: 'Manual de uso do Dosan — visão geral dos módulos e dos fluxos da operação logística.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import LinksGrid from '@site/src/components/shared/LinksGrid';

<ManualHeader
  titulo="Manual do Dosan"
  resumo="Guia dos módulos e dos principais fluxos da operação logística.">

O **Dosan** centraliza o planejamento, a distribuição e o acompanhamento de entregas, desde a entrada dos documentos até a execução da rota pelo entregador.

</ManualHeader>

Este manual segue a ordem dos módulos no menu lateral do Dosan. Para entender a sequência da operação, consulte o **Fluxo principal** abaixo e acesse a página do módulo correspondente à atividade que será executada.

## Áreas da plataforma

<LinksGrid
  eyebrow="Navegação"
  titulo="Conteúdo do manual"
  lead="Acesse as orientações de uso de cada módulo do Dosan."
  items={[
    {icon: 'link', titulo: 'Acessando o Dosan', desc: 'Entrada na plataforma e recuperação de acesso.', href: '/manual-dosan/acesso'},
    {icon: 'home', titulo: 'Página Inicial', desc: 'Visão de entrada e atalhos para os módulos.', href: '/manual-dosan/pagina-inicial'},
    {icon: 'chart', titulo: 'Dashboard', desc: 'Indicadores e acompanhamento da operação.', href: '/manual-dosan/dashboard'},
    {icon: 'map', titulo: 'Rotas', desc: 'Planejamento, sequência de paradas e execução das rotas.', href: '/manual-dosan/rotas'},
    {icon: 'target', titulo: 'Rastreio', desc: 'Localização em tempo real dos motoristas integrados.', href: '/manual-dosan/rastreio'},
    {icon: 'layers', titulo: 'Distribuição', desc: 'Distribuição de entregas para a operação responsável.', href: '/manual-dosan/distribuicao'},
    {icon: 'truck', titulo: 'Entregas', desc: 'Consulta, filtros, documentos e conclusão das entregas.', href: '/manual-dosan/entregas'},
    {icon: 'box', titulo: 'Cargas', desc: 'Montagem de cargas, entregas vinculadas e romaneios.', href: '/manual-dosan/cargas'},
    {icon: 'briefcase', titulo: 'Contratantes', desc: 'Cadastro e consulta dos contratantes da operação.', href: '/manual-dosan/contratantes'},
    {icon: 'user', titulo: 'Uso em dispositivos móveis', desc: 'Execução de rotas e comprovação da entrega.', href: '/manual-dosan/aplicativo-movel'},
  ]}
/>

## Fluxo principal

1. As entregas entram no Dosan manualmente ou por integração.
2. A equipe localiza e seleciona as entregas que participarão da operação.
3. As entregas são distribuídas e agrupadas em cargas ou rotas.
4. O entregador acompanha a sequência de paradas pelo dispositivo móvel.
5. A entrega é concluída com as evidências exigidas pela operação.
6. O sistema atualiza os status e disponibiliza informações para acompanhamento.

:::tip Antes de iniciar

As opções exibidas no menu e as ações disponíveis em cada tela variam conforme o perfil do usuário e a configuração da empresa. Se uma função descrita neste manual não aparecer, confirme as permissões com o administrador do ambiente.

:::
