import React from 'react'
import './POPup.css';
import { Link } from "react-router-dom";
const POPUp=(props) =>{
    return (props.trigger)?(
        <div className="popup">
            <div className="popup-inner">
                {props.children}
              
                <Link to="/" className="close-btn" onClick={()=>props.setTrigger(false)}>close</Link>
                
            </div>
        </div>
    ) :"";
}

export default POPUp
