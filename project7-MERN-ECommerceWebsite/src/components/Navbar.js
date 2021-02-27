import "./Navbar.css";
import '../components/screens/RegisterScreen';
import '../components/screens/LoginScreen';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// const jsonObj = JSON.parse(localStorage.getItem('authToken'));
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  if(localStorage.getItem('authToken')==null){
    console.log('no')
  } else{
    console.log('yesss')

  };

  function logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('email');
    localStorage.removeItem('username');
    localStorage.removeItem('defaultImg');
    localStorage.removeItem('emailProfile');
    localStorage.removeItem('nameProfile');
    localStorage.removeItem('imageUrlProfile');
    localStorage.removeItem('loginProfile');
    localStorage.removeItem('googleSessionAccessToken');
    localStorage.removeItem('oauth2_ss::http://localhost:3000::1::DEFAULT::_ss_');
    localStorage.removeItem('promo');
    localStorage.removeItem("cart");
    window.location.reload(false);
  };
  
 
  return (
    <nav className="navbar">
            <Link to="/" className="navbar__logo"> <img src="https://i.ibb.co/cLhcC2W/image.png" alt="logoangry" /></Link>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
    
        {(localStorage.getItem("authToken") || localStorage.getItem("googleSessionAccessToken")) ? (
          <>
            <li onClick="document.location.reload(true)">
              <Link to="/Profile">Profile</Link>
            </li>
            <li className="test" onClick={logout}><Link to="/">Logout</Link></li>
          </>
        ) : (
          <>
            {" "}
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
      <div className="hamburger__menu" onClick={click}>
      </div>
    </nav>
  );
};

export default Navbar;
