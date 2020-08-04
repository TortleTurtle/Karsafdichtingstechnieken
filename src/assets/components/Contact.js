import React, { Component } from 'react';
import '../../App.css';

class Contact extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id='contact'>
                <div className='row'>
                    <div className="column text">
                        <h2>Contact</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nihil commodi distinctio, ut dolore, mollitia velit, architecto reiciendis tempora obcaecati incidunt. Temporibus, aperiam a ipsam autem eos quasi quis neque itaque possimus tempora labore sit unde voluptatum, corporis magnam, cumque reprehenderit necessitatibus consequatur nisi dignissimos laudantium. Commodi quidem ducimus voluptates vero sapiente cupiditate pariatur sequi totam repellat neque enim saepe, ab sint dolores, dolor ipsam quis, eaque quam. Vitae voluptates ipsum ab qui itaque rerum temporibus? Aliquid vel quidem placeat, amet blanditiis saepe voluptatem non fugit nemo doloremque error modi dolor similique, fugiat consequatur distinctio, cupiditate rerum animi! Pariatur, ullam?</p>
                        <h3>E-mail: info@karsafdichtingstechnieken.nl</h3>
                        <h3>Mobiel: 06-15564797</h3>
                        <h3>Administratie: 06-5260995</h3>
                    </div>
                    <div className="column">
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;