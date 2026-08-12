import { inicio } from '../../data/contenido';

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-inner">
        <p className="spec-label">Inicio</p>
        <h1 className="hero-title">{inicio.titulo}</h1>
        <p className="hero-desc">{inicio.descripcion}</p>
      </div>
    </section>
  );
}
