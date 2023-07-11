import React from 'react'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const ModalInicio = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (


    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Iniciar Sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form >
            <div className="mb-3">
              <label htmlFor="usuario"> Usuario </label>
              <input type="text" />
            </div>

            <hr />

            <div className="mb-3">
              <label htmlFor="password"> Contraseña </label>
              <input type="text" />
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Ingresar
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </>



  )
}

export default ModalInicio