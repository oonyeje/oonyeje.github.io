import React from 'react';
import NavigationComponent from './NavigationComponent'
import ContentContainerComponent from './ContentContainerComponent'


export default class SiteContainerComponent extends React.Component {
  render() {
    return (
      <div>
        <NavigationComponent currentRoute={this.props.currentRoute}/>
        <ContentContainerComponent currentRoute={this.props.currentRoute}>
        </ContentContainerComponent>
      </div>
    );
  }

}
