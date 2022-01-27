import React, { Component } from 'react';

 class TitleHome extends Component {
  render() {
    return (
    
    <div className="title-home">
        <h1 className="tiltle-dev">{this.props.title}</h1>
        <div className="welcome-portfolio">
        <span className="span-dev-title">{this.props.spanTitleDev}</span>
        </div>
        
    </div>
    
    );
  }
}

export default TitleHome;