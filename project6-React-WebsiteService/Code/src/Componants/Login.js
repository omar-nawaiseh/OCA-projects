import React, { Component } from 'react'
import '../Css/Login.css' 




const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


class Login extends Component { 
  
 constructor(props) {
   super(props)
 
 
  this.state = {
    firstName: 
    "",
    email: "",
    password: "",
    formErrors: {
      firstName: "",
      email: "",
      password: ""
    }
} };




handleSubmit = e => {
e.preventDefault();
let obj = {

  email: this.state.email,
  password: this.state.password
}

let password = JSON.parse(window.localStorage.getItem('user')).password;
let email = JSON.parse(window.localStorage.getItem('user')).email;

// alert(password);
// alert(email);
// if (localStorage.getItem(obj.user)) {
//   if (obj.password === JSON.parse(localStorage.getItem(obj.user)).password) {
//     window.location = "/profile";
//     const myObj = JSON.parse(localStorage.getItem(obj.user));
//     localStorage.setItem('user', JSON.stringify(myObj));

//   } else {
//     alert("password Wrong");
//   }

// } else {
//   alert('email not found');
// }

if(password === obj.password && email === obj.email) {
  window.location = "/profile";
}else {
  alert("your email or password are rong")
}
};


setData() {
  // let obj = {

  //   email: this.state.email,
  //   password: this.state.password
  // }

  // if (localStorage.getItem(obj.user)) {
  //   if (obj.password === JSON.parse(localStorage.getItem(obj.user)).password) {
  //     window.location = "/profile";
  //     const myObj = JSON.parse(localStorage.getItem(obj.user));
  //     localStorage.setItem('user', JSON.stringify(myObj));

  //   } else {
  //     alert("password Wrong");
  //   }

  // } else {
  //   alert('email not found');
  // }

  // localStorage.getItem(obj.email) ? obj.password == JSON.parse(localStorage.getItem(obj.email)).password ? 

  // {
  //   alert("success");
  //   const myObj = JSON.parse(localStorage.getItem(obj.email));
  //   localStorage.setItem('email', myObj);

  // }
  // : alert("password Wrong") : alert("no");

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
    case "lastName":
      formErrors.lastName =
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
  return (    
    <form className="form1" onSubmit={this.handleSubmit} >
    <div>       
        <div className='bold-line'></div>
        <div className='containers'>
          <div className='window'>
            <div className='overlay'></div>
            <div className='content'>
              <div className='welcome'>Wellcome To Marley</div>
              {/* <div className='subtitle'>We're almost done. Before using our services you need to create an account.</div> */}
              <div className='input-fields'>
    
                {/* <div className="firstName">
                <input  placeholder='Username' className='input-line full-width'
                required
                className={formErrors.firstName.length > 0 ? "error" : null}
                 
                type="text"
                name="firstName"
                 
                onChange={this.handleChange}
                ></input>
                 {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
                )}
                </div> */}
    
                <div className="email">
                <input placeholder='Email' className='input-line full-width'
                //  className={formErrors.email.length > 0 ? "error" : null}
                 type="email"
                  name="email"
                   required
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
                 required
                 onChange={this.handleChange}
                
                ></input> 
                {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
                )} */}
                </div>
                
        
              </div>
          
              <div className="createAccount"><button className='ghost-round full-width' type="submit" >Login</button></div>
            </div>
          </div>
        </div> 
        </div> 
    </form>   )  }}
export default Login;