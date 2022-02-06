import React from "react";
import TitleAboutSectionLeft from "../TitleAboutSectionLeft/TitleAboutSectionLeft";
import Button from "../Button/Button";


const AboutSection = () => {
  return (
    <>
      <div className="section-title-about">
        <TitleAboutSectionLeft
          titleAbout="A few words about me"
          paragraphAbout="My name is Guillaume BISSON passionate about the digital world and more particularly about the web, I have
              worked for 6 years in the aeronautics sector for a large European group and today I have made the choice to change my professional universe.
              Today, I want to concretize my reconversion project and thus exercise a profession that fascinates me and that attracts my curiosity every day."
          subParagraph="In my spare time I like to travel to discover other cultures and play sports, such as running, a discipline of patience and perseverance."
        />
        <div className="section-about-button">
          <Button btnLink="/" btnText="projects" />
          <span className="span-button">or</span>
          <Button btnLink="/" btnText="cv" />
        </div>
      </div>
    
    </>
  );
};

export default AboutSection;
