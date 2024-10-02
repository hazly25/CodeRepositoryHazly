import { Routes, Route, UNSAFE_DataRouterStateContext } from "react-router-dom"
import Crear_usuario from '../Pages/Crear_usuario'
import Inicio_sesion from '../Pages/Inicio_sesion'
import Principal from '../Pages/Principal' 

const Router = () => {
  return (
    <Routes>
        <Route path="/Crear_usuario" element={<Crear_usuario/>} />
        <Route path="/Inicio_sesion" element={<Inicio_sesion/>} />
        <Route path="/Principal" element={<Principal/>} />
    </Routes>
  )
}

export default Router
