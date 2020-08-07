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
            <section id='contact'>
                <div className="wrapper">
                    <div className="page-title">
                        <h2>Contact</h2>
                    </div>
                    <div className='row'>
                        <div className="column text">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil commodi distinctio, ut dolore, mollitia velit, architecto reiciendis tempora obcaecati incidunt. Temporibus, aperiam a ipsam autem eos quasi quis neque itaque possimus tempora labore sit unde voluptatum, corporis magnam, cumque reprehenderit necessitatibus consequatur nisi dignissimos laudantium. Commodi quidem ducimus voluptates vero sapiente cupiditate pariatur sequi totam repellat neque enim saepe, ab sint dolores, dolor ipsam quis, eaque quam. Vitae voluptates ipsum ab qui itaque rerum temporibus? Aliquid vel quidem placeat, amet blanditiis saepe voluptatem non fugit nemo doloremque error modi dolor similique, fugiat consequatur distinctio, cupiditate rerum animi! Pariatur, ullam?</p>
                        </div>
                        <div className="column">
                            <h3><FontAwesomeIcon icon={faEnvelope}/> info@karsafdichtingstechnieken.nl</h3>
                            <h3><FontAwesomeIcon icon={faMobileAlt}/> 06-15564797</h3>
                            <h3><FontAwesomeIcon icon={faFax}/> 06-5260995</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;