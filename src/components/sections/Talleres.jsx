import { talleres } from '../../data/contenido';

export function Talleres() {
  return (
    <section id="talleres" className="section section-alt">
      <div className="container">
        <p className="spec-label">Talleres</p>
        <h2 className="section-title">Donde se aplica la teoría</h2>
        <div className="grid-cards">
          {talleres.map((taller) => (
            <article key={taller.id} className="spec-card">
              <h3 className="card-title">{taller.nombre}</h3>
              <p className="card-desc">{taller.descripcion}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
