import React from "react";
import { Link } from "react-router-dom";
import '../assets/css/StyleRegistro.css'; 

const Crear_usuario = () => {
  return (
    <div className="form-background">
      <header className="page-header">
        <h1>Crear una nueva cuenta</h1>
        <p>¿Ya estas registrado? Inicia sesion</p>
      </header>
      <div className="form-container">
        <form className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputName" className="form-label">NOMBRE</label>
            <input type="text" className="form-control" id="inputName" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword" className="form-label">CONTRASEÑA</label>
            <input type="password" className="form-control" id="inputPassword" />
          </div>
          <div className="col-6">
            <label htmlFor="inputEmail" className="form-label">CORREO ELECTRÓNICO</label>
            <input type="email" className="form-control" id="inputEmail" />
          </div>
          <div className="col-6">
            <label htmlFor="inputConfirmPassword" className="form-label">CONFIRMAR CONTRASEÑA</label>
            <input type="password" className="form-control" id="inputConfirmPassword" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputDocument" className="form-label">DOCUMENTO</label>
            <input type="text" className="form-control" id="inputDocument" />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Registrarme</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Crear_usuario;
