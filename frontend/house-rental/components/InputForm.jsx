import React from 'react'
import {useState} from 'react'
import axios from 'axios'

export default function InputForm({setIsOpen}){
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [isSignUp , setIsSignUp] = useState(false)
    const [error , setError] = useState("")

    const handleOnSubmit=async(e)=>{
        e.preventDefault();
        let endpoint = (isSignUp) ? "signUp" : "login"
        await axios.post(`http://localhost:5000/${endpoint}`, {email, password})
        .then((res)=>{
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            setIsOpen()
        }) 
        .catch(data => setError(data.response?.data?.error))
        // alert("Logged In Successfully")
    }
    return (
        <> 
        <form className="form" onSubmit={handleOnSubmit}>
            <div className="form-control">
                <label htmlFor="">Email</label>
                <input type="email" className ="input" onChange={(e)=>setEmail(e.target.value)} required/>

            </div>
            <div className="form-control">
                <label htmlFor="">Password</label>
                <input type="password" className ="input" onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            {(error!="") && <h6 className='error'>{error}</h6>}
            <button type='submit'>{(isSignUp) ? "Sign Up" : "Login"}</button>
            
            <p onClick={()=>setIsSignUp(prev => !prev)}>{(isSignUp) ? "Already have an account" : "Create new account" }</p>
        </form>
        </>
    )
}