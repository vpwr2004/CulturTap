import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/navbar/culturTap logo.svg';
import appStore from '../../assets/navbar/appStore.svg';
import playStore from '../../assets/navbar/playStore.svg';
import culturTapName from '../../assets/Home/culturtap.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    // const currentURL = window.location.href;
    const [currPage, setCurrPage] = useState("home");
    const currentURLRef = useRef(window.location.href);
    const [updatedURL, setUpdatedURL] = useState(window.location.href);

    const location = useLocation();
    useEffect(() => {
        setUpdatedURL(location.pathname);
        // console.log('updated URL: ' + updatedURL);
    }, [location]);


    useEffect(() => {
        if (updatedURL.includes('about')) {
            setCurrPage("about");
        }
        else if (updatedURL.includes('earn')) {
            setCurrPage("earn");
        }
        else if (updatedURL.includes('contact')) {
            setCurrPage("contact");
        }
        else {
            setCurrPage("home");

        }
        // console.log('url', currPage);

    }, [updatedURL]);

    return (
        <div className='w-screen flex justify-between gap-10'>
            <div className='pt-[14px] pl-[14px] relative '>
                <img src={logo} alt="logo" width="102px" height="102px" />
                <div className='absolute top-[170px] left-[8px]'>
                    <img src={culturTapName} alt="culturTap" />
                </div>
            </div>
            <div className='w-[840px] flex justify-around text-[#2f2341] text-[16px]'>
                <div className='w-full flex pt-[65px] gap-[40px]'>


                    <div className='w-[max-content]'>
                        <Link to='/' className={`${currPage === "home" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>Home</Link>
                    </div>
                    <div className='w-[max-content]'>
                        <Link to='/about' className={`${currPage === "about" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>About Us</Link>
                    </div>
                    <div className='w-[max-content]'>
                        <Link to='/earn' className={`${currPage === "earn" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>Earn with us</Link>
                    </div>
                    <div className='w-[max-content]'>
                        <Link to='/contact' className={`${currPage === "contact" ? "font-bold border-b-4 pb-3 border-[#fb8c00]" : ""}`}>Contact Us</Link>
                    </div>
                </div>
                <div className='w-full flex '>
                    <a href="#" className='pt-[46px]'>
                        <img src={appStore} alt="appStore" width="149px" height="44px" />
                    </a>
                    <a href="#" className='pt-[36px]'>
                        <img src={playStore} alt="playStore" width="165px" height="64px" />
                    </a>
                </div>
            </div>


        </div >
    )
}

export default Navbar;
