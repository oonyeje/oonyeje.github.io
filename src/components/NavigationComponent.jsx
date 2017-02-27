import React from 'react';
import styles from './../../assets/stylesheets/navigation-component.css';
import NavigationBar from 'react-bootstrap/lib/Navbar';
import {Link} from 'react-router';

var NavDropdown = NavigationBar.NavDropdown


export default class NavigationComponent extends React.Component {
    constructor(){
        super()
        this.state = {
            _navigationState: 'home'
        };
        this.onClickHandler = this.onClickHandler.bind(this);
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
                    <header >


                          {/*
                              <div className='navbar navbar-regular navbar-fixed-top'>
                                    <div className='container'>
                                      <div className='navbar-header'>
                                        <button type='button' className='navbar-toggle'
                                          data-toggle='collapse' data-target='.navbar-collapse'
                                        >
                                          <span className='sr-only'>Toggle navigation</span>
                                        </button>
                                      </div>
                                      <ul className='nav nav-tabs navbar-right collapse navbar-collapse'>
                                        <li ><Link to={'/example'}>Example</Link></li>
                                        {this.props.currentRoute.indexOf('feature') > -1
                                          ? <li id='feature-tab' className='button-pop'><Link to={'feature'}>Feature</Link></li>
                                          : <li id='feature-tab'><Link to={'feature'}>Feature</Link></li>
                                        }
                                        {this.props.currentRoute.indexOf('user') > -1
                                          ? <li id='user-tab' className='button-pop'><Link to={'user'}>User</Link></li>
                                          : <li id='user-tab'><Link to={'user'}>User</Link></li>
                                        }

                                      </ul>
                                    </div>
                                  </div>
                        */}



                        {/*}<NavigationBar bsStyle="inverse" staticTop="true">
                                <ul >
                                    <li><a>About</a>
                                        <NavDropdown>
                                            <li ><Link to={'/example'}>Personal</Link></li>
                                            <li ><Link to={'/example'}>Professional</Link></li>
                                        </NavDropdown>
                                    </li>
                                    <li><a>Projects</a>
                                        <ul>
                                        	<li ><Link to={'/example'}>Web</Link></li>
                                        	<li ><Link to={'/example'}>Mobile</Link></li>
                                        	<li ><Link to={'/example'}>Audio</Link></li>
                                        </ul>
                                    </li>
                                    <li><a>Hobbies</a>
                                        <ul>
                                            <li ><Link to={'/example'}>Audio Production</Link></li>
                                            <li ><Link to={'/example'}>Podcasting</Link></li>
                                            <li ><Link to={'/example'}>Hardware & Software Hacks</Link></li>
                                        </ul>
                                    </li>
                                    <li ><Link to={'/example'}>Contact</Link></li>
                                </ul>
                        </NavigationBar>*/}
                        <nav className="inverse">
                  			<ul >
                                <li><a>About</a>
                                    <ul>
                                        <li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/personal'}>Personal</Link></li>
                                        <li onClick={() => this.onClickHandler(this.props.currentRoute)} ><Link to={'/professional'}>Professional</Link></li>
                                    </ul>
                                </li>
                                <li><a>Projects</a>
                                    <ul>
                                        <li onClick={() => this.onClickHandler(this.props.currentRoute)}><Link to={'/web-development'}>Web</Link></li>
                                        <li onClick={() => this.onClickHandler(this.props.currentRoute)}><Link to={'/mobile-development'}>Mobile</Link></li>
                                        <li onClick={() => this.onClickHandler(this.props.currentRoute)}><Link to={'/audio-software-development'}>Audio</Link></li>
                                    </ul>
                                </li>
                                <li><a>Hobbies</a>
                                    <ul>
                                        <li onClick={() => this.onClickHandler(this.props.currentRoute)}><Link to={'/audio-production'}>Audio Production</Link></li>
                                        <li onClick={() => this.onClickHandler(this.props.currentRoute)}><Link to={'/podcasting'}>Podcasting</Link></li>
                                        <li onClick={() => this.onClickHandler(this.props.currentRoute)}><Link to={'/hacks'}>Hardware & Software Hacks</Link></li>
                                    </ul>
                                </li>
                                <li onClick={() => this.onClickHandler(this.props.currentRoute)}><Link to={'/contact'}>Contact</Link></li>
                            </ul>
                        </nav>
                    </header>
                </div>
            </div>
        );
    }
}
