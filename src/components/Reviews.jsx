import React from 'react';
import Rating from './Rating';
import RatingTemp from './RatingTemp';

const Reviews = () => {
    return (
<div className='mt-8'>
    <div className='flex gap-10 md-lg:flex-col'>
        <div className='flex flex-col gap-2 justify-start items-start py-4'>
            <div>
                <span className='text-6xl font-semibold'>4.5</span>
                <span className='text-3xl font-semibold text-slate-600'>/5</span>
            </div>
            <div className='flex text-3xl'>
            <Rating ratings={4.5} />
            </div>
            <p className='text-sm text-slate-600'>15 Reviews</p>
        </div>

        <div className='flex gap-2 flex-col py-4'>
            <div className='flex justify-start items-center gap-5'>
            <div className='text-md flex gap-1 w-[93px]'>
             <RatingTemp rating={5} />
            </div>
            <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                <div className='h-full bg-[#Edbb0E] w-[60%]'> 
                </div> 
            </div>
            <p className='text-sm text-slate-600 w-[0%]'>10</p>
            </div>

            <div className='flex justify-start items-center gap-5'>
            <div className='text-md flex gap-1 w-[93px]'>
             <RatingTemp rating={4} />
            </div>
            <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                <div className='h-full bg-[#Edbb0E] w-[70%]'> 
                </div> 
            </div>
            <p className='text-sm text-slate-600 w-[0%]'>20</p>
            </div>

            <div className='flex justify-start items-center gap-5'>
            <div className='text-md flex gap-1 w-[93px]'>
             <RatingTemp rating={3} />
            </div>
            <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                <div className='h-full bg-[#Edbb0E] w-[40%]'> 
                </div> 
            </div>
            <p className='text-sm text-slate-600 w-[0%]'>8</p>
            </div>

            <div className='flex justify-start items-center gap-5'>
            <div className='text-md flex gap-1 w-[93px]'>
             <RatingTemp rating={2} />
            </div>
            <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                <div className='h-full bg-[#Edbb0E] w-[30%]'> 
                </div> 
            </div>
            <p className='text-sm text-slate-600 w-[0%]'>5</p>
            </div>

            <div className='flex justify-start items-center gap-5'>
            <div className='text-md flex gap-1 w-[93px]'>
             <RatingTemp rating={1} />
            </div>
            <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                <div className='h-full bg-[#Edbb0E] w-[10%]'> 
                </div> 
            </div>
            <p className='text-sm text-slate-600 w-[0%]'>3</p>
            </div>

            <div className='flex justify-start items-center gap-5'>
            <div className='text-md flex gap-1 w-[93px]'>
             <RatingTemp rating={0} />
            </div>
            <div className='w-[200px] h-[14px] bg-slate-200 relative'>
                <div className='h-full bg-[#Edbb0E] w-[0%]'> 
                </div> 
            </div>
            <p className='text-sm text-slate-600 w-[0%]'>0</p>
            </div>


        </div>

    </div> 
</div>
    );
};

export default Reviews;