import React, {Component} from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Slide1 from './slide1/slide1.component';

import './slider.styles.sass';

class Carousel extends Component {
  constructor(props){
    super(props);
    
    this.state = {width: 0, height:0}
    
    window.addEventListener('resize', (event) => {
      console.log("Entra al constructor ",window.innerWidth, window.innerHeight);
      this.setState({width:window.innerWidth, height:window.innerHeight})
      console.log("Sale del constructor ",window.innerWidth, window.innerHeight);
      
    })
  
  }
  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
 console.log("Entra al catch error", error, info); 
 
  }
  componentDidMount(){
    this.setState({width:window.innerWidth, height:window.innerHeight})
    console.log("Entra a did mount ",window.innerWidth, window.innerHeight);
  }
  
  didComponentUpdate(){
    this.setState({width:window.innerWidth, height:window.innerHeight})
    console.log("Entra a update", window.innerWidth, window.innerHeight);
  }

  render() {
    return (
      <div className="slider-container-navbar">
        <CarouselProvider 
          className="carrousel"
          naturalSlideWidth={this.state.width} 
          naturalSlideHeight={this.state.height*(1.2)}
          totalSlides={3}
        >
            <Slider spinner={true} className="slider-main">
                  <Slide index={0}><Slide1/></Slide>
                  <Slide index={1}><Slide1/></Slide>
                  <Slide index={2}><Slide1/></Slide>
              </Slider>
              <div className="dots-container">
                  <Dot slide="2" className="dot-alv" />
                  <Dot slide="1" className="dot-alv" />
                  <Dot slide="0" className="dot-alv" />
              </div> 
          </CarouselProvider>
      </div>
    );
  }
}

export default Carousel;