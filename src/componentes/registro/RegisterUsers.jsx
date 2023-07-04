import { useState } from "react"
import axios from "axios"



const RegisterUsers = () => {

    const [dataUser, setdataUser] = useState({
        nombre: "",
        apellido: "",
        edad: "",
        password: "",

    })


    const handleChange = (e) => {  //con esta funcion actualizaremos dataUsery setdataUser- aqui tomamos datos del formulario/actualizamos los valores del estado con los inputs
        setdataUser({ ...dataUser, [e.target.name]: e.target.value })
    }




    const handleSubmit = (e) => { //poner datos en la fake api
        e.preventDeFaultt()
        try {
            const response = axios.post("http://localhost:8080/users", dataUser)
            console.log(response);
            setdataUser({
                nombre: "", 
                apellido: "",
                edad: "",
                password: "",
            });

        } catch (error) {
            console.log(error);
        }
    }



    return (

        <>
            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={dataUser.nombre} onChange={handleChange} name="nombre" aria-aria-describedby="nombre" />

                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" value={dataUser.apellido} onChange={handleChange} name="apellido" aria-aria-describedby="apellido" />

                </div>
                <div className="mb-3">
                    <label htmlFor="edad" className="form-label">Edad</label>
                    <input type="text" className="form-control" value={dataUser.edad} onChange={handleChange} name="edad" aria-aria-describedby="edad" />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="text" className="form-control" value={dataUser.password} onChange={handleChange} name="password" aria-aria-describedby="password" />

                </div>
                <button type="submit" className="btn btn-primary">Enviar</button>

            </form>

        </>

    )
}

export default RegisterUsers    