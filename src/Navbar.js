import React from "react";
import airbnb from "./airbnb.png"
import "./style.css"

export default function Navbar(){
    return (
        <nav>
            <img src= {airbnb} alt='Airbnb Logo' className="nav--logo" />
        </nav>
    )
    
}