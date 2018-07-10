import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Faq from './components/Faq/Faq';
import About from './components/About/About';
import Features from './components/Features/Features';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header test="this is a props test"/>

          <Route exact={true} path="/" component={Home} />
          <Route path="/faq" component={Faq} />
          <Route path="/about" component={About} />
          <Route path="/features" component={Features} />

        <Footer />
      </div>
    );
  }
}

export default App;
