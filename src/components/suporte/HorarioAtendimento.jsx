import React from 'react';

export default function HorarioAtendimento() {
  return (
    <div className="horario-bar" role="note">
      <span className="horario-bar__icon" aria-hidden="true">🕐</span>
      <span>
        <strong>Atendimento:</strong> Segunda a Sexta, das <strong>8h às 18h</strong>.
        Sábado e domingo fechado.
      </span>
    </div>
  );
}
