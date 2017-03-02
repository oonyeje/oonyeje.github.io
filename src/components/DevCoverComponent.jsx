import React from 'react';
import mobileStyles from './../../assets/stylesheets/mobile_development_cover.css';
import audioStyles from './../../assets/stylesheets/audio_development_cover.css';
import webStyles from './../../assets/stylesheets/web_development_cover.css';


export default class DevCoverComponent extends React.Component {

    renderCover(){
      if (this.props.currentRoute == '/mobile-development'){
        <div className={mobileStyles.mobile_development_cover} > 
            <div className={mobileStyles.mobile_development_title}>MOBILE</div>
            <div className={mobileStyles.mobile_development_content}>{ } </div>
        </div>
      }else if (this.props.currentRoute == '/web-development'){
        <div className={webStyles.web_development_cover} > 
            <div className={webStyles.web_development_title}>WEB</div>
            <div className={webStyles.web_development_content}>{"< / >"} </div>
        </div>
      }else {
        <div className={audioStyles.audio_development_cover} > 
            <div className={audioStyles.audio_development_title}>AUDIO</div>
            <div className={audioStyles.audio_development_content}>VST/AU </div>
        </div>
      }
    }

    render () {
      var backgroundStyle = {
        width: "100%",
        height: "100%",
      }
      return (
        <div >
          {this.renderCover()}
        </div>
      );
    }
}