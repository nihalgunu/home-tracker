import React from 'react';
import Hero from '../hero/Hero';

const Home = ({homes}) => {
  return (
    <div>
        <Hero homes = {homes}/>
    </div>
  )
}

export default Home