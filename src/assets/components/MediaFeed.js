import React, { Component } from 'react';
import { ReactComponent as FacebookLogo } from '../images/icons/facebook.svg';
import { ReactComponent as InstagramLogo } from '../images/icons/instagram.svg';
import { Link } from "react-router-dom";
import '../../App.css';

class MediaFeed extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <section className="mediaFeed">
            <div className="row">
              <h2>Volg onze social media</h2>
              <div className="socialBtns">
                <a href="https://www.facebook.com/kars.afdichtingstechnieken">
                  <FacebookLogo className="icon" />
                </a>
                <a href="https://www.instagram.com/karsafdichtingstechnieken/">
                  <InstagramLogo className="icon" />
                </a>
              </div>
            </div>
            <div className="gallery row">
              <img src={require("../images/trui.jpg")}></img>
              <img src={require("../images/JeroenKars2.jpg")}></img>
              <img src={require("../images/kars.jpg")}></img>
              <img src={require("../images/logo.png")}></img>
            </div>
            
          </section>
        );
    }
}

export default MediaFeed;