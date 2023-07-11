import { Routes, Route } from "react-router-dom"
import RegisterUsers from "../registro/RegisterUsers"
import Home from "../Pages/Home"
import ModalInicio from "../modals/ModalInicio"
import FormAddProd from "../productos/FormAddProd"

const Rutas = () => {







  return (
    <>

      <Routes>


        <Route path="/register" element={<RegisterUsers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/modal" element={<ModalInicio/>} />
        <Route path="/cargaProductos" element={<FormAddProd/>} />




      </Routes>

    </>
  )
}

export default Rutas