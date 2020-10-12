import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../App.css';

class Header extends Component {
    constructor(props) {
        super(props)
        this.navStyle = {
            color: '#FA2404',
            textDecoration: 'none'
        }
    }

    render() {
        return(
            <header>
                <div id='company-name'>
                    <h3>Kars</h3>
                    <h4>Afdichtingstechnieken</h4>
                </div>
                <nav>
                    <Link style={this.navStyle} to='/'>
                        <h4>home</h4>
                    </Link>
                    <Link style={this.navStyle} to='/contact'>
                        <h4>contact</h4>
                    </Link>
                </nav>
            </header>
        );
    }
}

export default Header;