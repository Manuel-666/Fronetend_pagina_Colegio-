import { normasSeguridad } from '../../data/contenido';

export function NormasSeguridad() {
  return (
    <section id="seguridad" className="section section-warning">
      <div className="container">
        <p className="spec-label">Normas de seguridad</p>
        <h2 className="section-title">Reglas del taller</h2>
        <ol className="numbered-list">
          {normasSeguridad.map((norma, i) => (
            <li key={i}>{norma}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
