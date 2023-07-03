import "bootstrap/dist/css/bootstrap.min.css";
import Header from './componentes/headers/Header';
import Home from './componentes/Pages/Home';
import Carrusel from "./componentes/carrusel/Carrusel";
import Footer from "./componentes/footers/Footer";
import Usercontext from "./assets/context/USERCONTEXT";




function App() {
  return (
    <Usercontext>
      <Header />
      <Carrusel />
      <Home />
      <Footer />

    </Usercontext>


   
  );
}

export default App;
