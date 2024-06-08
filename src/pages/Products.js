import React from "react";
import Navbar from "../components/Navbar";
import ProductShowcase from "../components/ProductsShowcase";
export default function Products() {


    
    return(
        <div className="productsPage">
            <Navbar />
            <ProductShowcase />
        </div>
    )
}