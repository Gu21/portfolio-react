import React from "react";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaProjectDiagram  } from "react-icons/fa";
import { FaLaptop   } from "react-icons/fa";

const Skills = ({ subTitleSkill, paragraphSkill, titleProjectManagement, paragraphProjectManagement, titleBackEnd,  paragraphBackEnd, titleWebDesign,  paragraphWebDesign}) => {
    return (
        <>
         
            
              

                <div className="tools">
                    <div className="icon-FaCode-front-end">
                    <FaCode />
                    <h3 className="sub-title-skill">{subTitleSkill}</h3>
                    </div>
                    <p className="paragraph-tools">{paragraphSkill}</p>
                </div>

                <div className="tools">
                <div className="icon-FaProjectDiagram">
                <FaProjectDiagram />
                <h3 className="sub-title-skill">{titleProjectManagement}</h3>
                </div>
                <p className="paragraph-tools">{paragraphProjectManagement}</p>
                </div>

                <div className="tools">
                <div className="icon-FaDatabase-back-end">
                <FaDatabase />
                <h3 className="sub-title-skill">{titleBackEnd}</h3>
                </div>
                <p className="paragraph-tools">{paragraphBackEnd}</p>
                </div>

                <div className="tools">
                <div className="icon-FaLaptop">
                <FaLaptop />
                <h3 className="sub-title-skill">{titleWebDesign}</h3>
                </div>
                <p className="paragraph-tools">{paragraphWebDesign}</p>
                </div>

            
        </>
    );
};
export default Skills;
