import React from "react";
import Skills from "../Skills/Skills";


const skillsSectionAbout = () => {
  return (
    <>
      <div className="skills">
        <h5>skills</h5>
        <h1 className="title-skills-section-about">FULL-STACK, FRONT-END AND BACK-END DEVELOPER</h1>
      </div>
     
      <div className="skill-about">
        <Skills
          subTitleSkill="front-end"
          paragraphSkill="CREATION AND INTEGRATION OF RESPONSIVE WEBSITES AND MOBILE
            APPLICATIONS, ACCESSIBLE AND MEETING W3C STANDARDS, WITH BOOTSTRAP,
            CSS/SASS AND JAVASCRYPT/JQUERY."
          titleProjectManagement="project-management"
          paragraphProjectManagement="REALIZATION OF UML / MCD / MLD. LEARNING FOR THE WRITING OF SPECIFICATIONS, KNOWLEDGE OF THE AGILE METHOD: SCRUM."
          titleBackEnd="back-end"
          paragraphBackEnd="WEBSITE DEVELOPMENT VIA PHP/SYMFONY, CREATION AND MANAGEMENT OF DATABASES WITH MYSQL. OBJECT-ORIENTED PROGRAMMING."
          titleWebDesign="webDesign"
          paragraphWebDesign="Creation of xd and html mockups, as well as functional prototypes. User-centric design according to ux rules when creating a user interface.."
        />
      </div>
    </>
  );
};
export default skillsSectionAbout;
