import React, { Component } from 'react'
 import '../Css/Team_card.css';


function CardInformation(props) {
  return (
 

<div className="col-md-6 testimonial">
<div className="row">

    <div className="avatar col-md-5">
      
        <a href="#">
            <img className="img-circle" src={props.imgage} alt="Taylor Otwell"/>
        </a>
    </div>

    <div className="testimonial-main col-md-7">
        <h4 className="media-heading colortext">{props.name}</h4>
        <p className="testimony-body colortext">{props.job}</p>
    </div>
</div>
</div>
  );
} 
export default CardInformation;