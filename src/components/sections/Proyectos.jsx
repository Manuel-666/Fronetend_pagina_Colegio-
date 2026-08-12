import { useState } from 'react';
import { proyectos } from '../../data/contenido';
import { useFavorites } from '../../hooks/useFavorites';

export function Proyectos() {
  const { isFavorito, toggleFavorito } = useFavorites();
  const [abiertoIdx, setAbiertoIdx] = useState(null);

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <p className="spec-label">Proyectos que realizan los estudiantes</p>
        <h2 className="section-title">Del papel al prototipo</h2>
        <p className="section-note">
          Toca un proyecto para ver una guía breve de cómo realizarlo. Marca con ★ los que más
          te interesan.
        </p>
        <div className="grid-cards grid-cards-3">
          {proyectos.map((proyecto, i) => {
            const activo = isFavorito(proyecto.nombre);
            const isOpen = abiertoIdx === i;

            return (
              <article
                key={proyecto.nombre}
                className={`spec-card card-clickable${isOpen ? ' card-open' : ''}`}
                onClick={() => setAbiertoIdx(isOpen ? null : i)}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setAbiertoIdx(isOpen ? null : i);
                  }
                }}
              >
                <div className="project-card-header">
                  <h3 className="card-title">{proyecto.nombre}</h3>
                  <button
                    type="button"
                    className={`favorite-btn${activo ? ' favorite-btn-active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorito(proyecto.nombre);
                    }}
                    aria-pressed={activo}
                    aria-label={
                      activo
                        ? `Quitar ${proyecto.nombre} de favoritos`
                        : `Guardar ${proyecto.nombre} en favoritos`
                    }
                  >
                    {activo ? '★' : '☆'}
                  </button>
                </div>

                {!isOpen && <p className="card-more">Toca para ver la guía</p>}

                {isOpen && (
                  <div className="project-guide">
                    <p className="card-desc">{proyecto.resumen}</p>
                    <ol className="numbered-list">
                      {proyecto.pasos.map((paso, idx) => (
                        <li key={idx}>{paso}</li>
                      ))}
                    </ol>
                    <p className="card-more">Toca para cerrar</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}