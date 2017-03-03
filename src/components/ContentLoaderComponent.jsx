import React from 'react';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import MenuItem from  'react-bootstrap/lib/MenuItem';
import Col from 'react-bootstrap/lib/Col'
import PDFViewerComponent from './PDFViewerComponent';
import ComingSoonComponent from './ComingSoonComponent';
import DevCoverComponent from './DevCoverComponent';


//import logo images
import personalLogo from '../../assets/images/Okechi_Onyeje_original.png';
import musicProducerLogo from '../../assets/images/Okechi_Onyeje_music_producer.png';
import hobbyistLogo from '../../assets/images/Okechi_Onyeje_hobbyist_hacker.png';
import professionalLogo from '../../assets/images/Okechi_Onyeje_professional.png';
import softwareEngineerLogo from '../../assets/images/Okechi_Onyeje_professional_software_engineer.png';

import {Link} from 'react-router';

import _ from 'lodash';

export default class ContentLoaderComponent extends React.Component {
    constructor () {
        super();
        this.iframe = this.iframe.bind(this);
        this.renderBarButtons = this.renderBarButtons.bind(this);
        this.onContentSelect = this.onContentSelect.bind(this);
        this.renderViewPort = this.renderViewPort.bind(this);
        this.renderLogo = this.renderLogo.bind(this);
        this.state ={
            _content: 'none'
        }
    }

    renderLogo() {
        var logoStyle = {
            width: "200",
            height: "200"
        }

        if (_.includes(this.props.currentRoute, '/web-development')
            || _.includes(this.props.currentRoute, '/mobile-development')
            ) {

                logoStyle.backgroundImage = softwareEngineerLogo
        }else if (_.includes(this.props.currentRoute, '/professional')) {

                logoStyle.backgroundImage = professionalLogo
        }else if (_.includes(this.props.currentRoute, '/audio-production')
            || _.includes(this.props.currentRoute, '/podcasting')
            ) {

                logoStyle.backgroundImage = musicProducerLogo
        }else if (_.includes(this.props.currentRoute, '/audio-software-development')
            || _.includes(this.props.currentRoute, '/hacks')
            ) {

                logoStyle.backgroundImage = hobbyistLogo
        }else {

                logoStyle.backgroundImage = personalLogo
        }
        return logoStyle.backgroundImage
    }

    onContentSelect (content) {
        this.setState({ _content: content });
    }

    renderViewPort(viewPortType) {
        if (viewPortType == 'invision') {
            return (
                        <div style={
                          {height: '100%',
                            width: '100%'
                        }} dangerouslySetInnerHTML={ this.iframe() } />
                    );
               
            }
            else if (viewPortType == 'dev-cover'){
                return(
                    <div style={{height: '100%', width: '100%'}}>
                        <DevCoverComponent currentRoute={this.props.currentRoute} />
                    </div>
                );
            }
            else if (viewPortType == 'coming-soon'){
                return(
                    <div style={{height: '100%', width: '100%'}}>
                       <ComingSoonComponent logoPath={this.renderLogo()} />
                    </div>
                );
            }
            else{
                 return (
                    <div style={
                        {height: '100%',
                        width: '100%'
                    }}>
                      <PDFViewerComponent
                        pdfFile='/assets/pdfs/WavBlocks.pdf'>
                      </PDFViewerComponent>
                    </div>
                );
                    

            }

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
                        {/*<DropdownButton bsStyle="info" dropup title="React/Node.JS"></DropdownButton>*/}
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
                        {/*<DropdownButton bsStyle="success" title="Android" dropup></DropdownButton>
                        <DropdownButton bsStyle="info" dropup title="React Native"></DropdownButton>*/}
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
                            <MenuItem eventKey="2" ><li><Link to={'/audio-software-development/umuse-audio-plugin'}>UMuse DAW Plugin</Link></li></MenuItem>                                                                        
                        </DropdownButton>
                        <DropdownButton bsStyle="success" dropup title="React/Electron">
                            <MenuItem eventKey="1" ><li><Link to={'/audio-software-development/ultra-muse-player'}>UltraMuse Player</Link></li></MenuItem>
                        </DropdownButton>
                    </ButtonToolbar>
                </div>
            );
        }
    }
    render () {
      return (
          <div className={this.props.style.content_container} >
              <div className='project_selector_tBar_container' >

              </div>
              <div className={this.props.style.content_component}>
                  {/*}<iframe src={this.props.invisionURL}
                    style={
                      {height: '100%',
                        width: '100%',
                        frameborder: '0'
                      }}>
                  </iframe>*/}
                  {this.renderViewPort(this.props.viewerType)}

              </div>
              <div className={"this.props.style.project_type_selector_bBar_container"} >
                <Col xs={6} xsOffset={3}>
                    {this.renderBarButtons()}
                </Col>
              </div>
          </div>

      );
    }
}
