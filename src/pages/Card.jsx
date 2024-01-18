import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

const Card = () => {

    const card_products = [1,2]
    const outOfStockProduct = [1,2]

    return (
        <div>
           <Header/>
           <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
            <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                    <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                <h2 className='text-3xl font-bold'>Card Page </h2>
                <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                        <Link to='/'>Home</Link>
                        <span className='pt-1'>
                        <IoIosArrowForward />
                        </span>
                        <span>Card </span>
                      </div>
                    </div> 
                </div> 
            </div> 
           </section>

    <section className='bg-[#eeeeee]'>
    <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16'>

        {
            card_products.length > 0 || outOfStockProduct > 0 ? <div className='flex flex-wrap'>
                <div className='w-[67%] md-lg:w-full'>
                    <div className='pr-3 md-lg:pr-0'>
                        <div className='flex flex-col gap-3'>
                            <div className='bg-white p-4'>
                    <h2 className='text-md text-green-500 font-semibold'>Stock Products {card_products.length}</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div> 
            
            : <div>
                <Link className='px-4 py-1 bg-indigo-500 text-white' to='/shops' > Shop Now</Link>
            </div>
        }

    </div>

    </section>

           <Footer/>
        </div>
    );
};

export default Card;