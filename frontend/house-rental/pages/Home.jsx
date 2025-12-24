import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import HouseItems from "../components/HouseItems"
import rooms from './room.jpg'
import { useNavigate } from "react-router-dom"
// import { Navigate } from "react-router-dom"
export default function Home(){
  const navigate= useNavigate()
  return (
    <> 
        <Navbar/>
        <div className="home-container">
          <div className="home-content">
            <h1>House Rental</h1>

            <p>
              Welcome to House Rental — a simple and reliable platform where property
              owners can list houses for rent and renters can easily find their next
              home. Browse available properties, explore details, and connect with
              owners effortlessly.
            </p>

            <button className="add-btn" onClick={()=>navigate("/addProperty")}>
              Add property to be rented
            </button>
          </div>

          <div className="home-image">
            <img src={rooms} alt="House for rent" />
          </div>
        </div>
        <div className="houses">
          < HouseItems />
        </div>
        
        <Footer/>
    </>
  )
}