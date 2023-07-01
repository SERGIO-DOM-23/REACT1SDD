import react from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img            
          className="d-block w-100"
          src="https://changomax.mercomaxsa.com.ar/prestashop/modules/homeslider/images/2e69d6c55924a92a70398e4fa295c8391bfe358c_banner%20PAMPA%20con%20visera.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>cascos nacionales</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://changomax.mercomaxsa.com.ar/prestashop/modules/homeslider/images/22195a607f5b025cdabddaa23743792eecb48f81_BANNER%20CALESITA%20XUANXING%203-01.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>cubiertas yuanxing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://changomax.mercomaxsa.com.ar/prestashop/modules/homeslider/images/c2219ee90f59c30560d2c3ee97ffb76d4331d34f_BANNER%20CALESITA%20CHOHO7_Mesa%20de%20trabajo%201.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>cadenas choho</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;