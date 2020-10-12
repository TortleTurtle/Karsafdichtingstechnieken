import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../App.css";

class Bulletpoints extends Component {
    constructor(props){
        super(props);

        this.state = {
            background: this.props.background,
        }
        this.navStyle = {
          color: "#FFFFFF",
          textDecoration: "none",
        };
    }

    render(){
        return (
          <section className="bulletPoints">
            <img src={this.state.background}></img>
            <div className="column">
              <h1>Waarom moet u voor ons kiezen?</h1>
              <ul>
                <li>Duurzame producten</li>
                <li>Lage kostprijs</li>
                <li>Vakmanschap</li>
                <li>Service of anders niks</li>
              </ul>
              <Link style={this.navStyle} to="/contact">
                <h3>contact {'>>'}</h3>
              </Link>
            </div>
          </section>
        );
    }
}

export default Bulletpoints