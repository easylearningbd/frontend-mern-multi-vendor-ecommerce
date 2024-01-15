import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Categorys from '../components/Categorys';

const Home = () => {
    return (
        <div className='w-full'>
            <Header/>
            <Banner/>
            <Categorys/>
        </div>
    );
};

export default Home;