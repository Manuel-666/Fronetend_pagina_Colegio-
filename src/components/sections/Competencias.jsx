import { competencias } from '../../data/contenido';

export function Competencias() {
  return (
    <section id="competencias" className="section">
      <div className="container">
        <p className="spec-label">Competencias que desarrolla</p>
        <h2 className="section-title">Habilidades que se llevan los estudiantes</h2>
        <div className="tag-cloud">
          {competencias.map((c, i) => (
            <span key={i} className="tag">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
