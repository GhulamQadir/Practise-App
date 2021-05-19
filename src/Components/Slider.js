import React from 'react';
import {Animated} from "react-animated-css";
import { Carousel, Item, Caption } from 'react-bootstrap';
import { Link } from 'react-router-dom';



class Slider extends React.Component{
    render(){
        return(
           <div>
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://dailytimes.com.pk/assets/uploads/2020/03/25/IMG_9150.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://www.phupo.com/wp-content/uploads/2019/09/emmad-irfani-biography.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://modelsfashionpk.com/mfp-images/mfp-gallery-images/Muneeb-Butt-Actor-Model-386-5770.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block"
      src="https://cdn.shopify.com/s/files/1/0144/7827/8739/files/5_1600x.jpg?v=1590241066"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item>
    <img
      className="d-block"
      src="https://reviewit.pk/wp-content/uploads/2019/12/Aiman-Muneeb-4.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Fifth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

           </div>
        )
    }
}
export default Slider;