import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
    return (
        <div>
            <Header/>
    <div className='bg-slate-200 mt-4'>
        <div className='w-full justify-center items-center p-10'>
            <div className='grid grid-cols-2 w-[60%] mx-auto bg-white rounded-md'>
                <div className='px-8 py-8'>
            <h2 className='text-center w-full text-xl text-slate-600 font-bold'>Register </h2>
                </div>

    <div>
        <form className='text-slate-600'>
    <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor="name">Name</label>
        <input className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="text" name="name" id="name" placeholder='Name' required />
    </div>

    <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor="email">Email</label>
        <input className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="email" name="email" id="email" placeholder='Email' required />
    </div>


    <div className='flex flex-col gap-1 mb-2'>
        <label htmlFor="password">Password</label>
        <input className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-green-500 rounded-md' type="password" name="password" id="password" placeholder='Password' required />
    </div>

    <button className='px-8 w-full py-2 bg-[#059473] shadow-lg hover:shadow-green-500/40 text-white rounded-md'>Register</button>




        </form>
    </div>    

            </div> 
        </div>
    </div>        
            
            <Footer/>
        </div>
    );
};

export default Register;