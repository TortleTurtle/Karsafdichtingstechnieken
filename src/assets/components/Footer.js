import React, { Component } from 'react';
import '../../App.css';
import { ReactComponent as FacebookLogo } from '../images/icons/facebook.svg';
import { ReactComponent as InstagramLogo } from '../images/icons/instagram.svg';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer className="row">
                <div className="column">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: info@karsafdichtingstechnieken.nl</li>
                        <li>Mobiel: 06-52609695</li>
                        <li>Administratie: 06-52609695</li>
                        <li>KvK: 12345567890</li>
                    </ul>
                </div>
                <div className="socialBtns">
                    <FacebookLogo className="icon"/>
                    <InstagramLogo className="icon"/>
                </div>
            </footer>
        );
    }
}

export default Footer;