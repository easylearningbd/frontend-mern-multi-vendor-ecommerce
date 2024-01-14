import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

 

const Header = () => {
    return (
        <div className='w-full bg-white'>
            <div className='header-top bg-[#caddff] md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[50px] text-slate-500'>
                        <ul className='flex justify-start items-center gap-8 font-semibold text-black'>
                            <li className='flex relative justify-center items-center gap-2 text-sm after:absolute after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px]'>
                                <span><MdEmail /></span>
                                <span>support@gmail.com</span>
                            </li>

                            <li className='flex relative justify-center items-center gap-2 text-sm '>
                                <span><IoMdPhonePortrait  /></span>
                                <span>+(123) 3243 343</span>
                            </li> 
                        </ul>

                        <div>
                            <div className='flex justify-center items-center gap-10'>
                                <div className='flex justify-center items-center gap-4 text-black'>
                                    <a href="#"><FaFacebookF /></a>
                                    <a href="#"><FaTwitter /> </a>
                                    <a href="#"><FaLinkedin /></a>
                                    <a href="#"><FaGithub /> </a> 
                                </div>
        <div className='flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]'>
            <img src="http://localhost:3000/images/language.png" alt="" />
            <span><IoMdArrowDropdown /></span>
            <ul className='absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10'>
            <li>Hindi</li>
            <li>English</li>
            </ul>
        </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
           
        </div>
    );
};

export default Header;