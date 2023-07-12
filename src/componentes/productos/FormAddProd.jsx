import { Container, Row, Col, Button } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"

const FormAddProd = () => {

  const [productos, setproductos] = useState({
    descripcion: "",
    precio: "",
    codigo: "",
    stock: "",
    imagen: "",
  })

  const handleChange = (e) => {
    setproductos({ ...productos, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const response = axios.post("http://localhost:8080/productos", productos);
      console.log(response);
      setproductos({ descripcion: "",
        precio: "",
        codigo: "",
        stock: "",
        imagen: "",

      })

    } catch (error) {

    }

  }


  return (
    <>
      <Container className="mt-3">
        <h3>CARGA PRODUCTOS</h3>
      </Container>

      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input type="text" className="form-control" value={productos.descripcion} onChange={handleChange} id="descripcion" aria-description="descripcion" />

              </div>


              <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio</label>
                <input type="number" className="form-control" value={productos.precio} onChange={handleChange} id="precio" />

              </div>

              <div className="mb-3">
                <label htmlFor="codigo" className="form-label">Codigo</label>
                <input type="text" className="form-control" value={productos.codigo} onChange={handleChange} id="codigo" />

              </div>

              <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock</label>
                <input type="number" className="form-control" value={productos.stock} onChange={handleChange} id="stock" />

              </div>

              <div className="mb-3">
                <label htmlFor="imagen" className="form-label">Imagen</label>
                <input type="imagen" className="form-control" value={productos.imagen} onChange={handleChange} id="imagen" />

              </div>

              <Button type="submit" className="btn btn-success">Cargar</Button>

              





            </form>
            <Button type="submit" className="btn btn-warning m-4">Editar</Button>

              <Button type="submit" className="btn btn-danger">Borrar</Button>

          </Col>
        </Row>

      </Container>



    </>
  )
}

export default FormAddProd