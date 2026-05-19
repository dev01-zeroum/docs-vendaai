---
sidebar_position: 3
title: 'Sugestões'
description: 'Envie sua sugestão de melhoria para o VendaAI — sua ideia pode entrar nas próximas edições das atualizações.'
hide_table_of_contents: true
---

import PorQueImportam from '@site/src/components/sugestoes/PorQueImportam';
import JaImplementadas from '@site/src/components/sugestoes/JaImplementadas';
import CtaCard from '@site/src/components/shared/CtaCard';
import OutrosCanais from '@site/src/components/shared/OutrosCanais';

# Sugestões

Tem alguma ideia pro **VendaAI**? A gente quer ouvir. Suas sugestões ajudam a moldar as próximas edições das atualizações e a definir o que vem por aí.

<PorQueImportam />

<CtaCard
  titulo="Envie sua sugestão"
  desc="Descreva sua ideia em detalhes — quanto mais contexto, melhor pra entendermos e priorizarmos no roadmap."
  ctaLabel="✉️ Enviar sugestão"
  ctaTo="mailto:contato@itzeroum.com.br?subject=Sugestão para o VendaAI"
/>

<JaImplementadas />

<OutrosCanais
  titulo="Outros canais"
  canais={[
    {
      to: '/fale-conosco/duvidas',
      icon: '🛟',
      titulo: 'Suporte técnico',
      desc: 'Dúvidas de uso, configurações ou problemas com o sistema.',
    },
    {
      to: '/fale-conosco/comercial',
      icon: '💼',
      titulo: 'Comercial',
      desc: 'Pra contratar novos recursos ou montar pacotes personalizados.',
    },
  ]}
/>
