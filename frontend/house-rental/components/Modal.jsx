import React from 'react'

export default function Modal({ children, onClose }) {
  return (
    <div className="modal-container" onClick={onClose}>
      <dialog
        className="modal"
        open
        onClick={(e) => e.stopPropagation()} // ⭐ KEY FIX
      >
        {children}
      </dialog>
    </div>
  )
}
