import React, { useState } from 'react'
import service1 from '../../assets/about/service1.svg';
import service2 from '../../assets/about/service2.svg';
import service4 from '../../assets/about/service4.svg';
import service1modal from '../../assets/about/service1modal.svg';
import service2modal from '../../assets/about/service2modal.svg';
import service3modal from '../../assets/about/service3modal.svg';
import ServicesModal from './ServicesModal';
import Modal from '../utils/Modal';
const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const services = [
        {
            id: 1,
            link: service1,
            modalLink: service1modal,
            title: "Trip Planning Call",
            desc: "Connect with suitable explorers as your trip planner for your upcoming tours. Do better planning for your tours with the help of locals or tourists who already explored the location.",
            extra: "Plan better - explore more!",
        },
        {
            id: 2,
            link: service2,
            modalLink: service2modal,
            title: "Immediate Local Assistant",
            desc: "Get a friendly Local assistant while you travel and solve your emergency tasks with the help of our most positive and helpful people of CulturTap Community ",
            extra: "(ex; need a mechanic for your car, out of fuel, Medical assistance& much more you can imagine ) "
        },
        {
            id: 3,
            link: service4,
            modalLink: service3modal,
            title: "Emergency Local Assistant",
            desc: "You can connect with emergency services like; Ambulance, Police, Fire rescue etc, through our app.Travel safe with CulturTap.",
            extra: "",
        }
    ]

    return (
        <div className='max-lg:px-[50px] mx-auto lg:ml-[180px] mt-[20px]'>
            <div className='lg:mr-[186px]'>
                <h2 className='text-[40px] font-bold '>About Us</h2>
                <p className='text-[16px] mt-[43px]'>Culturtap is a travel based community app that aims to make your travel easier by providing real-time updates and connecting you with people whenever you need help to makes your travel easier, safer and enjoyable.
                </p>
                <p className='text-[16px] mt-[25px]'>
                    <span className='font-bold'>Download CulturTap app:</span>  which helps you to explore the whole culture of your selected destinations with just a few taps! <br />
                    Plan better - explore more!
                </p>
                <p className='text-[16px] mt-[25px]'>
                    Choose your destinations, CulturTap presents  you the real-time updates, including popular visits, top-rated restaurants, trending locations, outskirts, traditional fashion, nearby pubs and cafes, street food, historical heritage, festivals, handy crafts, service shops and business shops etc.
                </p>
            </div>
            {
                isOpen && < ServicesModal isOpen={isOpen} onClose={closeModal} service={modalData} />

            }
            <div className='mt-[76px]'>
                <h2 className='text-[40px] font-bold '>Services</h2>
                <p className=''>We offered services related to tour planning & tourist safety. </p>
                <div className='flex max-md:flex-col max-md:items-center mt-[44px] gap-[25px]'>

                    {
                        services.map((service) => {
                            return (
                                <div key={service.id} className='w-[325px] h-[505px] rounded-3xl shadow-md'>
                                    <img src={service.link} alt="services" className="object-none rounded-t-3xl" />
                                    <h3 className='w-3/5 mt-[35px] flex text-[20px] mx-auto justify-center text-center font-bold '>{service.title}</h3>
                                    <p onClick={() => { openModal(); setModalData(service); }} className='w-[max-content] mx-auto justify-center cursor-pointer mt-[31px] text-[16px] text-[#fbbc00] border-b-2 border-[#fbbc00] pb-1'>Know more</p>
                                    {/* {console.log('servidceee', service)}; */}
                                    {/* <ServicesModal isOpen={isOpen} onClose={closeModal} service={service} /> */}

                                </div>
                            )
                        })
                    }

                    <div>
                        <p className='text-[20px] font-bold'>More opportunities for <br />
                            ground audience.</p>
                        <p className='text-[16px] mt-[17px]'>We are dedicate to serve humanity <br />
                            better and make this earth a better <br />
                            place to live on. </p>
                        <p className='text-[16px] text-[#fb8c00] w-[max-content] border-b-2 border-[#fb8c00] mt-[22px]'>Upcoming Launch</p>
                        <p className='text-[16px] text-[#fb8c00] w-[max-content] border-b-2 border-[#fb8c00] mt-[17px]'>What's next?</p>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default About
