import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import {Routes , Route} from "react-router-dom"  
import Home from './Components/Home/Home';
import Product from './Components/Product.jsx/product';
import ProductID from './Components/ProductID/ProductID';

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/product" element = {<Product/>}/>
        <Route path = "/:id"  element = {<ProductID/>}/>
      </Routes>
    </div>
  );
}

export default App;
