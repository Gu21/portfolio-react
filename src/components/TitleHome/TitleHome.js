import React, { Component } from 'react';


/* ******************** COMPONENT CLASS TitleHome *************** */

class TitleHome extends Component {
  render() {
    return (

      /* ******************** PROPS *************** */

      <div className="title-home">
        <h1 className="tiltle-dev"><strong>{this.props.title}</strong></h1>
        <div className="welcome-portfolio">
          <span className="span-dev-title">{this.props.spanTitleDev}<span className="span-subTitle-toMyPortfolio">{this.props.subspanTitleDev}</span></span>
        </div>
      </div>

    );
  }
}

export default TitleHome;