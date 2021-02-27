import React from 'react'
import './Service.css'

 const Service=()=> {
    return (
        <div>
        <h3 class="service"> Our Services</h3>
        <div className="box">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fas fa-taxi" aria-hidden="true" />
                <div className="title">
                  <h4>Faster Delivery</h4>
                </div>
                <div className="text">
                  <span>Fast Delivery Services offers personal and corporate courier services. Our services varies from distribute personal invitation/flyers,We can also target the right market for you! </span>
                </div>
                
              </div>
            </div>	 
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fas fa-comment-dollar " aria-hidden="true" />
                <div className="title">
                  <h4>Cash On Delivery</h4>
                </div>
                <div className="text">
                  <span>Did you know that most customers prefer to pay via cash over any other mode of payment? Many online sellers are afraid to offer the COD payment option and suffer from a loss of business due to this.</span>
                </div>
                
              </div>
            </div>	 
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="box-part text-center">
                <i className="fas fa-business-time" aria-hidden="true" />
                <div className="title">
                  <h4>Available 24/7</h4>
                </div>
                <div className="text">
                  <span>To provide the best customer support to our valued customers, we offer 24/7 support! You are always welcome to call our offices during normal business hours, email customer service 24/7.</span>
                </div>
                
              </div>
            </div>	 
            
           
           </div>
        </div>
      </div>
      </div>
    )
}
 export default Service;