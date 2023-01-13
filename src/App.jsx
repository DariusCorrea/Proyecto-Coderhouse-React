import React from "react"
import{
    BrowserRouter as Router
    } 
    from "react-router-dom"
    import {Paginas} from "./components/ItemListContainer/Paginas"
import 'boxicons'
import {Navbar} from "./components/Navbar/Navbar"
import { DataProvider } from "./components/context/Dataprovider"
function App() {
    return (
        <DataProvider>
        <Router> 
        <Navbar/>
    <Paginas/>
    </Router>
</DataProvider>
);
}

export default App