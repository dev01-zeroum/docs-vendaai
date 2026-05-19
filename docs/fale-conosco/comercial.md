---
title: 'Comercial'
description: 'Fale com a equipe comercial ZEROUM para contratar recursos, montar pacotes e tirar dúvidas sobre o VendaAI.'
hide_table_of_contents: true
---

import ServicosCards from '@site/src/components/comercial/ServicosCards';
import ContatoCard from '@site/src/components/shared/ContatoCard';
import OutrosCanais from '@site/src/components/shared/OutrosCanais';

# Comercial

Se você se interessou pelas melhorias, novas funcionalidades ou atualizações apresentadas nas **Atualizações ZEROUM** e deseja implementá-las em sua operação, **nosso time comercial está pronto pra ajudar**. Apresentamos os detalhes de cada recurso, opções de contratação e pacotes personalizados pro seu cenário.

<ServicosCards />

<ContatoCard
  eyebrow="Fale com a gente"
  titulo="Equipe comercial ZEROUM"
  role="Solicite sua melhoria!"
  nome="Equipe comercial"
  email="contato@itzeroum.com.br"
  avatar="M"
  ctaLabel="Enviar e-mail"
/>

<OutrosCanais
  titulo="Não é com o comercial?"
  canais={[
    {
      to: '/fale-conosco/duvidas',
      icon: '🛟',
      titulo: 'Suporte técnico',
      desc: 'Dúvidas de uso, configurações ou habilitação de melhorias padrão.',
    },
    {
      to: '/fale-conosco/sugestoes',
      icon: '💬',
      titulo: 'Sugestões',
      desc: 'Tem uma ideia pro VendaAI? A gente lê tudo e prioriza as mais pedidas.',
    },
  ]}
/>
