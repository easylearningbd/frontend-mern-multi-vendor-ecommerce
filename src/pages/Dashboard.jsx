import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaList } from 'react-icons/fa';

const Dashboard = () => {
    return (
        <div>
           <Header/>
           <div className='bg-slate-200 mt-5'>
                <div className='w-[90%] mx-auto md-lg:block hidden'>
                    <div>
                        <button className='text-center py-3 px-3 bg-green-500 text-white'><FaList/> </button>
                    </div>

                </div>
           </div>

           <Footer/>
        </div>
    );
};

export default Dashboard;