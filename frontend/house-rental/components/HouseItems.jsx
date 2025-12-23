import React from "react"
import { useLoaderData } from "react-router-dom"
import chicken from "./chicken-Wrap.jpg" 
import { IoLocation } from "react-icons/io5";

export default function HouseItems(){
    const allHouses = useLoaderData()
    console.log(allHouses)
    return (
        <>
        <div className="intro"></div>
        <div className="card-container">
             
            {allHouses.map((item, index) => {
                return (
                    <div key={index} className="card">
                        <img src={chicken} alt="" width="120px" height="100px"/>
                        <div className="card-body">
                            <div className="title">{item.title}</div>
                            <div className="location"><IoLocation /> <div className="loc">{item.location}</div></div>
                            <div className="price">{item.price}ETB</div>
                            
                        </div>

                    </div>
                )
            })}
        </div>
        </>
        
    )
}