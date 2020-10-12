import React, { Component } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Bulletpoints from "./Bulletpoints";
import MediaFeed from "./MediaFeed";
import Footer from "./Footer";
import "../../App.css";

class Home extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div id="Home">
        <Banner
          id="mainBanner"
          background={require("../images/Banner.jpg")}
          title="Welkom"
        />
        <section className="row text-with-image" id="intro">
          <div className="column text">
            <h2>Over ons</h2>
            <p>
              Kars Afdichtingstechnieken is uw betrouwbare partner voor
              afdichtings werkzaamheden. Van gevel tot vloer en van badkamer tot
              zwembad kitten wij alles netjes af. Door onze jarenlange ervaring
              en voortdurende bijscholing in nieuwe technieken is uw pand bij
              ons in veilige handen.
            </p>
            <p>
              Wij werken voor zowel zakelijke klanten als particulieren met
              duurzame producten tegen een lage kostprijs. Een nette afronding
              van een toilet of keuken mag immers nooit meer kosten dan de
              ruimte zelf. Wij geloven in duurzaamheid van zowel ons materiaal
              en vakmanschap als in het contact naar u. Begeleiding kent daarom
              niet alleen een voortraject, maar -indien gewenst- ook open
              communicatie na afloop van de werkzaamheden. Wij denken graag en enthousiast met u mee!
              </p>
              <h3>Kars Afdichtingstechnieken: service of anders niks!</h3>
          </div>
          <div className="column image">
            <img className="portrait" src={require("../images/kars.jpg")}></img>
          </div>
        </section>
        <Bulletpoints background={require("../images/Banner_2.jpg")} />
        <MediaFeed />
      </div>
    );
  }
}

export default Home;