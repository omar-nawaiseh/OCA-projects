import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel,Item } from 'react-bootstrap';
import '../Css/slider-Services.css'
import Header from './header';
import Footer from './footer';
import Cardservices from './Cardservices';



export default class Services extends Component {
    render() {
        return (
            <div>
                 {/* <Header /> */}
            <Carousel>
         <Carousel.Item interval={5000}>
           <img
             className="d-block w-100"
             src="./Images/Home-2-Slider-3.jpg"
             alt="First slide"
           />
           <Carousel.Caption>
             <h1 className="slider">Let's Go Marley website</h1>
             <p className="para">Think before you speak.Read before you think</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={5000}>
           <img
             className="d-block w-100"
             src="./Images/Home-2-Slider-1.jpg"
             alt="Third slide"
           />
           <Carousel.Caption>
             <h3 className="slider">Hurry Up ,20% DisCount</h3>
             <p className="para">Free delivery  Just For one week</p>
           </Carousel.Caption>
         </Carousel.Item>
         {/* <Carousel.Item>
           <img
             className="d-block w-100"
             src="http://storage.googleapis.com/alquds-cdn/images/1558423300537953800/1558423314000/700x414.jpg"
             alt="Third slide"
                 />
               <Carousel.Caption>
                  <h3>Third slide label</h3>
               <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
             </Carousel.Caption>
           </Carousel.Item> */}
            </Carousel>
           


            <Cardservices />

<Footer /> 
                </div> 
         )
    }
}
