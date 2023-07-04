import { useState } from "react"

const RegisterUsers = () => {

    const [dataUser, setdataUser] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        password: "",

    })



    return (

        <>
        <form action="">

            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" aria-aria-describedby="nombre" />

            </div>
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" aria-aria-describedby="apellido" />

            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label">Edad</label>
                <input type="text" className="form-control" id="edad" aria-aria-describedby="edad" />

            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="text" className="form-control" id="password" aria-aria-describedby="password" />

            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>

        </form>

        </>

    )
}

export default RegisterUsers    