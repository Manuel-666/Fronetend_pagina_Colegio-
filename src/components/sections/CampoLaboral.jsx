import { campoLaboral } from '../../data/contenido';

export function CampoLaboral() {
  return (
    <section id="campo-laboral" className="section">
      <div className="container">
        <p className="spec-label">Campo laboral</p>
        <h2 className="section-title">Después de graduarse</h2>
        <div className="two-col">
          <div>
            <h3 className="card-title">Pueden desempeñarse como</h3>
            <ul className="plain-list">
              {campoLaboral.cargos.map((cargo, i) => (
                <li key={i}>{cargo}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="card-title">O continuar estudios en</h3>
            <ul className="plain-list">
              {campoLaboral.carreras.map((carrera, i) => (
                <li key={i}>{carrera}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
