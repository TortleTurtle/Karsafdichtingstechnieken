import React, { Component } from 'react';
import '../../App.css';

class Banner extends Component {
    constructor(props){
        super(props);

        this.state = {
            id: this.props.id,
            background: this.props.background,
            title: this.props.title
        }
    }

    setState

    render(){
        return(
            <div className="banner" id={this.state.id}>
                <img src={this.state.background}></img>
                <h1>{this.state.title}</h1>
            </div>
        );
    }
}

export default Banner;