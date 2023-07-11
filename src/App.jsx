import "bootstrap/dist/css/bootstrap.min.css";
import Header from './componentes/headers/Header';
import Home from './componentes/Pages/Home';
import Carrusel from "./componentes/carrusel/Carrusel";
import Footer from "./componentes/footers/Footer";
import Contextousers from "./assets/context/Contextousers";
import Rutas from "./componentes/rutas/Rutas";






function App() {
  return (
    <Contextousers>
      <Header />
      <Carrusel />
      <Rutas />
      <Footer />
    </Contextousers>
  );
}

export default App;
