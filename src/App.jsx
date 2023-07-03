import "bootstrap/dist/css/bootstrap.min.css";
import Header from './componentes/headers/Header';
import Home from './componentes/Pages/Home';
import Carrusel from "./componentes/carrusel/Carrusel";
import Footer from "./componentes/footers/Footer";





function App() {
  return (
    <>
      <Header />
      <Carrusel />
      <Home />
      <Footer />
    </>
  );
}

export default App;
