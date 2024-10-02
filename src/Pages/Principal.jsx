import { Link } from "react-router-dom";
//import icono from "../assets/img/software.png";
//import icono2 from "../assets/img/carpeta.png";
//import icono3 from "../assets/img/programacion.png";
import '../assets/css/StylePrincipal.css';

const Principal = () => {
  return (
    <div className="principal-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100 text-center">
            <Link to="#" className="card-img-top">
              
            </Link>
            <div className="card-body">
              <h5 className="card-title">Diseño Web</h5>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Ingresar</small>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <Link to="#" className="card-img-top">
              
            </Link>
            <div className="card-body">
              <h5 className="card-title">Bases de datos</h5>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Ingresar</small>
            </div>
          </div>
        </div>
  
        <div className="col">
          <div className="card h-100 text-center">
            <Link to="#" className="card-img-top">
              
            </Link>
            <div className="card-body">
              <h5 className="card-title">Construcción</h5>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">Ingresar</small>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 text-center">
            <Link to="#" className="card-img-top">
              
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
    </div>
  );
}

export default Principal;
