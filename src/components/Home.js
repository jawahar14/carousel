import React, { Component } from "react";
import SLIDER_IMAGES from "../data/sliderImages";
import Carousel from "react-bootstrap/Carousel";

class Home extends Component {
  render() {
    return (
      <div className='af-height-90 af-max-width mx-auto mt-2'>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={SLIDER_IMAGES[0].link}
              alt='First slide'
            />
            <Carousel.Caption className='position-absolute'>
              <div className='af-position-lg af-bg-dark-transparent py-3'>
                <h3>{SLIDER_IMAGES[0].title}</h3>
                <p>{SLIDER_IMAGES[0].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={SLIDER_IMAGES[1].link}
              alt='Third slide'
            />
            <Carousel.Caption className='position-absolute'>
              <div className='af-position-lg af-bg-dark-transparent py-3'>
                <h3>{SLIDER_IMAGES[1].title}</h3>
                <p>{SLIDER_IMAGES[1].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={SLIDER_IMAGES[2].link}
              alt='Third slide'
            />
            <Carousel.Caption className='position-absolute'>
              <div className='af-position-lg af-bg-dark-transparent py-3'>
                <h3>{SLIDER_IMAGES[2].title}</h3>
                <p>{SLIDER_IMAGES[2].description}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Home;
