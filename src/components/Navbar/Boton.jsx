import React from "react";
const Boton =() =>{
    const pulsarBoton= ()=>{
        console.log("aqui verás los productos") 
}
    return(
    <div>
    <button 
        className= "btn btn-dark"
        onClick={()=>{pulsarBoton()}}
        >
            Pulsame
        </button>
    
</div>
)
}


export default Boton