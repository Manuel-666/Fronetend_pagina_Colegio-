import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function Topbar() {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar-auth">
        {isAuthenticated ? (
          <>
            <span className="topbar-user">{user?.fullName || user?.email}</span>
            <button className="btn btn-ghost" onClick={logout}>
              Salir
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-ghost">
              Ingresar
            </Link>
            <Link to="/registro" className="btn btn-primary">
              Registrarse
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
