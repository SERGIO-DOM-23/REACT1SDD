import { useState } from "react"
import axios from "axios"
import { Container, Row ,Col } from "react-bootstrap"



const RegisterUsers = () => {

    const [dataUser, setdataUser] = useState({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        
    })
    
    
    const handleChange = (e) => {  //con esta funcion actualizaremos dataUser y setdataUser- aqui tomamos datos del formulario/actualizamos los valores del estado con los inputs
        setdataUser({ ...dataUser, [e.target.id]: e.target.value })
    }




    const handleSubmit = (e) => { //poner datos en la fake api
        e.preventDefault()
        try {
            const response = axios.post("http://localhost:8080/users", dataUser)
            console.log(response);
            setdataUser({
                nombre: "", 
                apellido: "",
                email: "",
                password: "",
            });

        } catch (error) {
            console.log(error);
        }
    }



    return (

        <>

        <Container>
            <Row>
                <Col>

                <h1>Registro Usuarios</h1>
                
                <br />

                <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" value={dataUser.nombre} onChange={handleChange} id="nombre" aria-describedby="nombre" />

                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" value={dataUser.apellido} onChange={handleChange} id="apellido" aria-describedby="apellido" />

                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="text" className="form-control" value={dataUser.email} onChange={handleChange} id="email" aria-describedby="email" />

                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" value={dataUser.password} onChange={handleChange} id="password" aria-describedby="password" />

                </div>
                <button type="submit" className="btn btn-primary">Enviar Registro</button>

            </form>


                </Col>
            </Row>
        </Container>



            
        </>

)

}

export default RegisterUsers    