import React from "react"
import axios from "axios"
import "./App.css"
import Home from "../pages/Home"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import AddProperty from "../pages/AddProperty"


const getAllHouses = async() =>{
  let allHouses = []
  await axios.get('http://localhost:5000/house').then(res => {
    allHouses=res.data
  })
  return allHouses
}

const router=createBrowserRouter([
    {path:"/", element:<Home/>, loader:getAllHouses},
    {path:"/myProperty",element:<Home />, loader:getAllHouses},
      {path:"/addProperty",element:<AddProperty />}
])

export default function App(){
  return (
    <> 
    <RouterProvider router={router}> </RouterProvider>
    </>
  )
}