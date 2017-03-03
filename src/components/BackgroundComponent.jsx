import React from 'react';
import Background from '../../assets/images/portfolio-background.jpg';

var backgroundImageStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${Background})`
}


export default class BackgroundComponent extends React.Component {
    //will be used to implement background photo
    render () {
      return (
        <div style={backgroundImageStyle}>
            {/*
                <section >
                    {children}
                </section>
            */}
            {this.props.children}
        </div>
      );
    }
}
