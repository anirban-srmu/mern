import React,{useEffect , useState} from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () =>{
    const [products,setProducts] = useState([]);

    useEffect(()=>{
        const fetchProducts = async () =>{
            try{
                const response = await axios.get("http://localhost:500/api/products");
                setProducts(response.data);
            }catch (error){
                console.error("Error fetching product: ",error);
            }
        };
        fetchProducts();
    },[]);

    return(
        <div className="product-list">
        {products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
        ))}
        </div>
    );
};

export default  ProductList;

