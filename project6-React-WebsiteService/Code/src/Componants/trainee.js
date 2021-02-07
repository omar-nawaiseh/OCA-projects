import React from 'react';
import { Component } from 'react'
import './trainee.css'

const trainee =(props)=>{
    return(
       
            <div class="card">
              <img
                src="https://m.media-amazon.com/images/I/611mtaX7i+L._AC_SX522_.jpg"
                alt="cardbackground"
                class="card-img"
              />
              <img
                src={props.img}
                alt="profile image"
                class="profile-img"
              />
              <h1>{props.name} </h1>
              
              <p class="job-title">{props.job}</p>
              <p class="about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                quisquam, saepe suscipit dolores veritatis omnis totam? Modi
                sapiente laborum veniam molestias, nulla iure quae eos quidem
                debitis adipisci officia eius.
              </p>
            
             
              <button className="btn" onClick={() =>{ props.deleteTraineeHandler(props.index)}}>Delete</button> 
              
              <ul class="social-media">
                <li>
                  <a href={props.facebook}><i class="fab fa-facebook-f"></i></a>
                </li>
      
                 <li>
                  <a href={props.instgram}><i class="fab fa-instagram"></i></a>
                </li> 
      
                <li>
                  <a href={props.github}><i class="fab fa-github"></i></a>
                </li>
                <li>
                  <a href={props.linkdin}><i class="fab fa-linkedin-in"></i></a>
                </li>
              </ul>
            </div>
      
            


            
        
    )
}





class Trainee extends Component {
  render() {
    return (
     
          
<trainee/>

    )
  }
}


export default trainee;