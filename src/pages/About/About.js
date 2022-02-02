import React from 'react';
import Navigation from "../../containers/Navigation/Navigation";
import AboutSection from '../../components/AboutSection/AboutSection';


const About = () => {
    return (

        <>
            <section className="bg-2">
                <Navigation />
                <div className="container">
                    <AboutSection />
                </div>

            </section>
        </>




    )
}
export default About;