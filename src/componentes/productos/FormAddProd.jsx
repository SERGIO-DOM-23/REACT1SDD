import { Container, Form, Row, Col ,Button} from "react-bootstrap"
import { useState } from "react"
import axios from "axios"

const FormAddProd = () => {

  const [productos, setproductos] = useState({
    Descripcion:"",
    Precio:"",
    Codigo:"",
    Stock:"",
    Imagen:"",
  })

  const handleChange =(e)=>{
    setproductos({ ... productos, [e.target.id]:e.target.value})
  }

  const handleSubmit =(e) =>{
    e.preventDefault(),

  }


  return (
    <>
      <Container className="mt-3">
        <h3>CARGA PRODUCTOS</h3>
      </Container>

      <Container>
        <Row>
          <Col>
            <Form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label htmlFor="descripcion" className="form-label">Descripcion</label>
                <input type="text" className="form-control" value={productos.Descripcion} onChange={handleChange} id="descripcion" />

              </div>

              
              <div className="mb-3">
                <label htmlFor="precio" className="form-label">Precio</label>
                <input type="number" className="form-control" value={productos.Precio} onChange={handleChange} id="precio" />

              </div>

              <div className="mb-3">
                <label htmlFor="codigo" className="form-label">Codigo</label>
                <input type="text" className="form-control" value={productos.Codigo} onChange={handleChange} id="codigo" />

              </div>

              <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock</label>
                <input type="number" className="form-control" value={productos.Stock} onChange={handleChange} id="stock" />

              </div>

              <div className="mb-3">
                <label htmlFor="imagen" className="form-label">Imagen</label>
                <input type="imagen" className="form-control" value={productos.Imagen} onChange={handleChange} id="imagen" />

              </div>

              <Button type="submit" className="btn btn-success">Cargar</Button>

              <Button type="submit" className="btn btn-warning m-4">Editar</Button>

              <Button type="submit" className="btn btn-danger">Borrar</Button>





            </Form>

          </Col>
        </Row>

      </Container>



    </>
  )
}

export default FormAddProd