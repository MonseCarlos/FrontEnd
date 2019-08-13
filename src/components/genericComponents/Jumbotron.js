import React, {Component} from 'react'
import './styles/jumbotron.css'
class Carousel extends Component {
render(){
    return(
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://photos.google.com/partner/AF1QipNtaFDXLJE1AbH-dn_ZNhm7JP8L/photo/AF1QipOoXVvNEe-_JtWGl6aSgT2j_BFsSjvHUDGYM7yl slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://photos.google.com/partner/AF1QipNtaFDXLJE1AbH-dn_ZNhm7JP8L/photo/AF1QipOoXVvNEe-_JtWGl6aSgT2j_BFsSjvHUDGYM7yl"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://photos.google.com/partner/AF1QipNtaFDXLJE1AbH-dn_ZNhm7JP8L/photo/AF1QipOoXVvNEe-_JtWGl6aSgT2j_BFsSjvHUDGYM7yl"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    );
}
}
export default Carousel