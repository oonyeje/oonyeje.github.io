import React from 'react';
import { Link } from 'react-router';
import BackgroundComponent from './BackgroundComponent'
import SiteContainerComponent from './SiteContainerComponent'

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: `url(${Background})`
// };

  var navigationBarStyle = {

  }

export default class App extends React.Component {

  // function generateMapMenu() {
  //   let path = '';
  //   return (
  //     routes.filter(route => route.mapMenuTitle)
  //       .map((route, index, array) => (
  //         <span key={index}>
  //           <Link
  //             to={path += ((path.slice(-1) === '/' ? '' : '/') +
  //                 (route.path === '/' ? '' : route.path))}
  //           >
  //             {route.mapMenuTitle}
  //           </Link>
  //           {(index + 1) < array.length && ' / '}
  //         </span>
  //       ))
  //   );
  // }

  render (){
    return(
      <div>
        {/*
          //example of traditional redirects with react router
          which generates history
          <nav>
            generateMapMenu()
          </nav>
          */
        }
        <BackgroundComponent children={this.props.children} currentRoute={this.props.location.pathname}>
          <SiteContainerComponent children={this.props.children} routes={this.props.routes} currentRoute={this.props.location.pathname} >
          </SiteContainerComponent>
        </BackgroundComponent>
      </div>
    );
  }

}
