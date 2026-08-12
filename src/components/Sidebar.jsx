import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { navegacion, inicioNav } from '../data/contenido';

function grupoQueContiene(pathname) {
  const grupo = navegacion.find((g) => g.items.some((item) => item.to === pathname));
  return grupo?.id ?? null;
}

export function Sidebar() {
  const location = useLocation();
  const [grupoAbierto, setGrupoAbierto] = useState(() => grupoQueContiene(location.pathname));

  // Si navegas (por link o URL directa) a algo dentro de un grupo, ese grupo se abre solo.
  useEffect(() => {
    const grupoActivo = grupoQueContiene(location.pathname);
    if (grupoActivo) setGrupoAbierto(grupoActivo);
  }, [location.pathname]);

  function toggleGrupo(id) {
    setGrupoAbierto((actual) => (actual === id ? null : id));
  }

  return (
    <aside className="sidebar">
    <Link to="/" className="sidebar-brand">
        Modalidad<span>Industrial</span>
      </Link>
      <p className="sidebar-school">Colegio INEM Francisco José de Caldas</p>

      <nav className="sidebar-nav" aria-label="Secciones de la modalidad Industrial">
        <NavLink
          to={inicioNav.to}
          end
          className={({ isActive }) => `sidebar-link${isActive ? ' sidebar-link-active' : ''}`}
        >
          {inicioNav.label}
        </NavLink>

        {navegacion.map((grupo) => {
          const isOpen = grupoAbierto === grupo.id;
          return (
            <div key={grupo.id} className="sidebar-group">
              <button
                type="button"
                className={`sidebar-group-trigger${isOpen ? ' sidebar-group-trigger-open' : ''}`}
                aria-expanded={isOpen}
                onClick={() => toggleGrupo(grupo.id)}
              >
                {grupo.label}
                <span className="sidebar-group-chevron" aria-hidden="true">
                  ›
                </span>
              </button>

              <div className={`sidebar-group-items-wrap${isOpen ? ' is-open' : ''}`}>
                <div className="sidebar-group-items-inner">
                  <ul className="sidebar-group-items">
                    {grupo.items.map((item) => (
                      <li key={item.to}>
                        <NavLink
                          to={item.to}
                          className={({ isActive }) =>
                            `sidebar-link sidebar-sublink${isActive ? ' sidebar-link-active' : ''}`
                          }
                        >
                          {item.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}