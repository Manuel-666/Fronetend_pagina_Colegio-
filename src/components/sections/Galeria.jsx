import { useEffect, useState } from 'react';
import { galeriaCategorias } from '../../data/contenido';
import * as galleryService from '../../api/galleryService';

export function Galeria() {
  const [fotos, setFotos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [errorCarga, setErrorCarga] = useState('');

  const [archivo, setArchivo] = useState(null);
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState(galeriaCategorias[0]);
  const [visibility, setVisibility] = useState('private');
  const [subiendo, setSubiendo] = useState(false);
  const [errorSubida, setErrorSubida] = useState('');

  function cargarGaleria() {
    setCargando(true);
    galleryService
      .getGaleria()
      .then(setFotos)
      .catch((err) => setErrorCarga(err.message))
      .finally(() => setCargando(false));
  }

  useEffect(cargarGaleria, []);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!archivo) {
      setErrorSubida('Selecciona una foto primero.');
      return;
    }
    setErrorSubida('');
    setSubiendo(true);
    try {
      const nueva = await galleryService.subirFoto({
        file: archivo,
        caption,
        category,
        visibility,
      });
      setFotos((prev) => [nueva, ...prev]);
      setArchivo(null);
      setCaption('');
      e.target.reset();
    } catch (err) {
      setErrorSubida(err.message);
    } finally {
      setSubiendo(false);
    }
  }

  async function handleEliminar(id) {
    const anteriores = fotos;
    setFotos((prev) => prev.filter((f) => f.id !== id));
    try {
      await galleryService.eliminarFoto(id);
    } catch {
      setFotos(anteriores); // revertir si falla
    }
  }

  return (
    <section id="galeria" className="section section-alt">
      <div className="container">
        <p className="spec-label">Galería</p>
        <h2 className="section-title">Registro fotográfico</h2>
        <p className="section-note">
          Sube tus propias fotos del taller o tus proyectos. Tú decides si se ven solo para ti o
          para todos.
        </p>

        {/* ===== Recomendaciones de qué subir ===== */}
        <div className="spec-card gallery-tips">
          <h3 className="card-title">¿Qué puedes fotografiar?</h3>
          <ul className="plain-list plain-list-grid">
            {galeriaCategorias.map((cat, i) => (
              <li key={i}>{cat}</li>
            ))}
          </ul>
        </div>

        {/* ===== Formulario de subida ===== */}
        <form className="gallery-upload-form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="field-label" htmlFor="gallery-file">
              Foto
            </label>
            <input
              id="gallery-file"
              type="file"
              accept="image/png, image/jpeg, image/webp"
              onChange={(e) => setArchivo(e.target.files?.[0] ?? null)}
              className="field-input"
            />
          </div>

          <div className="field">
            <label className="field-label" htmlFor="gallery-caption">
              Descripción (opcional)
            </label>
            <input
              id="gallery-caption"
              type="text"
              className="field-input"
              placeholder="Ej: Armando el circuito del semáforo"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={140}
            />
          </div>

          <div className="gallery-form-row">
            <div className="field">
              <label className="field-label" htmlFor="gallery-category">
                Categoría
              </label>
              <select
                id="gallery-category"
                className="comparador-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {galeriaCategorias.map((cat, i) => (
                  <option key={i} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <span className="field-label">Visibilidad</span>
              <div className="pill-tabs">
                <button
                  type="button"
                  className={`pill-tab${visibility === 'private' ? ' pill-tab-active' : ''}`}
                  onClick={() => setVisibility('private')}
                >
                  Solo para mí
                </button>
                <button
                  type="button"
                  className={`pill-tab${visibility === 'public' ? ' pill-tab-active' : ''}`}
                  onClick={() => setVisibility('public')}
                >
                  Pública
                </button>
              </div>
            </div>
          </div>

          {errorSubida && <p className="form-banner form-banner-error">{errorSubida}</p>}

          <button type="submit" className="btn btn-primary" disabled={subiendo}>
            {subiendo ? 'Subiendo…' : 'Subir foto'}
          </button>
        </form>

        {/* ===== Galería de fotos ===== */}
        {cargando && <p className="section-note">Cargando galería…</p>}
        {errorCarga && <p className="form-banner form-banner-error">{errorCarga}</p>}

        {!cargando && !errorCarga && fotos.length === 0 && (
          <p className="section-note">Todavía no hay fotos. ¡Sé el primero en subir una!</p>
        )}

        <div className="grid-cards grid-cards-4">
          {fotos.map((foto) => (
            <div key={foto.id} className="gallery-photo-card">
              <img src={foto.url} alt={foto.caption || foto.category || 'Foto de galería'} />
              <div className="gallery-photo-meta">
                <span className="gallery-photo-badge">
                  {foto.visibility === 'public' ? 'Pública' : 'Solo para mí'}
                </span>
                {foto.isMine && (
                  <button
                    type="button"
                    className="gallery-photo-delete"
                    onClick={() => handleEliminar(foto.id)}
                    aria-label="Eliminar foto"
                  >
                    ×
                  </button>
                )}
              </div>
              {foto.caption && <p className="gallery-photo-caption">{foto.caption}</p>}
              {foto.uploadedBy && (
                <p className="gallery-photo-author">Subida por {foto.uploadedBy}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}