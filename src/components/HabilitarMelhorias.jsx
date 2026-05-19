import React from 'react';
import Link from '@docusaurus/Link';

export default function HabilitarMelhorias() {
  return (
    <div className="habilitar-grid">
      <article className="habilitar-card habilitar-card--padrao">
        <div className="habilitar-card__icon" aria-hidden="true">✓</div>
        <h3 className="habilitar-card__title">Melhoria de Produto Padrão</h3>
        <p className="habilitar-card__desc">
          Habilitação <strong>gratuita</strong>. Abra um chamado com a equipe
          de suporte pelo portal ou entre em contato pelo WhatsApp.
        </p>
        <div className="habilitar-card__actions">
          <Link
            to="https://zeroum.zumdesk.com.br"
            className="landing-button landing-button--primary">
            🎫 Abrir chamado
          </Link>
          <Link
            to="https://wa.me/5511974384612"
            className="habilitar-card__alt">
            💬 WhatsApp +55 11 97438-4612
          </Link>
        </div>
      </article>

      <article className="habilitar-card habilitar-card--modulado">
        <div className="habilitar-card__icon" aria-hidden="true">⚙</div>
        <h3 className="habilitar-card__title">Novo Recurso Modulado</h3>
        <p className="habilitar-card__desc">
          Demanda <strong>desenvolvimento dedicado</strong>. Fale com o time
          comercial pra contratar e combinar o cronograma.
        </p>
        <div className="habilitar-card__actions">
          <Link
            to="mailto:contato@itzeroum.com.br"
            className="landing-button landing-button--primary">
            ✉️ Entrar em contato!
          </Link>
          <span className="habilitar-card__alt habilitar-card__alt--static">
            contato@itzeroum.com.br
          </span>
        </div>
      </article>
    </div>
  );
}
