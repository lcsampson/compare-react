import React from 'react';
import './Footer.css';

//STATELESS COMPONENT - you remove the { Component } import above and make the below const
//Use stateless when the component has no functionality and won't
//need any type to access to the state
//stateless won't have access to this. keyword
const Footer = () => {
    return (
      <div>
        <footer className="footer is-primary">
          <div className="container">
            <div className="columns">
              <div className="column">
                <p>And this right here is a spiffy footer, where you can put stuff.</p>
              </div>
              <div className="column has-text-right">
                <a className="icon" href="#"><i className="fa fa-facebook"></i></a>
                <a className="icon" href="#"><i className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
}; 

export default Footer;
