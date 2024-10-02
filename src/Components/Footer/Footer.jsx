import '../../assets/css/StyleFooter.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="/terms" className="footer-link">Términos y condiciones</a>
        <a href="/privacy" className="footer-link">Política de privacidad</a>
        <a href="/contact" className="footer-link">Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;
