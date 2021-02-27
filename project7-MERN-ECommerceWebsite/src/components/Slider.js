import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel} from 'react-bootstrap';

import './Slider.css'
// import './Home-2-Slider-1.jpg'

 class Slider extends Component {
  render() {
    return (
    
      <Carousel>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100 imgSliderCon"
      src="https://i.ibb.co/2hp1Q0d/h1-rev-bg-img-4.jpg"

      alt="First slide"
    />
    <Carousel.Caption>
      <h1 className="slider">Modern Classics</h1>
      <a href="#bottom"><button class="callaction">Shopping Now</button></a>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={5000}>
    <img
      className="d-block w-100"
  src="https://i.ibb.co/pJNg7KX/h1-rev-bg-img-1.jpg"

      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="slidertitle">
      Discover Beauty</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://i.ibb.co/stb7zNH/h1-rev-bg-img-3.jpg"
      
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="slidertitle">New Exhibition</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      src="https://i.ibb.co/KD52PtH/h1-rev-bg-img-2.jpg"
      
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="slidertitle">Hortense Fiquet</h3>
    
    </Carousel.Caption>
  </Carousel.Item>
  
  
</Carousel> 
    )
  }
}
export default Slider;