import React from 'react';
import styles from './../../assets/stylesheets/bootstrap.min.css';

//import bootsrap components
import NavigationBar from  'react-bootstrap/lib/Navbar';
import Nav from  'react-bootstrap/lib/Nav';
import NavDropdown from  'react-bootstrap/lib/NavDropdown';
import MenuItem from  'react-bootstrap/lib/MenuItem';
import NavItem from 'react-bootstrap/lib/NavItem';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ContactModal from 'react-bootstrap/lib/Modal';

//import logo images
import personalLogo from '../../assets/images/Okechi_Onyeje_original.png';
import musicProducerLogo from '../../assets/images/Okechi_Onyeje_music_producer.png';
import hobbyistLogo from '../../assets/images/Okechi_Onyeje_hobbyist_hacker.png';
import professionalLogo from '../../assets/images/Okechi_Onyeje_professional.png';
import softwareEngineerLogo from '../../assets/images/Okechi_Onyeje_professional_software_engineer.png';

import {Link} from 'react-router';

export default class NavigationComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            _navigationState: 'home',
            showContactModal: false
        };
        this.onClickHandler = this.onClickHandler.bind(this);
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.renderLogo = this.renderLogo.bind(this);
    }

    renderLogo() {
        var logoStyle = {
            width: "75",
            height: "75"
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

        return (
            <div style={{width: "100%", height: "100%"}}>
                <Link to={'/'} style={{width: logoStyle.width, height: logoStyle.height}}>
                    <img src={logoStyle.backgroundImage} style={{width: logoStyle.width, height: logoStyle.height}}/>                    
                </ Link>
            </div>
        );
    }

    close() {
        this.setState({ showContactModal: false });
    }

      open() {
        this.setState({ showContactModal: true });
      }

    onClickHandler(navState){
        var newNavState = this.props.currentRoute
        switch(navState){
            case '/personal':
                break;
            case '/professional':
                break;
            case '/web-development':
                break;
            case '/mobile-development':
                break;
            case '/audio-software-development':
                break;
            case '/audio-production':
                break;
            case '/podcasting':
                break;
            case '/hacks':
                break;
            case '/contacts':
                    break;
            default:
                break;
        }

        this.setState({
            _navigationState: navState
        });
    }

    render() {
        return (
            <div>
                <div>
                    <NavigationBar bsStyle="inverse" staticTop="true" style={{ background: "transparent" }} collapseOnSelect>
                        <NavigationBar.Header>
                            <NavigationBar.Brand>
                                {this.renderLogo()}
                            </NavigationBar.Brand>
                            <NavigationBar.Toggle />
                        </NavigationBar.Header>
                        <NavigationBar.Collapse>
                            <Row>
                                <Col xs={6} xsOffset={3}>
                                    <Nav bsStyle='pills' style={{alignVertical: 'center'}}>
                                        <NavDropdown eventKey={1} title="About" id="basic-nav-dropdown" style={{textColor: "white"}}>
                                            <MenuItem eventKey={1.1}><li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/personal'}>Personal</Link></li></MenuItem>
                                            <MenuItem eventKey={1.2}><li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/professional'}>Professional</Link></li></MenuItem>
                                        </ NavDropdown>
                                        <NavDropdown eventKey={2} title="Projects" id="basic-nav-dropdown">
                                            <MenuItem eventKey={2.1}><li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/web-development'}>Web</Link></li></MenuItem>
                                            <MenuItem eventKey={2.2}><li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/mobile-development'}>Mobile</Link></li></MenuItem>
                                            <MenuItem eventKey={2.3}><li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/audio-software-development'}>Audio</Link></li></MenuItem>
                                        </ NavDropdown>
                                        <NavDropdown eventKey={3} title="Hobbies" id="basic-nav-dropdown">
                                            <MenuItem eventKey={3.1}><Link to={'/audio-production'}>Audio Production</Link></MenuItem>
                                            <MenuItem eventKey={3.2}><li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/podcasting'}>Podcasts</Link></li></MenuItem>
                                            <MenuItem eventKey={3.3}><li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/hacks'}>Hardware & Software Hacks</Link></li></MenuItem>
                                        </ NavDropdown>
                                        {/*<Row>
                                            <Col xs={6} xsOffset={4}> 
                                                <NavItem eventKey="4" title="Contact Me">
                                                    <Button
                                                    bsStyle="default"
                                                    bsSize="extra-small"
                                                    onClick={this.open}
                                                    >Contact</Button>
                                                </NavItem>
                                            </Col>
                                        </Row>*/}
                                    </Nav>
                                </Col>
                            </Row>
                        </NavigationBar.Collapse>
                    </NavigationBar>
                </div>
                <ContactModal show={this.state.showContactModal} onHide={this.close}>
                  <ContactModal.Header closeButton>
                    <ContactModal.Title>Request a Quote on A Service</ContactModal.Title>
                  </ContactModal.Header>
                  <ContactModal.Body>
                      //@TODO: place component for contact form here
                  </ContactModal.Body>
                </ContactModal>
            </div>
        );
    }
}
