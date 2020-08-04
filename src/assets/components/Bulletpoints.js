import React, { Component } from 'react';
import "../../App.css";

class Bulletpoints extends Component {
    constructor(props){
        super(props);

        this.state = {
            background: this.props.background,
        }
    }

    render(){
        return(
            <section className="bulletPoints">
                <img src={this.state.background}></img>
                <div className="column">
                    <h1>Waarom moet u voor ons kiezen?</h1>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                    <h3>Lees meer {'>>'}</h3>
                </div>
            </section>
        );
    }
}

export default Bulletpoints