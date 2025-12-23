import React from 'react'

export default function Modal({children, onClose}){

    return (
        <> 
            <div className='modal-container' onClick={onClose}>
                <dialog className="modal" open>{children}</dialog>
            </div>
        </>
    )
}