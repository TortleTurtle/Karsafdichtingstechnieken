import React, {Component} from 'react';
import '../../App.css';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <header>
                <div id='title'>
                    <h3>Kars</h3>
                    <h4>Afdichtingstechnieken</h4>
                </div>
                <nav>
                    <h4>home</h4>
                    <h4>info</h4>
                    <h4>werkzaamheden</h4>
                    <h4>contact</h4>
                </nav>
            </header>
        );
    }
}

export default Header;