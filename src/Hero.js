import React from "react";
import group from "./Group.png"
import "./style.css"


export default function Hero(){

    const date = new Date();
    const hours = date.getHours();
    const hoursMin = date.getHours()+ ":" + date.getMinutes();
    let timeOfDay;


    if(hours < 12){
        timeOfDay = "morning"
   } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
   } else {
        timeOfDay = "night"
   }

    return (
        <section className="hero">
        <h3>{hoursMin} Good {timeOfDay}!</h3>
        <img src= {group} alt='Group images from airbnb' className="hero--photo"/>
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text">join unique interactive activities led by 
           one-of-a-kind hosts—all without leaving home.</p>

    </section>
    )

}