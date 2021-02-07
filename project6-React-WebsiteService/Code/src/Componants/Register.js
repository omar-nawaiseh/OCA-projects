import React, { Component } from 'react'
import '../Css/Login.css' 

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);



class Register extends Component {  

  constructor(props) {
    super(props)


        this.state = {
            firstName: "",
            email: "",
            password: "",
            formErrors: {
              firstName: "",
              email: "",
              password: ""
            }
 } };
        
  


    // handleSubmit = e => {

    //   const { name, value } = e.target;
    //     e.preventDefault();
    //     if(this.state.password.length < 6 && this.state.firstName.length >= 3  ){
    //       let obj = {
    //           firstName: this.state.firstName,
    //           email: this.state.email,
    //           password: this.state.password
    //       }
    //       localStorage.setItem('user', JSON.stringify(obj))
    //        }else{
    //        alert('wrong in register');
    //        window.location = "/Register";
           
    //       }
    //   };


    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.password == "" && this.state.firstName == "") {
         
        }else {
         
          let obj = {
            firstName: this.state.firstName,
            email: this.state.email,
            password: this.state.password,}
  
          
          localStorage.setItem("user", JSON.stringify(obj))
          // localStorage.setItem("email", JSON.stringify(obj))
          window.location = "/profile";
     
          // localStorage.setItem('Data', JSON.stringify(obj))
        }
      
        }
    

        handleChange = e => {
            e.preventDefault();
            const { name, value } = e.target;
            let formErrors = { ...this.state.formErrors };
        
            switch (name) {
              case "firstName":
                formErrors.firstName =
                  value.length < 3 ? "minimum 3 characaters required" : "";
                break;
              case "email":
                formErrors.email = emailRegex.test(value)
                  ? ""
                  : "invalid email address";
                break;
              case "password":
                formErrors.password =
                  value.length < 6 ? "minimum 6 characaters required" : "";
                break;
              default:
                break;
            }
        
            this.setState({ formErrors, [name]: value }, () => console.log(this.state));
          };




    render() {  
      
      // const {formErrors}=this.state;
         return (           
<form className="form1" onSubmit={this.handleSubmit} >
    <div>       
        <div className='bold-line'></div>
        <div className='containers'>
          <div className='window'>
            <div className='overlay'></div>
            <div className='content'>
              <div className='welcome'>Welcome To Marley</div>
              {/* <div className='subtitle'>We're almost done. Before using our services you need to create an account.</div> */}
              <div className='input-fields'>
    
                <div className="firstName">
                <input  placeholder='Username' className='input-line full-width'
             
                // className={formErrors.firstName.length > 0 ? "error" : null}
                 
                type="text"
                name="firstName"
                 
                onChange={this.handleChange}
                ></input>
                {/* {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
                )} */}
                </div>
    
                <div className="email">
                <input placeholder='Email' className='input-line full-width'
                //  className={formErrors.email.length > 0 ? "error" : null}
                 type="email"
                  name="email"
              
                      onChange={this.handleChange}
               
                  
                ></input>
                {/* {formErrors.email.length > 0 && (
                   <span className="errorMessage">{formErrors.email}</span>
                 )} */}
                </div>
    
                <div className="password" >
                <input placeholder='Password' className='input-line full-width'
                //  className={formErrors.password.length > 0 ? "error" : null}
                 placeholder="Password"
                 type="password"
                 name="password"
              
                 onChange={this.handleChange}
                
                ></input> 
                {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
                )} */}
                </div>
                
        
              </div>
          
              <div className="createAccount"><button className='ghost-round full-width'type="submit" >Register</button></div>
            </div>
          </div>
        </div> 
        </div> 
    </form> 
                             )
                         
                         }
                    }
export default Register;