import React from 'react';
//pages to be rendered based on navigation
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import ExampleTwoDeepComponent from './ExampleTwoDeepComponent';

import styles from './../../assets/stylesheets/content-container.css';


export default class ContentContainerComponent extends React.Component {
  //var currentRouteName = this.context.router.getCurrentPathname();
  //console.log(currentRouteName);
  renderOnPath(path) {
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
            <div>
              {path}
            </div>
          );
        case '/mobile-development':
          return (
            <div>
              {path}
            </div>
          );
        case '/audio-software-development':
          return (
            <div>
              {path}
            </div>
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
        <div className={styles.content_container} >
          <div className={styles.content_component}>
            {this.renderOnPath(this.props.currentRoute)}
          </div>
        </div>
      </div>
    );
  }
}
