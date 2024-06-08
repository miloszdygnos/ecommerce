import React, { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";
import "../styles/products.css"
import img1 from "../assets/jordan1.png";
import img2 from "../assets/jordan3.jpg";
import img3 from "../assets/jordan4.jpg";
import img4 from "../assets/jordan5.jpg";
import img5 from "../assets/jordan high.png";
import img6 from "../assets/jordan high2.png";

const productsArr =[ { 
        title:"jordan 1 panda",
        price: 1299,
        img:img1,
        id:1
    },
    {
        title:"nike high",
        price: 1499,
        img:img2,
        id:2

    },
    {
        title:"nike dunk panda",
        price: 2199,
        img:img3,
        id:3
        
    },
    {
        title:"jordan high blue",
        price: 999,
        img:img4,
        id:4

    },
    {
        title:"jordan 1 balenciaga",
        price: 1399,
        img:img5,
        id: 5
    },
    {
        title:"jordan bone high",
        price: 1689,
        img:img6,
        id:6
    }
    ,
    {
        title:"jordan 1 balenciaga",
        price: 1399,
        img:img5,
        id: 7
    },
    {
        title:"jordan bone high",
        price: 1689,
        img:img6,
        id:8
    }
    
]

export default function ProductShowcase() {

    const [products, setProducts] = useState(productsArr);
    const [cart,setCart] = useState([{}]);

    const handleAdding = (product) => {
        setCart(cart => [product, ...cart]);
    }
    const [search, setSearch] = useState("")
    const [filteredArr,setArr] = useState(productsArr);

    const handleFiltering = () => {   
        const filteredArr = products.filter(product => product.title.includes(search));
        setArr(filteredArr);
        console.log(filteredArr);
    }
    const handleReset = () => { 
        setArr(products);
        setSearch("")
    }
    return (
        <div>
            <div className="searchBar">
            <input 
                placeholder="what are you looking for?"
                type="text"
                value={search}
                onChange={e => {setSearch(e.target.value)}}
                
                >
                
            </input>
            <button 
                className="searchBtn"
                type="submit"
                onClick={handleFiltering}
            >
                search
            </button>
            <button type="submit"
                onClick={handleReset}
            >
                reset
            </button>
        </div>

            <div className="ProductsShowcase">
                
                {filteredArr.map((product) => {
                    return(
                        <div 
                        key={product.id} className="product" >
                        <img src={product.img} alt={product.title}></img>
                        <div className="descriptionBox">
                            <p>{product.title} <span className="price">${product.price}</span>
                                <button 
                                    className="addBtn"
                                    onClick={() => handleAdding(product)}
                                >add</button>
                            </p>
        
                        </div>
            </div>)})}
            </div>
        </div>
    )
}
export function Cart(cart) { 
    console.log(cart)
    return(<div>
        <li>
                    <button className="cart">🛒</button>
                    </li>
        </div>)
}