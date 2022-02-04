import React from 'react';

const TitleAboutSectionLeft = props => {

  return (

    <div className="props-about">
    <h5 className="props-title-about">{props.titleAbout}</h5>
    <h2 className="props-paragraph-about">{props.paragraphAbout}</h2>
    <div className="box-subParagraph-props-about">
    <h3 className="subParagraph-props-about">{props.subParagraph}</h3>
    </div>
    </div>
  )


}
export default TitleAboutSectionLeft 