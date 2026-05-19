---
sidebar_position: 1
title: 'Suporte e Dúvidas de Uso'
description: 'Canais oficiais de suporte do VendaAI — abrir chamado, e-mail e WhatsApp.'
hide_table_of_contents: true
---

import HorarioAtendimento from '@site/src/components/suporte/HorarioAtendimento';
import CanaisGrid from '@site/src/components/shared/CanaisGrid';
import OutrosCanais from '@site/src/components/shared/OutrosCanais';

# Suporte e Dúvidas de Uso

Está com dúvida sobre o **VendaAI** ou precisa de suporte técnico? Nossa equipe está pronta pra ajudar — escolha o canal que preferir abaixo.

<HorarioAtendimento />

<CanaisGrid
  eyebrow="Canais de atendimento"
  titulo="Escolha o melhor canal pra você"
  lead="Cada canal atende um tipo de demanda. Use o que faz mais sentido pro seu caso."
  canais={[
    {
      icon: '🎫',
      titulo: 'Abrir chamado',
      desc: 'Pra problemas técnicos, configurações ou habilitação de melhorias padrão. Acompanhamento via portal.',
      ctaLabel: 'Abrir chamado',
      href: 'https://zeroum.zumdesk.com.br',
    },
    {
      icon: '✉️',
      titulo: 'Enviar e-mail',
      desc: 'Pra dúvidas pontuais ou quando preferir um registro escrito da conversa.',
      ctaLabel: 'Enviar e-mail',
      href: 'mailto:suporte@vendaai.com.br',
    },
    {
      icon: '💬',
      titulo: 'WhatsApp',
      desc: 'Pra atendimento direto e mais imediato pelo nosso whatsapp oficial.',
      ctaLabel: 'Conversar no WhatsApp',
      href: 'https://wa.me/5511974384612',
    },
  ]}
/>

<OutrosCanais
  titulo="Não é com o suporte?"
  canais={[
    {
      to: '/fale-conosco/comercial',
      icon: '💼',
      titulo: 'Comercial',
      desc: 'Pra contratar novos recursos modulados ou montar pacotes personalizados.',
    },
    {
      to: '/fale-conosco/sugestoes',
      icon: '💬',
      titulo: 'Sugestões',
      desc: 'Tem uma ideia pro VendaAI? A gente lê tudo e prioriza as mais pedidas.',
    },
  ]}
/>
