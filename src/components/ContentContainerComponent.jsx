import React from 'react';
//pages to be rendered based on navigation
import ContentLoaderComponent from './ContentLoaderComponent'

import styles from './../../assets/stylesheets/content-container.css';


export default class ContentContainerComponent extends React.Component {
  //var currentRouteName = this.context.router.getCurrentPathname();
  //console.log(currentRouteName);
  renderOnPath(path) {
    var aquaInvisionURL = 'https://projects.invisionapp.com/share/QV9OA25MA#/screens';
    var vendooInvisionURL = 'https://kroleo.com/invision/Vendoo/#/screens';
    var getHipInvisionURL = 'https://kroleo.com/invision/GetHip/#/screens';

    switch(path){
        case '/personal':
          return (
            <div>
              <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
            </div>
          );
        case '/professional':
          return (
            <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/web-development':
          return (
            <ContentLoaderComponent viewerType="dev-cover" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/web-development/aqua':
          return (
            <ContentLoaderComponent viewerType="invision" invisionURL={aquaInvisionURL} style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/web-development/pearlception':
          return (
            <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/mobile-development':
          return (
            <ContentLoaderComponent viewerType="dev-cover" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/mobile-development/vendoo':
          return (
            <ContentLoaderComponent viewerType="invision" invisionURL={vendooInvisionURL} style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/mobile-development/gethip':
          return (
            <ContentLoaderComponent viewerType="invision" invisionURL={getHipInvisionURL} style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/audio-software-development':
          return (
            <ContentLoaderComponent viewerType="dev-cover" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/audio-software-development/wav-blocks-studio':
          return (
            <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/audio-software-development/ultra-muse-player':
          return (
            <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/audio-software-development/umuse-audio-plugin':
          return (
            <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
          );
        case '/audio-production':
          return (
            <div>
              <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
            </div>
          );
        case '/podcasting':
          return (
            <div>
              <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
            </div>
          );
        case '/hacks':
          return (
            <div>
              <ContentLoaderComponent viewerType="coming-soon" invisionURL="" style={styles} currentRoute={this.props.currentRoute}/>
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
