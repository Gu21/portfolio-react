import React from 'react';
import Navigation from "../../containers/Navigation/Navigation";
import ScrollDown from '../../components/ScrollDown/ScrollDown';
import AboutSection from '../../components/AboutSection/AboutSection';
import SkillsSectionAbout from '../../components/SkillsSectionAbout/SkillsSectionAbout';




const About = () => {
    return (

        <>
            <section className="bg-2">
                  <Navigation />
                <div className="container">
                    <AboutSection />
                    <ScrollDown />
                </div>  
            </section>
            
            <section className="section-skills">
                <div className="container-skills">
                <SkillsSectionAbout />
                </div>
            </section>

           
        </>

    )
}
export default About;