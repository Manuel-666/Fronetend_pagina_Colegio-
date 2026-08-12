import { testimoniosInfo } from '../../data/contenido';

export function Testimonios() {
  return (
    <section id="testimonios" className="section section-alt">
      <div className="container">
        <p className="spec-label">Testimonios</p>
        <h2 className="section-title">Voces de la modalidad</h2>
        {testimoniosInfo.items.length === 0 ? (
          <p className="section-note">{testimoniosInfo.nota}</p>
        ) : (
          <div className="grid-cards">
            {testimoniosInfo.items.map((t, i) => (
              <article key={i} className="spec-card">
                <p className="card-desc">"{t.texto}"</p>
                <p className="card-title">{t.nombre}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
