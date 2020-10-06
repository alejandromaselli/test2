import React, { Component, useEffect } from "react";
import "./slider-f.styles.sass";

// Carousel

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

//slides

import Slide1 from "./slide1/slide1.component";

import AOS from "aos";
import "aos/dist/aos.css";

class FeaturedProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      oneslide: 3,
    };

    if (window.innerWidth < 600) {
      this.setState({ oneslide: 1 });
    } else {
      this.setState({ oneslide: 3 });
      console.log("width", window.innerWidth);
    }

    window.addEventListener("resize", (event) => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      if (window.innerWidth < 600) {
        this.setState({ oneslide: 1 });
      } else {
        this.setState({ oneslide: 3 });
      }
      console.log(window.innerWidth, window.innerHeight);
    });
  }
  componentDidMount() {
    if (window.innerWidth < 600) {
      this.setState({ oneslide: 1 });
    } else {
      this.setState({ oneslide: 3 });
      console.log("width", window.innerWidth);
    }
  }

  render() {
    return (
      <>
        <CarouselProvider
          className="slider-container"
          data-aos="zoom-in"
          data-aos-once="true"
          naturalSlideWidth={this.state.width}
          naturalSlideHeight={this.state.height}
          totalSlides={6}
          dragStep={1}
          visibleSlides={this.state.oneslide}
        >
          <div className="text">
            <div className="bar"></div>
            <h2>Featured Products</h2>
          </div>
          <Slider>
            <Slide className="slide" index={0}>
              <Slide1 />
            </Slide>
            <Slide className="slide" index={1}>
              <Slide1 />
            </Slide>
            <Slide className="slide" index={2}>
              <Slide1 />
            </Slide>
            <Slide className="slide" index={3}>
              <Slide1 />
            </Slide>
            <Slide className="slide" index={4}>
              <Slide1 />
            </Slide>
            <Slide className="slide" index={5}>
              <Slide1 />
            </Slide>
          </Slider>
          <div className="arrows">
            <ButtonBack>
              <img src="https://img.icons8.com/fluent-systems-filled/48/000000/long-arrow-right.png" alt="arrow" />
            </ButtonBack>
            <ButtonNext>
              <img src="https://img.icons8.com/fluent-systems-filled/48/000000/long-arrow-right.png" alt="arrow" />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </>
    );
  }
}

export default FeaturedProducts;
