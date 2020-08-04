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
        <Banner id="mainBanner" background={require('../images/Banner.jpg')} title="Welkom" />
        <section className="row text-with-image" id="intro">
          <div className="column text">
            <h2>Lorem ipsum dolor sit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, beatae blanditiis. Tempore debitis sed aspernatur, maiores asperiores repellendus sunt adipisci ut facilis fugit, enim aut at voluptatem non maxime soluta magni aperiam cum laborum consectetur fugiat minus id rem? Perspiciatis delectus nisi odio, commodi possimus sit vel dolorum maxime suscipit veniam consequuntur vero adipisci a ipsam est libero ullam beatae provident incidunt doloribus accusantium amet assumenda reiciendis! Quia nostrum inventore quae minima voluptatem consequuntur, maxime quisquam hic reiciendis molestiae libero odio consequatur facilis. Eligendi molestias qui obcaecati reprehenderit quo quae, debitis facilis ullam sint cum at, iure delectus consectetur vero.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facere amet sint tenetur voluptatum! Reiciendis nisi ipsa quam accusamus perspiciatis ut sunt ratione fuga magnam, necessitatibus dolorem maiores, delectus magni corporis placeat illo, neque temporibus reprehenderit sequi. Libero suscipit debitis mollitia? Nam cumque, eos officiis laboriosam vero autem mollitia ex possimus. Porro voluptates illo tempore ea id consequatur sit esse numquam dolore minus fugit fuga ad, similique debitis voluptas atque vel laborum totam eligendi dicta explicabo? Laborum autem odit quaerat, cumque minima at id. Rerum nemo illo tempore reprehenderit quas dolores, alias unde sapiente possimus illum nobis? Voluptatem, at sed?</p>
          </div>
          <div className="column image">
            <img className="portrait" src={require('../images/kars.jpg')}></img>
          </div>
        </section>
        <Bulletpoints background={require('../images/Banner_2.jpg')} />
        <MediaFeed />
      </div>
    );
  }
}

export default Home;