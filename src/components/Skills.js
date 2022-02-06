import React from "react";

const Skills = ({ subTitleSkill, paragraphSkill, titleProjectManagement, paragraphProjectManagement, titleBackEnd,  paragraphBackEnd, titleWebDesign,  paragraphWebDesign}) => {
    return (
        <>
         
            
              

                <div className="tools">
                    <h3 className="sub-title-skill">{subTitleSkill}</h3>
                    <p className="paragraph-tools">{paragraphSkill}</p>
                </div>

                <div className="tools">
                <h3 className="sub-title-skill">{titleProjectManagement}</h3>
                <p className="paragraph-tools">{paragraphProjectManagement}</p>
                </div>

                <div className="tools">
                <h3 className="sub-title-skill">{titleBackEnd}</h3>
                <p className="paragraph-tools">{paragraphBackEnd}</p>
                </div>

                <div className="tools">

                <h3 className="sub-title-skill">{titleWebDesign}</h3>
                <p className="paragraph-tools">{paragraphWebDesign}</p>
                </div>

            
        </>
    );
};
export default Skills;
