import { Link } from "react-router-dom" 
import '../../assets/css/StyleNavegacion.css'; 


const Navegacion = () => {
  return (
    <div>
        <ul className="nav justify-content-center">
            <li class="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Crear_usuario">Registro</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Inicio_sesion">Inicio</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link" to="/Principal">Principal</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navegacion
