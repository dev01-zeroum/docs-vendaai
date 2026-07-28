import React from 'react';
import Icon from '@site/src/components/shared/Icon';

export default function HorarioAtendimento() {
  return (
    <div className="horario-bar" role="note">
      <span className="horario-bar__icon">
        <Icon name="clock" size={20} />
      </span>
      <span>
        <strong>Atendimento:</strong> Segunda a Sexta, das <strong>8h às 18h</strong>.
        Sábado e domingo fechado.
      </span>
    </div>
  );
}
