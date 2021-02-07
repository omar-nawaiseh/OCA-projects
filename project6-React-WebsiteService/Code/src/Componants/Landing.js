import React, { Component } from 'react'
import Slider   from './slider';
import Person   from './testimonials';
import Youtube from './youtube';
import CardInformation from './Team_card'
import Footer from './footer';
import Product from './Product';
import swal from 'sweetalert'


// import { BrowserRouter ,Route} from 'react-router-dom'




 class Langingpage extends Component {
  
    state= {Team:[
    {id: 1,
    name:"Sadi Ashlaq",
    image:"../Images/Sadi.jpg" ,
    job:"Full Stack Developer"},
    {id: 2,
    name:"Omar Nawaiseh",
    image:"./Images/omar.jpg" ,
    job:"Full Stack Developer"},
    {id: 3,
    name:"Hamzeh Obeidat",
    image:"./Images/Hamzeh.jpg" ,
    job:"Full Stack Developer"},
    {id: 4,
    name:"Roaa Abushaqrah",
    image:"./Images/Roaa.jpg" ,
    job:"Full Stack Developer"}
    ]}
    
    

  render() {
    return (
      <div>

       
        <Slider/>
        <Product/>
        <Youtube/>
        <Person/>

    
        <div class="container testimonials">
    <div class="row">
    <h1 className="ourteam">Our Marley Team</h1>
    {this.state.Team.map((Teams,index) =>
        <CardInformation  
        name={Teams.name}
        imgage={Teams.image} 
        job={Teams.job}  
        />)}
</div> 
</div>
      
     
        <Footer />
      </div>
    )
  }
}




 
export default Langingpage