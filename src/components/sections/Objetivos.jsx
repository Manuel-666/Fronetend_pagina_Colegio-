import { objetivos } from '../../data/contenido';

export function Objetivos() {
  return (
    <section id="objetivos" className="section section-alt">
      <div className="container">
        <p className="spec-label">Objetivos</p>
        <h2 className="section-title">Qué buscamos formar</h2>
        <ul className="checklist">
          {objetivos.map((obj, i) => (
            <li key={i}>{obj}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
