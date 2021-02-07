import React, { Component } from 'react'
import '../Css/Profile.css'
import Footer from './footer';
import Table from './table';
import Weather from './Weather';

// import Weather from './Weather';
class Profile extends Component {
  render() {
    const jsonObj = JSON.parse(localStorage.getItem('user'));
    return (
      
      <div className="container">
  <div className="main-body">
    {/* Breadcrumb */}
   
    {/* /Breadcrumb */}
    <div className="row gutters-sm">
      <div className="col-md-12 mb-3">
        <div className="cards">
          <div className="card-body">
            <div className="d-flex flex-column align-items-center text-center">
              <img src={'../Images/Marley.png'} alt="Admin" className="rounded-circle" width={150} />
              <div className="mt-3">
                <h4  className="colors">{jsonObj.firstName}</h4>
                <p className="text-secondary mb-1 colors"> {jsonObj.email}</p>
                <p className="text-muted font-size-sm colors">{jsonObj.password}</p>
               
              </div>
            </div>
        
          </div>
        
        </div>
       
       
      
      </div>

      <div className="col-md-12 mb-3">
        <div className="card">
          <Weather/>
        </div>
        </div>
 <div className="col-md-12 mb-3">
        <div className="card tablecolor">
          <div className="card-body">
     
     <Table/>

       </div>
       </div>

        <div className="row gutters-sm">
          <div className="col-sm-6 mb-3">
           
          </div>
          <div className="col-md-12 mb-3">
       
            </div>
          </div>
        </div>
     
      </div>
    
    </div>
   
  </div>


    )
  }
}
// export default Profile



export default class Account extends Component {
  render() {
    return (
      <div>
        <Profile/>
        <Footer/>
      </div>
    )
  }
}
