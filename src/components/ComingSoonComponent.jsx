import React from 'react';

export default class ComingSoonComponent extends React.Component {
    
    render () {
      var backgroundStyle = {
        width: "100%",
        height: "100%",
        backgroundColor: 'gray'
      }
      return (

            <div style={backgroundStyle}>
                <div style={{width: '100%', height: '200'}}>
                    <h1 style={{color: 'white', display: 'table-cell', verticalAlign: 'middle', textAlign: 'center'}}>Details Coming Soon...</h1>
                </div>
                <img src={this.props.logoPath} style={{width: '200', height: '200'}}/>
            </div>                   
            
      );
    }
}