import { useEffect, useRef, useState } from 'react';
import { enviarMensaje } from '../api/chatService';

const MENSAJE_BIENVENIDA = {
  role: 'assistant',
  content: '¡Hola! Soy el asistente del sitio. Pregúntame lo que quieras.',
};

export function ChatWidget() {
  const [abierto, setAbierto] = useState(false);
  const [mensajes, setMensajes] = useState([MENSAJE_BIENVENIDA]);
  const [texto, setTexto] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [mensajes, abierto]);

  async function handleSubmit(e) {
    e.preventDefault();
    const contenido = texto.trim();
    if (!contenido || enviando) return;

    const historialActualizado = [...mensajes, { role: 'user', content: contenido }];
    setMensajes(historialActualizado);
    setTexto('');
    setError('');
    setEnviando(true);

    try {
      const reply = await enviarMensaje(
        historialActualizado.map(({ role, content }) => ({ role, content }))
      );
      setMensajes((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setEnviando(false);
    }
  }

  return (
    <div className="chat-widget">
      {abierto && (
        <div className="chat-panel" role="dialog" aria-label="Chat con asistente">
          <div className="chat-panel-header">
            <span>Asistente</span>
            <button
              type="button"
              className="chat-close-btn"
              onClick={() => setAbierto(false)}
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </div>

          <div className="chat-messages" ref={scrollRef}>
            {mensajes.map((m, i) => (
              <div key={i} className={`chat-bubble chat-bubble-${m.role}`}>
                {m.content}
              </div>
            ))}
            {enviando && <div className="chat-bubble chat-bubble-assistant chat-typing">Escribiendo…</div>}
          </div>

          {error && <p className="chat-error">{error}</p>}

          <form className="chat-input-row" onSubmit={handleSubmit}>
            <input
              type="text"
              className="chat-input"
              placeholder="Escribe tu mensaje…"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              disabled={enviando}
            />
            <button type="submit" className="btn btn-primary chat-send-btn" disabled={enviando}>
              Enviar
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-toggle-btn"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-label={abierto ? 'Cerrar chat' : 'Abrir chat con asistente'}
      >
        {abierto ? '×' : '🤖'}
      </button>
    </div>
  );
}