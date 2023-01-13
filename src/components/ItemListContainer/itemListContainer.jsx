  import React,{useContext} from "react";
import { DataContext } from "../context/Dataprovider";
import { ProductoItems } from "./Productos";
  export const ProductosLista =()=>{

    const value= useContext(DataContext)
    const  [productos] = value.productos
    console.log(productos)
    return(
      <>
  <h1 className="title">Productos</h1>
      <div className="productos">
      
        {
            productos.map(producto =>(
              <ProductoItems 
                  key={producto.id}
                  titulo={producto.titulo}
                  imagen={producto.imagen}
                  categoria={producto.categoria}
                  price={producto.price}
                  id={producto.id}
              />
          ))
      }					
</div>

</>
)
}
  
  export default ProductosLista;