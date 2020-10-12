import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobileAlt, faFax } from '@fortawesome/free-solid-svg-icons'
import '../../App.css';

class Contact extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
          <section id="contact">
            <div className="wrapper">
              <div className="page-title">
                <h2>Contact</h2>
              </div>
              <div className="row">
                <div className="column text">
                  <p>
                    Hier kunt u onze contactinformatie vinden. Wij proberen zo snel mogelijk te reageren.
                  </p>
                </div>
                <div className="column">
                  <h3><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:info@karsafdichtingstechnieken.nl">info@karsafdichtingstechnieken.nl</a></h3>
                  <h3><FontAwesomeIcon icon={faMobileAlt} /> <a href="tel:+31615564767">+31 6 15564767</a></h3>
                  <h3>Administratie: <a href="tel:+31652609695">+31 6 5260995</a></h3>
                </div>
              </div>
            </div>
          </section>
        );
    }
}

export default Contact;