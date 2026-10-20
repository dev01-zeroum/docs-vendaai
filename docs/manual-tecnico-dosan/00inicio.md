---
title: 'Manual Técnico do Dosan'
slug: /manual-tecnico-dosan
description: 'Referência técnica dos fluxos, cadastros, acessos, indicadores e integrações do Dosan.'
hide_title: true
---

import ManualHeader from '@site/src/components/manual/ManualHeader';
import LinksGrid from '@site/src/components/shared/LinksGrid';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualHeader
  titulo="Manual Técnico do Dosan"
  resumo="Referência dos fluxos, vínculos e integrações para a TI do cliente.">

Este manual apoia as equipes de **TI do cliente** e de **integração** na compreensão dos fluxos de **Carga**, **Entrega**, **Distribuição**, **Rotas** e **Retira**, além dos indicadores, cadastros, acessos e integrações que sustentam a operação logística do Dosan.

</ManualHeader>

:::info Público e objetivo

Use este conteúdo para entender dados, identificadores, transições de status, dependências entre módulos e pontos de diagnóstico. As orientações de uso diário permanecem no **Manual do Dosan**.

:::

## 1 - Fluxos documentados

<LinksGrid
  eyebrow="Referência técnica"
  titulo="Núcleos da operação"
  lead="Cada página explica dados, vínculos, resultados e validações de uma etapa central."
  items={[
    {icon: 'layers', titulo: 'Carga', desc: 'Agrupamento de entregas, capacidade e romaneios.', href: '/manual-tecnico-dosan/carga'},
    {icon: 'truck', titulo: 'Entrega', desc: 'Registro operacional, status e evidências.', href: '/manual-tecnico-dosan/entrega'},
    {icon: 'folder', titulo: 'Distribuição', desc: 'Atribuição das entregas à estrutura responsável.', href: '/manual-tecnico-dosan/distribuicao'},
    {icon: 'map', titulo: 'Rotas', desc: 'Ordenação, métricas e execução das paradas.', href: '/manual-tecnico-dosan/rotas'},
    {icon: 'box', titulo: 'Retira', desc: 'Fluxo alternativo de retirada e sua confirmação.', href: '/manual-tecnico-dosan/retira'},
    {icon: 'chart', titulo: 'Dashboard', desc: 'Filtros, consolidação dos indicadores e diagnóstico.', href: '/manual-tecnico-dosan/dashboard'},
    {icon: 'link', titulo: 'Status e integrações', desc: 'Ciclo dos registros, NF-e e rastreamento pelo Traccar.', href: '/manual-tecnico-dosan/status-integracoes'},
    {icon: 'list', titulo: 'Registros', desc: 'Cadastros de apoio, códigos e impactos operacionais.', href: '/manual-tecnico-dosan/registros'},
    {icon: 'gear', titulo: 'Administração', desc: 'Usuários, autorizações e validação de acessos.', href: '/manual-tecnico-dosan/administracao'},
  ]}
/>

## 2 - Como utilizar este manual

- localize o módulo em que a divergência foi percebida;
- identifique o registro pelo código da entrega, documento fiscal ou identificador recebido do sistema de origem;
- compare os vínculos e o resultado esperado descritos na página;
- consulte o histórico antes de repetir uma importação, distribuição ou sincronização;
- reúna as evidências indicadas para encaminhar o caso ao suporte, quando necessário.

## 3 - Relação entre os módulos

| Etapa | Objeto principal | Resultado esperado |
| --- | --- | --- |
| Entrada | Entrega | Documento disponível para tratamento no Dosan |
| Distribuição | Entrega distribuída | Responsável operacional e data definidos |
| Consolidação | Carga | Entregas agrupadas em um veículo |
| Planejamento | Rota | Paradas ordenadas para execução |
| Execução | Entrega em rota | Progresso e ocorrências atualizados |
| Conclusão | Evidência | Assinatura, fotos e resultado registrados |
| Alternativa | Retira | Retirada confirmada sem o fluxo convencional de entrega |
| Monitoramento | Dashboard | Indicadores consolidados conforme o responsável e o período |
| Cadastros de apoio | Registros | Códigos, capacidades e dados disponíveis para os fluxos |
| Controle de acesso | Administração | Usuários e autorizações compatíveis com cada função |

## 4 - Validações comuns

- uma entrega deve permanecer identificável em todas as etapas;
- mudanças de entregador, veículo, carga ou rota devem preservar o histórico;
- documentos e evidências precisam manter vínculo com a entrega de origem;
- ações em lote devem considerar exatamente os registros selecionados;
- integrações devem evitar duplicidade ao repetir uma importação ou atualização.

## 5 - Informações para diagnóstico

Ao analisar ou encaminhar uma divergência, reúna:

- ambiente e empresa em que o comportamento ocorreu;
- data e horário aproximados;
- código da entrega e número da nota fiscal, quando disponíveis;
- sistema de origem envolvido;
- status atual e resultado esperado;
- ação executada antes do problema;
- mensagem apresentada e captura de tela sem dados sensíveis.

:::warning Proteção de dados

Não inclua senhas, tokens, chaves de API ou documentos pessoais completos em capturas de tela, planilhas, logs ou chamados de suporte.

:::
