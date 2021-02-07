import React, { Component } from 'react'

import Team_cart from './Team_card'
export class Teams extends Component {

    state= {
        
    Team:
    [
    {id: 1,
        name:"Sadi Ashlaq",
    img:"./Images/Sadi.jpg" ,
     job:"Full Stack Developer"},
    {id: 2,
        name:"Omar Nawaiseh",
    img:"./Images/omar.jpg" ,
      job:"Full Stack Developer"},
    {id: 3,
        name:"Hamzeh Obeidat",
    img:"./Images/Sadi.jpg" ,
      job:"Full Stack Developer"},
    {id: 4,
        name:"Roaa Abushaqrah",
    img:"./Images/Sadi.jpg" ,
     job:"Full Stack Developer"}
    ]}
    
    render() {
        return (
           
                <Team_cart teams={this.state.Team} />
            
        )
    }
}

export default Teams
