import React, { Component } from 'react';

import '../Css/testimonials.css';
import { FaQuoteRight } from "react-icons/fa";
export default class Testimonials extends Component {




  state= {persons:[
    {id: 1,
    name:"Amal",
    image:"../Images/Amal.jpg" ,
    job:"I like this service very much. I am Amal and this is my story."},
    {id: 2,
    name:"Khadeejah",
    image:"./Images/Khadeejah.jpg" ,
    job:"like this service very much.Service  very nice"},
    {id: 3,
    name:"Ahmed",
    image:"./Images/Ahmed.jpg" ,
    job:`You made it so simple. My new site is so much faster
    and easier
    to work.`},
    {id: 4,
    name:"Dania",
    image:"./Images/Dania.jpg" ,
    job:`I just wanted to share a quick note and let you
    know that you guys do a really good job.`}]}


 	render() {


  const {persons} = this.state;
  const allpersons = persons.map((person) =>  {
      return (

       
        <div className="col-md-3">
        <div className="testimonial p-3  text-center rounded colorebac">
         
          <img class="rounded-circle" src={person.image} width="50"/>
            <h5 className="nameperson">{person.name}</h5>

            <p>{person.job}</p>
         <FaQuoteRight />
        </div>
    </div>




      )
  })


 		return ( 



<div className="container mt-5 testcolor">
  <h1 className="teshead">Testimonials</h1>
    <div className="row">
        {allpersons}
    </div>
</div>


//     <div class="slider">

//    <input type="radio" name="slider" title="slide1" checked="checked" class="slider__nav"/>

//    <input type="radio" name="slider" title="slide2" class="slider__nav"/>

//    <input type="radio" name="slider" title="slide3" class="slider__nav"/>

//   <input type="radio" name="slider" title="slide4" class="slider__nav"/>

//   <div class="slider__inner">  

//     <div class="slider__contents">
      
//     <img className="imag" src="https://media-exp1.licdn.com/dms/image/C5603AQHHp4wek-nHtg/profile-displayphoto-shrink_800_800/0/1601121623614?e=1617840000&v=beta&t=YXg6k0BA3e8KCSUwqShtMCtvhk4cw6B8ZagIwbqTRbI" alt="Paris" width="150" height="150" /> 

//       <h2 class="slider__caption">Marya Alzu'bi</h2>  

//       <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>

//     </div>

//     <div class="slider__contents">
      
//     <img className="imag"  src="https://media-exp1.licdn.com/dms/image/C4E03AQFQEf4LF0X5HA/profile-displayphoto-shrink_400_400/0/1602518853485?e=1617840000&v=beta&t=uc6wZmbj7kyJFJI0xdcUXDIIN4eFTC-7qexsZ7mW99w" alt="Paris" width="150" height="150" /> 

//       <h2 class="slider__caption">Laith Zayed</h2>

//       <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>

//     </div>

//     <div class="slider__contents">
      
//     <img className="imag" src="https://media-exp1.licdn.com/dms/image/C5603AQFnbmRtnHG7eA/profile-displayphoto-shrink_400_400/0/1600980222633?e=1617840000&v=beta&t=wZZZKjkin4BFWcsyMC6GYERHGoRvWs8IrtFqD0HuX2M" alt="Paris" width="150" height="150"  />  

//       <h2 class="slider__caption">Mohammad Alashram</h2>

//       <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>

//     </div>

//     <div class="slider__contents">
      
//     <img className="imag" src="https://media-exp1.licdn.com/dms/image/C4D03AQGe4_04wqmMoQ/profile-displayphoto-shrink_800_800/0/1586190073338?e=1617840000&v=beta&t=CDCVztxEGb724470SVeGFsY32nA82yrlF6DmEwvTeEY" alt="Paris" width="150" height="150" />  

//       <h2 class="slider__caption">Khadeejah Hamdan</h2>

//       <p class="slider__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cupiditate omnis possimus illo quos, corporis minima!</p>

//     </div>  

//   </div>

// </div>

 			);
 	}
    
 }
 