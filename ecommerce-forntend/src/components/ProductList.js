import React,{useEffect , useState} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () =>{
    const [product,setProducts] = userState([]);

    useEffect(()=>{
        const fetchProducts = async () =>{
            try{
                const response = await axios.get("http://localhost:500/api/products");
                setProducts(response.data);
            }catch (error){
                console.error("Error fetching product: ",erorr);
            }
        };
        fetchProducts();
    },[]);

    return(
        <div className="product-list">
        {product.map((product)=>(
            <ProductCard key={product._id} product={product}/>

        ))}
        </div>
    );
};

export default  ProductList;

