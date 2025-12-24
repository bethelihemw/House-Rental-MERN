import React from "react";

export default function AddProperty(){
    const onHandleChange=(e)=>{

    }
    return (
        <>
        <div className="container">
            <form action="" className="form">
                <div className="form-control">
                    <label htmlFor="">Title</label>
                    <input type="text" className="input" name="title"  onChange = {onHandleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="">Price</label>
                    <input type="text" className="input" name="price" onChange = {onHandleChange}  />
                </div>
                <div className="form-control">
                    <label htmlFor="">Location</label>
                    <input type="text" className="input" name="location" onChange = {onHandleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="">Description</label>
                    <textarea type="text" className="input-textarea" name="description" rows="5" onChange = {onHandleChange} > </textarea>
                </div>
                <div className="form-control">
                    <label htmlFor="">House Image</label>
                    <input type="file" className="input" name="file" rows="5" onChange = {onHandleChange} />
                </div>
                <button type="submit">Add House</button>
            </form>
        </div>
        </>
    )
}