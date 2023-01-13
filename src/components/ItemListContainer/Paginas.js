import React from "react";
import {Switch, Route} from "react-router-dom"
import { Inicio } from "../Inicio/"
import {ProductosLista} from "../ItemListContainer/itemListContainer"
import { ProductosDetalles } from "../ItemListContainer/ProductosDetalles";

export const Paginas=()=>{
    return(
        <section>
        <Switch> 
            <Route path="/" exact component={Inicio}/>
            <Route path="/productos" exact component={ProductosLista}/>
            <Route path="/producto/:id" exact component={ProductosDetalles} />
            </Switch>
        </section>
    )
}
export default Paginas