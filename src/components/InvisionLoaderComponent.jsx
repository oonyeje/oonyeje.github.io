import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import MenuItem from  'react-bootstrap/lib/MenuItem';
import {Link} from 'react-router';

import _ from 'lodash';

export default class InvisionLoaderComponent extends React.Component {
    constructor () {
        super();
        this.iframe = this.iframe.bind(this);
        this.renderBarButtons = this.renderBarButtons.bind(this);
        this.onContentSelect = this.onContentSelect.bind(this);
        this.state ={
            _content: 'none'
        }
    }

    onContentSelect (content) {
        this.setState({ _content: content });
    }

    iframe () {
    	return {
        	__html: '<iframe src=' + '"' + this.props.invisionURL + '" width="100%" height="100%" frameborder= "0"></iframe>'
        }
    }

    renderBarButtons () {
        if (_.includes(this.props.currentRoute, '/web-development')) {
            return (
                <div>
                    <ButtonToolbar >
                        <DropdownButton bsStyle="danger" dropup title="Ruby on Rails">
                            <MenuItem eventKey="1" ><li><Link to={'/web-development/aqua'}>Aqua Hotel Management</Link></li></MenuItem>
                            <MenuItem eventKey="2" ><li><Link to={'/web-development/pearlception'}>Pearlception Dashboard</Link></li></MenuItem>
                        </DropdownButton>
                        <DropdownButton bsStyle="info" dropup title="React/Node.JS"></DropdownButton>
                    </ButtonToolbar>

                </div>
            );
        }
        if (_.includes(this.props.currentRoute, '/mobile-development')) {
            return (
                <div>
                    <ButtonToolbar>
                        <DropdownButton bsStyle="warning" dropup title="Swift">
                            <MenuItem eventKey="1" ><li><Link to={'/mobile-development/gethip'}>GetHip!</Link></li></MenuItem>
                            <MenuItem eventKey="2" ><li><Link to={'/mobile-development/vendoo'}>Vendoo</Link></li></MenuItem>
                        </DropdownButton>
                        <DropdownButton bsStyle="success" title="Android" dropup></DropdownButton>
                        <DropdownButton bsStyle="info" dropup title="React Native"></DropdownButton>
                    </ButtonToolbar>
                </div>
            );
        }
        if (_.includes(this.props.currentRoute, '/audio-software-development')) {
            return (
                <div>
                    <ButtonToolbar>
                        <DropdownButton bsStyle="primary" dropup title="C++">
                            <MenuItem eventKey="1" ><li><Link to={'/audio-software-development/wav-blocks-studio'}>WavBlocks Studio</Link></li></MenuItem>
                        </DropdownButton>
                        <DropdownButton bsStyle="success" dropup title="Python"></DropdownButton>
                    </ButtonToolbar>
                </div>
            );
        }
    }
    render () {
      return (
          <div className={this.props.style.content_container} >
              <div className={this.props.style.project_selector_tBar_container} >

              </div>
              <div className={this.props.style.content_component}>
                  {/*}<iframe src={this.props.invisionURL}
                    style={
                      {height: '100%',
                        width: '100%',
                        frameborder: '0'
                      }}>
                  </iframe>*/}
                  <div style={
                    {height: '100%',
                      width: '100%'
                    }} dangerouslySetInnerHTML={ this.iframe() } />
              </div>
              <div className={this.props.style.project_type_selector_bBar_container} >
                      {this.renderBarButtons()}
              </div>
          </div>

      );
    }
}
