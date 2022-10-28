import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {BsCart} from "react-icons/bs";

const Header = () => {
  return (
    <div className="header-section">
      Shopping Cart
      
      <h1 style ={{
        border: "1px solid red",
        width:"100px",
      }}>
        <Link to="/" className="logo" style={{
          width: "100%",
          
        }}>
          <BsCart style={{
            color:"black",
             fontSize :"100px",
             height:"100px" }}/>
        </Link>
      </h1>
    </div>
  );
};

export default Header;
