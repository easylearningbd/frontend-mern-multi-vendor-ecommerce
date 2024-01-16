import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css'

const Products = () => {
    const products = [
        [1,2,3],
        [4,5,6],
    ]

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        },
    }

    const ButtonGroup = () => {

    }


    return (
        <div className='flex gap-8'>
            <Carousel
                    autoPlay={false}
                    infinite={false}
                    arrows={false} 
                    responsive={responsive}
                    transitionDuration={500}
                    renderButtonGroupOutside={true}
                    customButtonGroup={<ButtonGroup/>}
                >
        <div className='flex flex-col justify-start gap-2'>
            <Link to='#'>
                <img src="" alt="" />
                <div className='px-3 flex justify-start items-start gap-1 flex-col text-slate-600'>
                    <h2>Product Name </h2>
                    <span>$434</span> 
                </div>
            </Link>
        </div>            
                
                </Carousel>   
        </div>
    );
};

export default Products;