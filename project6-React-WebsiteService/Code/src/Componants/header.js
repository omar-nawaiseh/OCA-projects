import React, { Component } from 'react'
import {Link ,NavLink} from 'react-router-dom'
import '../Css/header.css'




const jsonObj = JSON.parse(localStorage.getItem('user'));
 class Header extends Component {



  // obj = {

  //   email: this.state.email,
  //   password: this.state.password
  // }
  logout =()=>{
    localStorage.removeItem("user");
  }


  render() {
   
    return (



<nav className="navbar">
<Link to ="/"><img className = "logo" src="../Images/Marley.png"/></Link>
  

<ul className="nav-links">
<li className="nav-item">< Link to="/Services">Services</Link></li>


{jsonObj ? <> <li className="nav-item">< Link  to="/Profile">Profile</Link></li>
  <li className="nav-item" onClick = {this.logout}>< Link  to="/">logout</Link></li></>
:  
 
  <><li className="nav-item">< Link to="/Login">Login</Link></li>
<li className="nav-item">< Link  to="/Register">Register</Link></li></> } 

{/* {!jsonObj ? null 
:  <><li className="nav-item">< Link to="/Login">Login</Link></li>
<li className="nav-item">< Link  to="/Register">Register</Link></li></>
 
   }  */}
 

  
</ul>
</nav>
  
    )
  }
}
export default Header;