import React from 'react';
import web from '../src/images/img1.svg';
import Common from './Common';

const Home = () => {
    return (
        <>
        <Common name='Grow your Business with  '
                img={web}
                visit='/services'
                btname='Get Started'
        />
        </>
    );
};

export default Home;
