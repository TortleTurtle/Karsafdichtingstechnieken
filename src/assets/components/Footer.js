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
                <li><a href="mailto:info@karsafdichtingstechnieken.nl">Email: info@karsafdichtingstechnieken.nl</a></li>
                <li><a href="tel:0615564797">Mobiel: 06-15564797</a></li>
                <li><a href="tel:0652609695">Administratie: 06-52609695</a></li>
                <li>KvK: 12345567890</li>
              </ul>
            </div>
            <div className="socialBtns">
              <a href="https://www.facebook.com/kars.afdichtingstechnieken">
                <FacebookLogo className="icon" />
              </a>
              <a href="https://www.instagram.com/karsafdichtingstechnieken/">
                <InstagramLogo className="icon" />
              </a>
            </div>
          </footer>
        );
    }
}

export default Footer;