import React from 'react';
import TitleAboutSectionLeft from '../TitleAboutSectionLeft.js';



const AboutSection = () => {
  return (

    <>

      <div className="section-title-about">
        <TitleAboutSectionLeft titleAbout='Quelques mots sur moi' paragraphAbout="Je m'appelle Guillaume BISSON passionné par l'univers du numérique et plus particulièrement par le web, j'ai
              travaillé pendant 6 années dans  le secteur aéronautique pour un grand  groupe européen et aujourd'hui j'ai fait le choix de changer d'univers professionnel.
              Je souhaite aujourd'hui concrétiser mon projet de reconversion et ainsi exercer une profession qui me passionne et qui attire chaque jour ma curiosité."
          subParagraph="Dans mes temps libres j'aime voyager pour découvrir d'autres cultures et  faire du sport, comme la course à pied une discipline de patience et de persévérance."
        />
        <div className="section-about-button">
          <buttonAboutSection btnLink="/" btnText="projects" />
          <buttonAboutSection btnLink="/" btnText="CV" />
        </div>
      </div>
    </>





  );
}

export default AboutSection;