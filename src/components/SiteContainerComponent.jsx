import React from 'react';
import NavigationComponent from './NavigationComponent'
import ContentContainerComponent from './ContentContainerComponent'
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';


export default class SiteContainerComponent extends React.Component {
  render() {
    return (
      <div>
        <NavigationComponent currentRoute={this.props.currentRoute}/>
        <div style={
            {height: '100%',
            width: '100%'
        }}>
          <Row>
            <Col xs={6} xsOffset={4} md={4}>
              <ContentContainerComponent currentRoute={this.props.currentRoute}>
              </ContentContainerComponent> 
            </ Col>
          </Row>
        </div>
     </div>
    );
  }

}
