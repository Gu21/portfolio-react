import React from "react";
import Skills from "./Skills";

const skillsSectionAbout = () => {
  return (
    <>
      <div className="skills">
        <h3>skills</h3>
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
          paragraphWebDesign="CRÉATION DE MAQUETTE XD ET HTML, AINSI QUE DE PROTOTYPES FONCTIONNELS. CONCEPTION CENTRÉE UTILISATEURS SELON LES RÈGLES D'UX LORS DE LA CRÉATION D'UNE INTERFACE UTILISATEUR ."
        />
      </div>
    </>
  );
};
export default skillsSectionAbout;
