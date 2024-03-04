import React from 'react';
import logo from '../../assets/navbar/culturTap logo.svg';
import appStore from '../../assets/navbar/appStore.svg';
import playStore from '../../assets/navbar/playStore.svg';
import culturTapName from '../../assets/Home/culturtap.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-screen flex justify-between gap-10'>
            <div className='pt-[14px] pl-[14px] relative '>
                <img src={logo} alt="logo" width="102px" height="102px" />
                <div className='absolute top-[170px] left-[8px]'>
                    <img src={culturTapName} alt="culturTap" />
                </div>
            </div>
            <div className='w-[840px] flex justify-around text-[#2f2341] text-[16px]'>
                <div className='w-full flex pt-[65px]'>


                    <div className='w-[117px]'>
                        <Link to='/'>Home</Link>
                    </div>
                    <div className='w-[117px]'>
                        <Link to='/about'>About Us</Link>
                    </div>
                    <div className='w-[117px]'>
                        <Link to='/earn'>Earn with us</Link>
                    </div>
                    <div className='w-[117px]'>
                        <Link to='/contact'>Contact Us</Link>
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
