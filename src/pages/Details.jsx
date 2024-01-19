import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io"; 
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css'


const Details = () => {
    const images = [1,2,3,4,5,6]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mdtablet: {
            breakpoint: { max: 991, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        },
        smmobile: {
            breakpoint: { max: 640, min: 0 },
            items: 2
        },
        xsmobile: {
            breakpoint: { max: 440, min: 0 },
            items: 1
        },
    }

    return (
        <div>
            <Header/>
    <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
    <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
        <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
            <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
        <h2 className='text-3xl font-bold'>Product Details </h2>
        <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                <Link to='/'>Home</Link>
                <span className='pt-1'>
                <IoIosArrowForward />
                </span>
                <span>Product Details </span>
                </div>
            </div> 
        </div> 
    </div> 
    </section>

    <section>
        <div className='bg-slate-100 py-5 mb-5'>
            <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                <div className='flex justify-start items-center text-md text-slate-600 w-full'>
                    <Link to='/'>Home</Link>
                    <span className='pt-1'><IoIosArrowForward /></span>
                    <Link to='/'>Category</Link>
                    <span className='pt-1'><IoIosArrowForward /></span>
                    <span>Product Name </span>
                </div>

            </div>
        </div>
    </section>

        <section>
        <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
            <div className='grid grid-cols-2 md-lg:grid-cols-1 gap-8'>
                <div>
                <div className='p-5 border'>
                    <img className='h-[400px] w-full' src="http://localhost:3000/images/products/2.webp" alt="" />
                </div>
            <div className='py-3'>
                {
                    images && <Carousel
                    autoPlay={true}
                    infinite={true} 
                    responsive={responsive}
                    transitionDuration={500}
                >
                    {
                       images.map((img, i) => {
                        return (
                            <div>
                               <img className='h-[120px] cursor-pointer' src={`http://localhost:3000/images/products/${img}.webp`} alt="" /> 
                            </div>
                        )
                       })
                    }

                </Carousel>
                }
           </div>    
           </div>
            </div>
       
       </div> 
        </section>




            <Footer/> 
        </div>
    );
};

export default Details;