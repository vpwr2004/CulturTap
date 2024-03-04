import React from 'react'
import Modal from '../utils/Modal'

const ServicesModal = ({ isOpen, onClose, service }) => {
    console.log("service", service);
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div>
                <div>
                    <img src={service.link} alt="service" />
                </div>
            </div>
        </Modal>
    )
}

export default ServicesModal;
