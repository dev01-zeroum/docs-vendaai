---
title: 'Atualizações - Ago/26'
description: 'Atualizações ZEROUM de Agosto/2026 — melhorias de produto padrão e novos recursos modulados do VendaAI.'
hide_title: true
---

import BoletimHeader from '@site/src/components/boletim/BoletimHeader';
import HabilitarMelhorias from '@site/src/components/HabilitarMelhorias';
import Selo from '@site/src/components/shared/Selo';

<BoletimHeader dataPublicacao="agosto de 2026">

Este documento apresenta melhorias padrão e novos recursos modulados disponibilizados no **VendaAI**, com foco em facilitar o uso e oferecer mais recursos operacionais aos usuários.

</BoletimHeader>

---

## Melhorias de Produto Padrão

As melhorias abaixo já estão prontas e podem ser habilitadas gratuitamente sob demanda. Todas passam por validação junto ao time de suporte e testes antes da ativação definitiva.

---

### 1. Tela de Login com carrossel

<Selo tipo="padrao" />

A tela de login do VendaAI ganhou um novo layout com carrossel de imagens, permitindo que cada empresa personalize a página de acesso com a sua identidade visual, campanhas e comunicados.

![Tela de Login com carrossel](https://imgur.com/ONirQtN.png)

**Menu → Administração → Configurações Visuais → Tela de login**

Basta escolher entre o layout **Clássico** e o layout **Carrossel** e adicionar até 5 imagens nos formatos JPG, PNG ou WEBP, que são ajustadas automaticamente pelo sistema. Enquanto nenhuma imagem for cadastrada, o carrossel apresenta uma imagem padrão do VendaAI. O carrossel é exibido em computadores; em tablets e celulares, a tela mostra apenas o formulário de acesso, como em um aplicativo.

Com essa melhoria, a tela de login passa a ser também um espaço de comunicação com a equipe, reforçando a marca da empresa logo no primeiro acesso.

---

### 2. Horários de Acesso por autorização

<Selo tipo="padrao" />

O VendaAI passa a permitir a definição de horários de acesso ao sistema por autorização, garantindo que os usuários acessem a plataforma somente nos dias e períodos permitidos pela empresa.

![Horários de Acesso](https://imgur.com/xA0PtWj.png)

**Menu → Administração → Autorizações → Horários de Acesso**

Para cada autorização, basta ativar a opção e selecionar os dias da semana liberados, informando o horário de início e de término do acesso. Com a opção **Copiar para todos**, o mesmo horário é aplicado a todos os dias de uma só vez.

Com essa melhoria, a empresa ganha mais controle sobre o uso do sistema, alinhando o acesso dos usuários à jornada de trabalho de cada equipe.

---

## Novos Recursos Modulados

### 3. Roteirização

<Selo tipo="modulado" />

Sua equipe comercial na rua com o roteiro certo, todos os dias. Com a Roteirização do VendaAI, o gestor monta as rotas em poucos cliques, o sistema sugere os clientes que mais valem a visita e o vendedor recebe a agenda pronta: menos quilômetros rodados, mais clientes atendidos e mais pedidos fechados.

![Roteirização](https://imgur.com/l3R9siZ.png)

**Menu → Roteirização → Planejamento**

Basta escolher o vendedor e o dia. Com o botão **Sugerir rota**, o VendaAI monta automaticamente a melhor sequência de visitas, já com horário previsto de chegada e saída, tempo em cada cliente, distância entre as paradas e prioridade de cada visita. O gestor pode ajustar a ordem como preferir antes de publicar a rota para o vendedor.

O resumo mostra na hora o total de paradas, a distância e o tempo estimados, e avisa quando algum cliente não coube na jornada do dia.

Na hora de incluir clientes, o VendaAI indica quem visitar:

- Clientes próximos ao vendedor ou à rota já montada, com raio de busca configurável
- Clientes com visita prevista para o dia ou há mais tempo sem visita
- Clientes que costumam comprar naquele dia da semana
- Clientes Curva A e de maior potencial de compra
- Clientes sem pedido recente, para recuperar vendas
- Clientes de rotas vizinhas, aproveitando o deslocamento

![Roteirização 2](https://imgur.com/wRuRLjh.png)

E nada de começar do zero: as rotas anteriores ficam disponíveis por dia, semana ou mês, com taxa de conclusão, pedidos realizados e distância percorrida, e podem ser copiadas para novos dias.

**Regras de cadastro que organizam e automatizam as visitas**

O grande diferencial está nas regras definidas no cadastro do vendedor e do cliente. Configuradas uma única vez, elas passam a ser respeitadas em todas as sugestões de rota.

**Menu → Registros → Vendedores → Roteirização**

![Roteirização - Vendedor](https://imgur.com/69YHRyc.png)

- Jornada de trabalho e horário de almoço
- Máximo de visitas por dia e duração padrão da visita
- Dias da semana em que o vendedor atende
- Endereço de partida das rotas (se não informado, a rota parte da filial)

**Menu → Clientes → Editar perfil de rota do cliente**

![Roteirização - Perfil de rota do cliente](https://imgur.com/QUPS807.png)

- Prioridade de visita: Baixa, Normal, Alta ou Crítica
- Frequência de visita: Semanal, Quinzenal, Mensal, Sob demanda ou Personalizada
- Janela de atendimento, ou seja, o horário em que o cliente recebe o vendedor, e duração média da visita
- Dias preferenciais de visita e dias de compra
- Endereço preferido para a visita
- Acompanhamento da última visita e da próxima visita prevista

Para agilizar a implantação, o perfil de rota pode ser aplicado a vários clientes de uma só vez, pela opção **Editar perfil de rota do cliente em massa**.

**Menu → Roteirização → Rota do dia**

Com a rota publicada, o vendedor tem tudo na mão: as visitas em sequência, com horário previsto, tempo de permanência e status de cada parada. Direto da visita, ele faz o check-in, consulta o cadastro, liga para o cliente, abre o endereço no mapa e já inicia o pedido, sem sair da rota.

![Roteirização 3](https://imgur.com/mewpAed.png)

Pela aba **Mapa**, a execução é acompanhada de perto: visitas concluídas e pendentes, progresso da rota, pedidos realizados, quilômetros percorridos e próxima visita, com acesso direto à navegação.

Com a Roteirização, sua empresa ganha tempo no planejamento, reduz custos de deslocamento e transforma mais visitas em pedidos, com visibilidade total da produtividade da equipe em campo.

---

### 4. Painel de E-mail, WhatsApp, Telegram e Instagram

<Selo tipo="modulado" />

O VendaAI passa a centralizar o atendimento aos clientes em um único ambiente, integrando e-mail, WhatsApp, Telegram e Instagram ao CRM e permitindo que a equipe acompanhe todas as conversas sem sair do sistema.

![Integração de canais](https://imgur.com/3cvlRi4.png)

**Menu → Conversas → Canais de atendimento**

Nos canais de atendimento, é possível conectar números de WhatsApp pelo QR code ou pela API oficial do WhatsApp Business (Meta Cloud API), com modelos de mensagem aprovados, além de bots do Telegram e contas do Instagram para mensagens diretas. Cada canal apresenta o seu status de conexão e pode ser editado, ter membros definidos, ser atualizado ou desconectado.

![Integração de canais 2](https://imgur.com/WdjwklZ.png)

**Menu → Conversas → Conversas**

As conversas ficam organizadas entre aguardando atendimento, em atendimento e em atendimento automático por bot, com busca por nome, telefone ou mensagem. Ao selecionar uma conversa, o sistema apresenta o cliente, os contatos e o negócio vinculados, mantendo o histórico comercial junto ao atendimento.

![Integração de canais 3](https://imgur.com/3kG0OzS.png)

**Menu → Conversas → Caixa de entrada**

Na caixa de entrada, as contas de e-mail são conectadas ao VendaAI, com a escolha das pastas sincronizadas, configurações de sincronismo, remetentes para envio e Cco inteligente, centralizando também a comunicação por e-mail.

Com essa integração, o relacionamento com o cliente fica concentrado em um só lugar, agilizando o atendimento e dando mais visibilidade sobre as negociações em andamento.

---

## Habilitar Melhorias

<HabilitarMelhorias />
