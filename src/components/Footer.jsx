export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} Modalidad Industrial · Colegio INEM Francisco José de
          Caldas. Todos los derechos reservados.
        </p>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">Facebook</a>
          <a href="#" aria-label="Instagram">Instagram</a>
          <a href="#" aria-label="YouTube">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
