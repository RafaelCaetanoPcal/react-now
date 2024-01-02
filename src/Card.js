import React from "react";
import "./style.css";
import swimmer from "./swimmer.png";
import star from "./star.png"


export default function Card(props){

   
    return (
        
        <div className="card">
            
            <img src={swimmer} className="card--image" />
            <div className="card--stats">
            <img src={star} className="card--star"/>
                <span> 5.0</span>
                <span className="gray"> (6)° </span>
                <span className="gray">USA</span>
            </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><span className="bold">From</span> $136 / person</p>
        </div>
       

    )
}