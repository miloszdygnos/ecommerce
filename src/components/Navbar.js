import React from "react";
import { NavLink } from "react-router-dom";
import { Cart } from "./ProductsShowcase";
export default function Navbar() {


    return(
        <nav>
            <span className="logo"><span>Sneaker Head</span><span className="logoDescription">sneakers online shop</span></span>
            <ul className="list">
                <NavLink className={({isActive}) =>{
                    return isActive ? "listElement link--active" : "listElement"} 
                } to="/">home</NavLink>
                <NavLink className={({isActive}) =>{
                    return isActive ? "listElement link--active" : "listElement"} 
                } to="/products">products</NavLink>
                <NavLink className={({isActive}) =>{
                    return isActive ? "listElement link--active" : "listElement"} 
                } to="/contact">contact</NavLink>
                <Cart />
            </ul>
        </nav>
    )
}