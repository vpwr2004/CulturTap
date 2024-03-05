import React from 'react'
import facebook from '../../assets/footer/facebook.svg';
import twitter from '../../assets/footer/twitter.svg';
import linkedin from '../../assets/footer/linkedin.svg';
import instagram from '../../assets/footer/insta.svg';
import playStore from '../../assets/footer/playStore.svg';
import appStore from '../../assets/footer/appStore.svg';
import { Link } from 'react-router-dom';

const Footer = () => {


    return (
        <div className='w-screen flex justify-between pl-[150px] pr-[150px] mt-[50px] pb-[30px] pt-[30px] bg-[#f5f5f5]'>
            <div className='w-1/2 flex justify-between'>
                <div>
                    <p>@2024 All rights reserved to <br /> CulturTap Tourism Indai Pvt. Ltd.</p>
                    <div className='mt-[26px] font-bold text-[#2e2c43]'>Registered Office</div>
                    <p>189/2, Out side datia gate, <br />Jhansi, Uttar Pradesh, India. <br />284002</p>
                </div>
                <div>
                    <p className='text-[#2e2c43] font-bold'>Help Center</p>
                    <p className='flex flex-col '><Link to='/contact/report'> Report Concern </Link> <Link to='/contact'>Contact Us</Link> </p>
                    <p className='mt-[15px] font-bold text-[#2e2c43]'>Careers</p>
                    <p>Open Opportunities</p>
                </div>
            </div>

            <div>
                <p className='text-[#2e2c43] font-bold content-baseline'>Follow Us</p>
                <div className='flex gap-2 mt-3 cursor-pointer'>
                    <a href='#' className='w-[32px] h-[32px]'>
                        <img src={facebook} alt="logo" loading='lazy' />
                    </a>
                    <a href='#' className='w-[32px] h-[32px] pt-[2px] cursor-pointer'>
                        <img src={twitter} alt="logo" loading='lazy' />
                    </a>
                    <a href='#' className='w-[32px] h-[32px] cursor-pointer'>
                        <img src={linkedin} alt="logo" loading='lazy' />
                    </a>
                    <a href='#' className='w-[32px] h-[32px] cursor-pointer' >
                        <img src={instagram} alt="logo" loading='lazy' />
                    </a>
                </div>
                <p className='text-[#2e2c43] font-bold mt-[25px] mb-[10px]'>Download App</p>
                <div className='flex'>
                    <a href='#' className='pt-[12px] cursor-pointer'>
                        <img src={appStore} alt="logo" loading='lazy' />
                    </a>
                    <a href='#' className='cursor-pointer'>
                        <img src={playStore} alt="logo" loading='lazy' />
                    </a>
                </div>


            </div>
        </div >
    )
}

export default Footer