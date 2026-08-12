export function AuthLayout({ eyebrow = 'Colegio INEM Francisco José de Caldas', title, children }) {
  return (
    <div className="auth-shell">
      <aside className="auth-side">
        <p className="auth-side-eyebrow">{eyebrow}</p>
        <h1 className="auth-side-title">{title}</h1>
      </aside>

      <div className="auth-icon-row" aria-hidden="true">
        {/* Llave */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 1 5.4-5.4l-2.6 2.6-2-2 2.6-2.6z" />
        </svg>
        {/* Engranaje */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
        </svg>
        {/* Rayo */}
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
        </svg>
      </div>

      <main className="auth-main">
        <div className="auth-card">{children}</div>
      </main>
    </div>
  );
}