import React, { useEffect } from "react"
import {useState} from 'react'
import Modal from './Modal'
import InputForm from './InputForm'
import {NavLink} from 'react-router-dom'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)
  // user wont be able to see the myhouse and add property if not logged in
  let token = localStorage.getItem("token")
  const [isLogin, setIsLogin] = useState(token ? false : true)

  useEffect(()=>{
    setIsLogin(token ? false: true)
  },[token])


  const checkLogin=()=>{
    if (token){
      localStorage.removeItem("token")
      localStorage.removeItem("user")
      setIsLogin(true)
    }
    else{
      setIsOpen(true)
    }
    
  }
    return (
        <> 
          <header className="navbar">
            <h2 className="logo">Sancuary</h2>

            <ul className="nav-links">
              <li > <NavLink to="/">Home</NavLink> </li>
              <li onClick={()=>isLogin && setIsOpen(true)}> <NavLink to={!isLogin ? "/addProperty" : "/"}>Add Property</NavLink> </li>
              <li onClick={()=>isLogin && setIsOpen(true)}> <NavLink to={!isLogin ? "/myProperty" : "/"}>My Property</NavLink> </li>
              <li onClick={checkLogin} className="nav-item login">{(isLogin)? "Login" : "LogOut"}</li>
            </ul>
          </header>
        {(isOpen) && <Modal onClose={() => setIsOpen(false)}> <InputForm setIsOpen={()=> setIsOpen(false)} /> </ Modal>}
        </>
    )
}