import { Routes, Route } from "react-router-dom"
import RegisterUsers from "../registro/RegisterUsers"
import Home from "../Pages/Home"
import ModalInicio from "../modals/ModalInicio"

const Rutas = () => {







  return (
    <>

      <Routes>


        <Route path="/register" element={<RegisterUsers />} />
        <Route path="/home" element={<Home />} />
        <Route path="/modal" element={<ModalInicio/>} />





      </Routes>

    </>
  )
}

export default Rutas