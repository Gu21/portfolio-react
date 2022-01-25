import React, { Component } from 'react';

 class TitleHome extends Component {
  render() {
    return (
    
    <div className="title-home">
        <h1 className="tiltle-dev">{this.props.title}</h1>
        <span className="span-dev-title">{this.props.spanTitleDev}</span>
    </div>
    
    );
  }
}

export default TitleHome;