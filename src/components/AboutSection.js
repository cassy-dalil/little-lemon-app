import React from "react";
import './styles/about.css';
// import BrothersA from './assets/Mario and Adrian A.jpg';
import BrothersB from './assets/Mario and Adrian b.jpg';

function About() {
    return(
        <section className="about-container">
            <section className="about-text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the flavors of their hometown in Italy to the people of Chicago.
                    The two brothers continue to oversee the Little Lemon restaurant, nearly thirty years later.
                </p>
            </section>
            <section className="about-images">
                {/* <img className="about-img about-img1" src={BrothersA} alt="Mario and Adrian 1"></img> */}
                <img className="about-img about-img2" src={BrothersB} alt="Mario and Adrian 2"></img>
            </section>
        </section>
    )
}

export default About;