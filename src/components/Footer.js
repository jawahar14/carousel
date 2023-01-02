import React, { Component } from "react";
import QUOTES from "../data/quotes";

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      quotes: QUOTES
    };
  }

  render() {
    return (
      <div>
        <div className='af-footer mt-5 bg-dark'>
          <div className='quote text-light text-center font-italic pt-4'>
            {this.state.quotes[Math.floor(Math.random() * 5)].quote}
          </div>
          <div className='social'>
            <div>
              <i className='mr-4 fa fa-facebook'></i>
              <i className='mr-4 fa fa-twitter'></i>
              <i className='mr-4 fa fa-linkedin'></i>
              <i className='mr-4 fa fa-instagram'></i>
            </div>
          </div>
          <div className='links'>
            <a href='#'>Lorem</a>
            <a href='#'>Lorem</a>
            <a href='#'>Lorem</a>
            <a href='#'>Lorem</a>
            <a href='#'>Lorem</a>
            <a href='#'>Lorem</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
