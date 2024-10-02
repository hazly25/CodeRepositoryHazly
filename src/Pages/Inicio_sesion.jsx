import React from 'react';
import '../assets/css/StyleInicio.css'; 

const Inicio_sesion = () => {
  return (
    <div className="main-container">
      <header className="page-header">
        <h1>Iniciar Sesión</h1>
        <p>Ingresa para continuar</p>
      </header>
      
      <div className="card-container">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">USUARIO</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">CONTRASEÑA</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <button type="submit" className="btn btn-primary">Inciar Sesion</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio_sesion;
