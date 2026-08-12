import { useState } from 'react';
import { perfilEstudiante } from '../../data/contenido';

function mensajeSegunPorcentaje(pct) {
  if (pct >= 80) return 'Esta modalidad parece hecha para ti.';
  if (pct >= 50) return 'Tienes buena parte del perfil. Vale la pena explorarla.';
  if (pct > 0) return 'Comparte algunos rasgos, pero investiga más antes de decidir.';
  return 'Selecciona los rasgos con los que te identificas para ver tu resultado.';
}

export function PerfilEstudiante() {
  const [marcados, setMarcados] = useState(() => new Set());

  function toggle(rasgo) {
    setMarcados((prev) => {
      const next = new Set(prev);
      if (next.has(rasgo)) next.delete(rasgo);
      else next.add(rasgo);
      return next;
    });
  }

  const porcentaje = Math.round((marcados.size / perfilEstudiante.length) * 100);

  return (
    <section id="perfil" className="section section-alt">
      <div className="container">
        <p className="spec-label">Perfil del estudiante</p>
        <h2 className="section-title">¿A quién le queda bien esta modalidad?</h2>
        <p className="section-note">
          Marca los rasgos con los que te identificas y descubre qué tanto encajas.
        </p>

        <ul className="checklist checklist-interactive">
          {perfilEstudiante.map((rasgo, i) => {
            const activo = marcados.has(rasgo);
            return (
              <li key={i}>
                <button
                  type="button"
                  className={`check-item${activo ? ' check-item-active' : ''}`}
                  aria-pressed={activo}
                  onClick={() => toggle(rasgo)}
                >
                  <span className="check-box" aria-hidden="true">
                    {activo ? '✓' : ''}
                  </span>
                  {rasgo}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="spec-card result-card">
          <div className="progress-track" role="progressbar" aria-valuenow={porcentaje} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-fill" style={{ width: `${porcentaje}%` }} />
          </div>
          <p className="result-text">
            <strong>{porcentaje}%</strong> de coincidencia · {mensajeSegunPorcentaje(porcentaje)}
          </p>
        </div>
      </div>
    </section>
  );
}
