import React from "react"
import {Link} from "react-router-dom"

export const ProductoItems = ({titulo, imagen, categoria, price, id}) => {
    return(
        <div key={id} className="producto">
        <Link to={`/productos${id}`}>
        <div className="producto__img">
          <img src={imagen} alt={titulo} />
        </div>
        </Link>
        <div className="producto__footer">
          <h1>{titulo}</h1>
          <p>{categoria}</p>
          <p className="price">${price} </p>
        </div>
        <div className="buttom">
          <button className="btn">Añadir al carrito</button>
          </div>
          <div className="buttom2">
           <Link to={`/producto/${id}`} className="btn">Vista</Link>
          </div>
        </div>
        
    );
  };
 

export default ProductoItems