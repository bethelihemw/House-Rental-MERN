import React from "react"
import {useState} from 'react'
import Modal from './Modal'
import InputForm from './InputForm'

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false)

  const checkLogin=()=>{
    setIsOpen(true)
  }
    return (
        <> 
          <header className="navbar">
            <h2 className="logo">Sancuary</h2>

            <ul className="nav-links">
              <li className="nav-item active">Home</li>
              <li className="nav-item">Add Property</li>
              <li className="nav-item">My Property</li>
              <li onClick={checkLogin} className="nav-item login">Login</li>
            </ul>
          </header>
        {(isOpen) && <Modal onClose={() => setIsOpen(false)}> <InputForm /> </ Modal>}
        </>
    )
}