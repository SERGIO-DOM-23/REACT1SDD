import "bootstrap/dist/css/bootstrap.min.css";
import Header from './componentes/headers/Header';
import Home from './componentes/Pages/Home';
import Carrusel from "./componentes/carrusel/Carrusel";
import Footer from "./componentes/footers/Footer";
import Contextousers from "./assets/context/Contextousers";
import RegisterUsers from "./componentes/registro/RegisterUsers";





function App() {
  return (
    <Contextousers>
      <Header />
      <Carrusel />
      <Home />
      <RegisterUsers/>
      <Footer />
    </Contextousers>
  );
}

export default App;
