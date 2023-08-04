import React from 'react';
import Landing from '../../Components/Home/Landing';
import HomeCategory from '../../Components/Home/HomeCategory';
import CardProductContainer from '../../Components/Products/CardProductContainer';
import CardProductContainer1 from '../../Components/Products/CardProductContainer1';
import Slider from '../../Components/Home/Slider';

const HomePage = () => {
    return (
        <div>
            <Landing />
            <HomeCategory />
            <Slider/>
            <CardProductContainer title="Your Favorites " btntitle="More" pathText="/products"/>
            <CardProductContainer1 title="Our Newest" btntitle="More" pathText="/products"/>
        </div>
    );
}

export default HomePage;
