import React from 'react';

const FeatureProducts = () => {
    return (
        <div className='w-[85%] flex flex-wrap mx-auto'>
            <div className='w-full'>
            <div className='text-center flex justify-center items-center flex-col text-4xl text-slate-600 font-bold relative pb-[45px]'>
                <h2>Feature Products </h2>
                <div className='w-[100px] h-[2px] bg-[#059473] mt-4'></div>
            </div>
            </div>

        <div className='w-full grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
    {
        [1,2,3,4,5,6].map((p,i) => <div key={i} className='border group transition-all duration-500 hover:shadow-md hover:-mt-3'>
            <div className='relative overflow-hidden'>
            
        <div className='flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 font-semibold text-xs left-2 top-2'>8% </div> 

        <img className='sm:w-full h-[240px]' src={`http://localhost:3000/images/products/${i+1}.webp`} alt="" />           


            </div>
        </div>
        )
    }

        </div>

            
        </div>
    );
};

export default FeatureProducts;