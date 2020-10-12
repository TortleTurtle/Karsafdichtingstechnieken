import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "../../App.css";
import MediaFeed from './MediaFeed';

class Werkzaamheden extends Component {
    constructor(props){
        super(props);
        this.linkStyle = {
          color: "#FA2404",
          textDecoration: "none",
        };
    }

    render(){
        return (
            <section id="werkzaamheden">
                <div className="page-title">
                    <h2>Werkzaamheden</h2>
                </div>
                <div className="row text-with-image">
                    <div className="column text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in debitis accusamus cumque explicabo nemo. Quae, quibusdam reiciendis quod ipsa, similique nulla officia repellat ipsum quas quidem autem facere illum exercitationem non, enim maxime hic necessitatibus nemo at eligendi possimus. Corporis tempora nesciunt, id porro eligendi, reiciendis praesentium inventore fugiat ipsa consectetur eaque sit consequuntur maxime magnam exercitationem magni excepturi. Dolorem eveniet, tempore pariatur aspernatur error repudiandae. Natus consequatur vero ad aspernatur provident quibusdam dolorum veniam vitae quia quo minima reprehenderit dicta pariatur quam dolorem, expedita inventore deserunt! Fuga, corporis dignissimos. Laudantium, deserunt. Dicta non eaque officiis deserunt sequi id.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus in debitis accusamus cumque explicabo nemo. Quae, quibusdam reiciendis quod ipsa, similique nulla officia repellat ipsum quas quidem autem facere illum exercitationem non, enim maxime hic necessitatibus nemo at eligendi possimus. Corporis tempora nesciunt, id porro eligendi, reiciendis praesentium inventore fugiat ipsa consectetur eaque sit consequuntur maxime magnam exercitationem magni excepturi. Dolorem eveniet, tempore pariatur aspernatur error repudiandae. Natus consequatur vero ad aspernatur provident quibusdam dolorum veniam vitae quia quo minima reprehenderit dicta pariatur quam dolorem, expedita inventore deserunt! Fuga, corporis dignissimos. Laudantium, deserunt. Dicta non eaque officiis deserunt sequi id.</p>
                        <Link style={this.linkStyle} to='/contact'>
                            <h3>{'>'} Neem contact met ons op</h3>
                        </Link>
                    </div>
                    <div className="column">
                        <img src={require('../images/Kitspuit.jpg')} alt="Een kitspuit"></img>
                    </div>
                </div>
            </section>
        );
    }
}

export default Werkzaamheden;