import { useState } from 'react';
import { herramientas } from '../../data/contenido';

export function Herramientas() {
  const [activa, setActiva] = useState(herramientas[0].categoria);
  const grupoActivo = herramientas.find((g) => g.categoria === activa);

  return (
    <section id="herramientas" className="section section-alt">
      <div className="container">
        <p className="spec-label">Herramientas utilizadas</p>
        <h2 className="section-title">Equipo de taller</h2>

        <div className="pill-tabs" role="tablist" aria-label="Categorías de herramientas">
          {herramientas.map((grupo) => (
            <button
              key={grupo.categoria}
              role="tab"
              aria-selected={activa === grupo.categoria}
              className={`pill-tab${activa === grupo.categoria ? ' pill-tab-active' : ''}`}
              onClick={() => setActiva(grupo.categoria)}
            >
              {grupo.categoria}
            </button>
          ))}
        </div>

        <div className="spec-card pill-panel" role="tabpanel">
          <ul className="plain-list plain-list-grid">
            {grupoActivo.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
