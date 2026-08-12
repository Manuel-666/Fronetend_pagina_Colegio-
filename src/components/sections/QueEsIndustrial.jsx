import { queEs } from '../../data/contenido';

export function QueEsIndustrial() {
  return (
    <section id="que-es" className="section">
      <div className="container">
        <p className="spec-label">¿Qué es la modalidad Industrial?</p>
        <h2 className="section-title">Formación técnica con base práctica</h2>
        <div className="prose">
          {queEs.parrafos.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
