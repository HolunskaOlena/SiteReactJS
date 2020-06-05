import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import forest1 from '../photo/forest1.jpg';
import forest2 from '../photo/forest2.jpg';

export default class CarouselBox extends Component {
    render() {
        return (
           <Carousel>
               <Carousel.Item>
                   <img 
                        className="d-block w-100"
                        src={forest1}
                        alt="forest"
                   />
                   <Carousel.Caption>
                       <h3>Forest image</h3>
                       <p>Some text blblblblblblblblblblblblblblblblblb</p>
                   </Carousel.Caption>
               </Carousel.Item>

               <Carousel.Item>
                   <img 
                        className="d-block w-100"
                        src={forest2}
                        alt="forest"
                   />
                   <Carousel.Caption>
                       <h3>Forest image</h3>
                       <p>Some text blblblblblblblblblblblblblblblblblb</p>
                   </Carousel.Caption>
               </Carousel.Item>
           </Carousel>
        )
    }
}
