import React from 'react';

const TitleAboutSectionLeft = props => {

  return (

    <div className="props-about">
    <h5>{props.titleAbout}</h5>
    <h2>{props.paragraphAbout}</h2>
    <div className="box-subParagraph-props-about">
    <h3>{props.subParagraph}</h3>
    </div>
    </div>
  )


}
export default TitleAboutSectionLeft 