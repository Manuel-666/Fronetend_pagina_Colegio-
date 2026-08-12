import { contacto } from '../../data/contenido';

export function Contacto() {
  const mapaSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    contacto.direccion
  )}&output=embed`;

  return (
    <section id="contacto" className="section">
      <div className="container">
        <p className="spec-label">Contacto</p>
        <h2 className="section-title">Hablemos</h2>
        <div className="two-col">
          <ul className="plain-list">
            <li>Dirección del colegio: {contacto.direccion}</li>
            <li>Teléfono: {contacto.telefono}</li>
            <li>Correo electrónico: {contacto.correo}</li>
            <li>Horarios de atención: {contacto.horario}</li>
          </ul>
          <div className="spec-card contact-map-card">
            <iframe
              className="contact-map"
              title="Ubicación del colegio"
              src={mapaSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}