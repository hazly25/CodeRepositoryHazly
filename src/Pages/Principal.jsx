import { Link } from "react-router-dom";
import icono from "../assets/img/software.png";
import icono2 from "../assets/img/carpeta.png";
import icono3 from "../assets/img/programacion.png";
import icono4 from "../assets/img/codigo.png";
import icono5 from "../assets/img/lupa.png"
import '../assets/css/StylePrincipal.css';

const Principal = () => {
  return (
    <div className="principal-container">
      <div className="search-bar">
        <input type="text" placeholder="Buscar..." />
        <button type="button">
        <img src={icono5} alt="" className="imgS" />
        </button>
      </div>
      
      <div className="cards-container">
        <div className="card text-center">
          <Link to="#" className="card-img-top">
            <img src={icono} alt="" className="imgN" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Diseño Web</h5>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Ingresar</small>
          </div>
        </div>

        <div className="card text-center">
          <Link to="#" className="card-img-top">
            <img src={icono2} alt="" className="imgN" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Bases de datos</h5>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Ingresar</small>
          </div>
        </div>

        <div className="card text-center">
          <Link to="#" className="card-img-top">
            <img src={icono3} alt="" className="imgN" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Construcción</h5>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Ingresar</small>
          </div>
        </div>

        <div className="card text-center">
          <Link to="#" className="card-img-top">
            <img src={icono4} alt="" className="imgN" />
          </Link>
          <div className="card-body">
            <h5 className="card-title">Programación</h5>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">Ingresar</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Principal;
