import "./CartScreen.css";
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {Button  } from 'react-bootstrap';
 import POPUP from '../components/POPUp'

import { Link } from "react-router-dom";


import { ButtonToggle } from "reactstrap";

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const usertoken=localStorage.getItem('authToken');
  const isloggin= usertoken;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = (props) => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const [buttonPopup,setButtonPopup]= useState(false);
  const [timedPopup,setTimedPopup]= useState(false);

useEffect(()=>{
  setTimeout(()=>{
    setTimedPopup(true);
    },3000);
},[]);

if(localStorage.getItem('authToken')==null){
  console.log('no')
} else{
  console.log('yesss')

};

const order = () => {
  // sessionStorage.removeItem("productTest");
  sessionStorage.setItem("Total", [getCartSubTotal()]);
  sessionStorage.setItem("productCount", [getCartCount()]);
  localStorage.removeItem("cart");
  window.location.reload(false);
};


if(localStorage.getItem('authToken') === null && localStorage.getItem("googleSessionAccessToken") === null){
 var btn= <button id="btn1"><Link to="/register" className="cartbtn">Register To Checkout</Link></button>
} else{
  var btn=<button onClick={order} id="btn2"  ><Link to="/Profile" className="cartbtn" >Checkout</Link></button>
}

// if(localStorage.getItem('authToken') === null){
//   var btn= <button id="btn1"><Link to="/register" className="cartbtn">Register To Checkout</Link></button>
//  }else if (localStorage.getItem("googleSessionAccessToken") !== null ){
 
//  } else{
//    var btn=<button onClick={order} id="btn2"  ><Link to="/Profile" className="cartbtn" >Checkout</Link></button>
//  }
//cart


  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2 style={{color:"#4A707A"}}>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
          {/* <button onClick={order}>Proceed To Checkout</button> */}
           
{/*        
             <button onSubmit={()=>setButtonPopup(true)} 
                  >Proceed To Checkout</button>  */}       
{btn}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
