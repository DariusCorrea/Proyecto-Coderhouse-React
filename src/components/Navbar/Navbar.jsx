import React from "react";
import { Link } from "react-router-dom";

export const Navbar=()=>{

 
  return (
    <header>
      <div className="menu">
      <box-icon name="menu"></box-icon>
      </div>
      <Link to="/">
      <a>Inicio</a>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/productos">PRODUCTOS</Link>
        </li>
      </ul>
      
    </header>
    
  );
};

export default Navbar
