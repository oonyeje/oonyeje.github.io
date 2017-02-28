import React from 'react';
//pages to be rendered based on navigation
import InvisionLoaderComponent from './InvisionLoaderComponent'

import styles from './../../assets/stylesheets/content-container.css';


export default class ContentContainerComponent extends React.Component {
  //var currentRouteName = this.context.router.getCurrentPathname();
  //console.log(currentRouteName);
  renderOnPath(path) {
    var aquaInvisionURL = 'https://projects.invisionapp.com/share/QV9OA25MA#/screens';
    var vendooInvisionURL = 'http://kroleo.com/invision/Vendoo/#/screens';
    var getHipInvisionURL = 'http://kroleo.com/invision/GetHip/#/screens';

    switch(path){
        case '/personal':
          return (
            <div>
              {path}
            </div>
          );
        case '/professional':
          return (
            <div>
              {path}
            </div>
          );
        case '/web-development':
          return (
            <InvisionLoaderComponent invisionURL={aquaInvisionURL} style={styles}/>
          );
        case '/mobile-development':
          return (
            <InvisionLoaderComponent invisionURL={vendooInvisionURL} style={styles}/>
          );
        case '/audio-software-development':
          return (
            <InvisionLoaderComponent invisionURL={getHipInvisionURL} style={styles}/>
          );
        case '/audio-production':
          return (
            <div>
              {path}
            </div>
          );
        case '/podcasting':
          return (
            <div>
              {path}
            </div>
          );
        case '/hacks':
          return (
            <div>
              {path}
            </div>
          );
        case '/contacts':
          return (
            <div>
              {path}
            </div>
          );
        default:
          return (
            <div>
              {path}
            </div>
          );
    }
  }

  render () {
    return (
      <div>
        {this.renderOnPath(this.props.currentRoute)}
      </div>
    );
  }
}
