import React, { Component } from 'react';
import { ReactComponent as FacebookLogo } from '../images/icons/facebook.svg';
import { ReactComponent as InstagramLogo } from '../images/icons/instagram.svg';
import '../../App.css';

class MediaFeed extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section className="mediaFeed">
                <div className="row">
                    <h2>Volg onze social media</h2>
                    <div className="socialBtns">
                        <FacebookLogo className="icon" />
                        <InstagramLogo className="icon" />
                    </div>
                </div>
                <div className="gallery row">
                    <img src={require("../images/400.png")}></img>
                    <img src={require("../images/400.png")}></img>
                    <img src={require("../images/400.png")}></img>
                    <img src={require("../images/400.png")}></img>
                </div>
            </section>
        );
    }
}

export default MediaFeed;