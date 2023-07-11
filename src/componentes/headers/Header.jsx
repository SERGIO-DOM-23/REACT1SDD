import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import { useContext } from 'react';
import { Contextousuarios } from '../../assets/context/Contextousers';


const Header =() => {

 // const {users,setUsers} = useContext(Contextousuarios)
  //console.log(users);
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">Sergio Trabajando React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/modal">Iniciar sesión</Nav.Link>
            <Nav.Link href="/Register">Registrate</Nav.Link>
            <NavDropdown title="MENU" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Catalogo</NavDropdown.Item>
              <NavDropdown.Item href="/cargaProductos">
                Alta Productos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Trabaja Con Nosotros
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;


























