import React from "react";
import{BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductDetails from "./components/ProductDetails";

function App(){
  return(
    <Router>
      <Header />
      <Routes>
        <Route path="/" element ={<ProductList />} />
        <Route path="/login" element ={<Login />} />
        <Route path="/register" element ={<Register />} />
        <Route path="product/:id/" element ={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
export default App;
