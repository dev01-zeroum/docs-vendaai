---
title: 'Título'
slug: /manual-tecnico/titulo
hide_title: true
---

import ManualTabHeader from '@site/src/components/manual-tecnico/ManualTabHeader';
import TelaParametro from '@site/src/components/manual-tecnico/TelaParametro';
import ListaCard from '@site/src/components/shared/ListaCard';

<head>
  <meta name="robots" content="noindex, nofollow" />
</head>

<ManualTabHeader />

A aba **Título** reúne as configurações relacionadas à gestão de títulos financeiros e cobrança no **VendaAI**, permitindo definir regras para cálculo de encargos, notificações de vencimento e fluxo de cobrança.

## 1 - Títulos

A seção **Títulos** permite configurar os parâmetros utilizados no processo de cobrança e acompanhamento dos títulos financeiros.

<TelaParametro src="https://i.imgur.com/GlzzNJw.png" alt="Título - Títulos" legenda="Aba Título na tela de Parâmetros do sistema" />

<ListaCard>

- **Liberar pagamento após X dias** – Define após quantos dias de atraso o pagamento de um título vencido volta a ser processado.
- **Multa por atraso (%)** – Percentual de multa aplicado sobre títulos pagos após o vencimento.
- **Juros por dia de atraso (%)** – Percentual de juros cobrado por dia de atraso no pagamento do título.
- **Habilitar cobrança automática** – Ativa o envio automático de lembretes e cobranças dos títulos.
- **Avisar X dias antes do vencimento** – Define com quantos dias de antecedência o cliente é avisado do vencimento.
- **Intervalo entre e-mails (dias)** – Define o intervalo, em dias, entre os e-mails de cobrança enviados.
- **Iniciar negociação após X dias de atraso** – Define após quantos dias de atraso o título entra em processo de negociação.
- **Não notificar atraso maior que X dias** – Interrompe as notificações de cobrança para títulos com atraso acima do limite informado.
- **Funil de cobrança** – Define o funil do CRM utilizado no processo de cobrança.
- **Etapa inicial do funil de cobrança** – Define a etapa em que os títulos entram ao iniciar a cobrança.

</ListaCard>
