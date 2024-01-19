import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io"; 
import Carousel from 'react-multi-carousel'; 
import 'react-multi-carousel/lib/styles.css'
import Rating from '../components/Rating';
import { FaHeart } from "react-icons/fa6";



const Details = () => {
    const images = [1,2,3,4,5,6]
    const [image, setImage] = useState('')
    const discount = 10
    const stock = 3

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
                    <img className='h-[400px] w-full' src={image ? `http://localhost:3000/images/products/${image}.webp` : `http://localhost:3000/images/products/${images[2]}.webp`} alt="" />
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
                            <div key={i}  onClick={() => setImage(img)}>
                               <img className='h-[120px] cursor-pointer' src={`http://localhost:3000/images/products/${img}.webp`} alt="" /> 
                            </div>
                        )
                       })
                    }

                </Carousel>
                }
           </div>    
           </div>

        <div className='flex flex-col gap-5'>
                <div className='text-3xl text-slate-600 font-bold'>
                    <h3>Product Name </h3>
                </div>
                <div className='flex justify-start items-center gap-4'>
                    <div className='flex text-xl'>
                        <Rating ratings={4.5} />
                    </div>
                    <span className='text-green-500'>(24 reviews)</span> 
                </div>

         <div className='text-2xl text-red-500 font-bold flex gap-3'>
            {
                discount !== 0 ? <>
                Price : <h2 className='line-through'>$500</h2>
                <h2>${500 - Math.floor((500 * discount) / 100)} (-{discount}%) </h2>
                
                </> : <h2> Price : $200 </h2>
            }
          </div> 

          <div className='text-slate-600'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
           </div> 

            <div className='flex gap-3 pb-10 border-b'>
                {
                    stock ? <>
                    <div className='flex bg-slate-200 h-[50px] justify-center items-center text-xl'>
                        <div className='px-6 cursor-pointer'>-</div>
                        <div className='px-6'>2</div>
                        <div className='px-6 cursor-pointer'>+</div>
                    </div>
                    <div>
                        <button className='px-8 py-3 h-[50px] cursor-pointer hover:shadow-lg hover:shadow-green-500/40 bg-[#059473] text-white'>Add To Card</button>
                    </div>
                    
                    </> : ''
                }

                <div>
                    <div className='h-[50px] w-[50px] flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-cyan-500 text-white'>
                    <FaHeart />
                    </div>

                </div>



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