import { useState } from 'react';
import { areasEstudio } from '../../data/contenido';

const TEMAS_VISIBLES_COLAPSADO = 3;

export function AreasEstudio() {
  const [expandidoId, setExpandidoId] = useState(null);
  const [idA, setIdA] = useState(areasEstudio[0].id);
  const [idB, setIdB] = useState(areasEstudio[1].id);

  const areaA = areasEstudio.find((a) => a.id === idA);
  const areaB = areasEstudio.find((a) => a.id === idB);

  return (
    <section id="areas" className="section">
      <div className="container">
        <p className="spec-label">Áreas que se estudian</p>
        <h2 className="section-title">Cinco áreas técnicas</h2>
        <p className="section-note">Toca una tarjeta para ver el detalle completo.</p>
        <div className="grid-cards">
          {areasEstudio.map((area) => {
            const isOpen = expandidoId === area.id;
            const temasAMostrar = isOpen
              ? area.temas
              : area.temas.slice(0, TEMAS_VISIBLES_COLAPSADO);
            const ocultos = area.temas.length - temasAMostrar.length;

            return (
              <article
                key={area.id}
                className={`spec-card card-clickable${isOpen ? ' card-open' : ''}`}
                onClick={() => setExpandidoId(isOpen ? null : area.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpandidoId(isOpen ? null : area.id);
                  }
                }}
              >
                <h3 className="card-title">{area.nombre}</h3>
                <ul className="plain-list">
                  {temasAMostrar.map((tema, i) => (
                    <li key={i}>{tema}</li>
                  ))}
                </ul>
                {ocultos > 0 && <p className="card-more">+ {ocultos} temas más</p>}
                {isOpen && area.temas.length > TEMAS_VISIBLES_COLAPSADO && (
                  <p className="card-more">Toca para ver menos</p>
                )}
              </article>
            );
          })}
        </div>

        {/* ===== Comparador de áreas ===== */}
        <div className="comparador">
          <p className="spec-label">Comparar dos áreas</p>
          <div className="comparador-selects">
            <select
              className="comparador-select"
              value={idA}
              onChange={(e) => setIdA(e.target.value)}
              aria-label="Primera área a comparar"
            >
              {areasEstudio.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.nombre}
                </option>
              ))}
            </select>
            <span className="comparador-vs">vs</span>
            <select
              className="comparador-select"
              value={idB}
              onChange={(e) => setIdB(e.target.value)}
              aria-label="Segunda área a comparar"
            >
              {areasEstudio.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.nombre}
                </option>
              ))}
            </select>
          </div>

          <div className="comparador-grid">
            <article className="spec-card">
              <h3 className="card-title">{areaA.nombre}</h3>
              <ul className="plain-list">
                {areaA.temas.map((tema, i) => (
                  <li key={i}>{tema}</li>
                ))}
              </ul>
            </article>
            <article className="spec-card">
              <h3 className="card-title">{areaB.nombre}</h3>
              <ul className="plain-list">
                {areaB.temas.map((tema, i) => (
                  <li key={i}>{tema}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}