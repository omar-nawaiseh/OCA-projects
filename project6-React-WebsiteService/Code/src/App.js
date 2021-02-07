import React, { Component } from 'react'
import Header from './Componants/header'
import Login from './Componants/Login'
import Register from './Componants/Register'
import { BrowserRouter ,Route} from 'react-router-dom'
import Landingpage from './Componants/Landing'
import Services from './Componants/Services';
import Profile from './Componants/Profile';


 class App extends Component {
  render() {
    return (

      <BrowserRouter> 
        <Header />
        <Route exact path ="/" component={Landingpage}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register"component={Register}/>
        <Route path="/Services"component={Services}/>
        <Route path="/Profile"component={Profile}/>
        </BrowserRouter>
        


    )
  }
}
export default App;