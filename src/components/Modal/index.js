// src/components/Modal.js
import React from 'react';
import './Modal.scss'; // Đừng quên tạo file CSS cho modal

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal">
                <p>{message}</p>
                <h2>✔</h2>
            </div>
        </div>
    );
};

export default Modal;
