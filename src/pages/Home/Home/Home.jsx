import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Bistro from '../Bistro/Bistro';
import Category from '../Category/Category';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Recommended from '../Recommended/Recommended';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Home
                </title>
            </Helmet>
            <Banner />
            <Category />
            <Bistro />
            <PopularMenu />
            <Contact />
            <Recommended />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;