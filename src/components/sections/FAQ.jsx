import { useState } from 'react';
import { faq } from '../../data/contenido';

export function FAQ() {
  const [openId, setOpenId] = useState(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <p className="spec-label">Preguntas frecuentes</p>
        <h2 className="section-title">Resolvemos tus dudas</h2>
        <div className="accordion">
          {faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="accordion-item">
                <button
                  className="accordion-trigger"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {item.pregunta}
                  <span aria-hidden="true">{isOpen ? '–' : '+'}</span>
                </button>
                {isOpen && <div className="accordion-panel">{item.respuesta}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
