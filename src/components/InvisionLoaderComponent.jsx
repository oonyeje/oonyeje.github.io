import React from 'react';

export default class InvisionLoaderComponent extends React.Component {
    constructor () {
        super();
        this.iframe = this.iframe.bind(this);
    }

    iframe () {
    	return {
        	__html: '<iframe src=' + '"' + this.props.invisionURL + '" width="100%" height="100%" frameborder= "0"></iframe>'
        }
    }
    render () {
      return (
          <div className={this.props.style.content_container} >
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
          </div>

      );
    }
}
