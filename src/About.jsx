import React from 'react';
import web from '../src/images/img8.png';
import Common from './Common';

const About = () => {
  return (
    <>
  <Common name=''
                name='Welcome to About page '
                img={web}
                visit='/contact'
                btname='Contact Now'
        />
    </>
  );
};

export default About;
