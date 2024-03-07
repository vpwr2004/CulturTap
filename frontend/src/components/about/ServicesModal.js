import React from 'react'
import Modal from '../utils/Modal'
import appStore from '../../assets/navbar/appStore.svg';
import playStore from '../../assets/navbar/playStore.svg';
const ServicesModal = ({ isOpen, onClose, service }) => {
    console.log("service", service);
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className='w-[629px] h-[570px] overflow-hidden rounded-2xl'>
                <div className='relative'>
                    <img src={service.modalLink} alt="service" className='w-[629px] h-[280px] scale-105' />
                    <p className='text-center font-bold text-[24px] mt-3'>{service.title}</p>
                    <p className='w-4/5 text-[16px] mx-auto text-center mt-2'>{service.desc}</p>
                    <p className='font-semibold text-center w-4/5 mx-auto text-[16px]'>{service.extra}</p>
                    <p className='font-bold text-[16px] text-[#2e2c43] text-center mt-3 '>Download App Now</p>
                    <div className='flex justify-center absolute  left-[180px] '>
                        <img src={appStore} alt="app" />
                        <img src={playStore} alt="app" />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ServicesModal;
