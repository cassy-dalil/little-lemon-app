import React from 'react';
import Header from '../Header';
import Herosection from '../HeroSection';
import Specials from '../Specials';
import Testimonials from '../Testimonials';
import About from '../About';
import Footer from '../Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Herosection />
            <Specials />
            <Testimonials />
            <About />
            <Footer />
        </>
    )
}

export default Home;