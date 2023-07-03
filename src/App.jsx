import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componentes/headers/Header";
import Home from './componentes/Pages/Home'
import Carrusel from "./componentes/carrusel/Carrusel";
import Footer from "./componentes/footers/Footer";
import "./App"



function App() {
  return (
    <>
    <Header/>
   

      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/carrusel" element={<Carrusel />} />
          </Routes>
      </Router>


      <Footer />
      
      <Footer />
      
      
      <Footer/>
    </>
  );
}

export default App;
