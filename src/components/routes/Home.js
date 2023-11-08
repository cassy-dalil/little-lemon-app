import React from 'react';
import Header from '../Header';
import Herosection from '../HeroSection';
import Specials from '../Specials';
import Testimonials from '../Testimonials';
import AboutSection from '../AboutSection';
import Footer from '../Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Herosection />
            <Specials />
            <Testimonials />
            <AboutSection />
            <Footer />
        </>
    )
}

export default Home;