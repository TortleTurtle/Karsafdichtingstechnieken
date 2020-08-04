import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './assets/components/Home';
import Werkzaamheden from './assets/components/Werkzaamheden';
import Contact from './assets/components/Contact';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/werkzaamheden" component={Werkzaamheden} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;