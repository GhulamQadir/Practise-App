import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

class MainComponent extends React.Component{
  cardBtn = () => {
  }
    render(){
        return(
            <div>
              <Container>
<Row>     
<Col md={3}>
  <Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/originals/f1/da/65/f1da655d36b313f69a8a2ee324a240bb.jpg" />
  <Card.Body>
    <Card.Title>Shalwar Kameez</Card.Title>
    <Link to="/shalwar-kameez">
    <Button  className="cardBtn">Quick View</Button>
    </Link>
    </Card.Body>
  </Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://i.pinimg.com/564x/9c/de/3d/9cde3d55cca207e2964867e831fa0875.jpg" />
  <Card.Body>
    <Card.Title>Shalwar Kameez</Card.Title>
    <Link to="/shalwar-kameez">
    <Button  className="cardBtn">Quick View</Button>
    </Link>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://img.wattpad.com/dbe2f3abf43c3c5951afaf054dd18a76fa229481/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f496a41346c5571655753574374673d3d2d3337323837343735372e313461333838613037653132613961663936373533313738303736322e6a7067?s=fit&w=720&h=720" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Link to="/pant-shirts">
    <Button  className="cardBtn">Quick View</Button>
    </Link>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
<Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/236x/f3/9a/9a/f39a9a356fcc7e5d7f9a18c9e7407d08.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Link to="/pant-shirts">
    <Button  className="cardBtn">Quick View</Button>
  </Link>  
</Card.Body>
</Card>
</Col>     
</Row>     



<Row>     
<Col md={3}>
  <Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://pbs.twimg.com/media/Cvywlq3XYAAd_Bk.jpg" />
  <Card.Body>
    <Card.Title>Coat Pant</Card.Title>
    <Link to="/coat-pant">
    <Button  className="cardBtn">Quick View</Button>
    </Link>  
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://i.pinimg.com/originals/e9/ff/63/e9ff63f7f813f8f1510fd04259b5ce9b.jpg" />
  <Card.Body>
    <Card.Title>Coat Pant</Card.Title>
    <Link to="/coat-pant">
    <Button  className="cardBtn">Quick View</Button>
    </Link>
    </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://cdn.shopify.com/s/files/1/0144/7827/8739/products/AY5A9027_grande.jpg?v=1612616379" />
  <Card.Body>
    <Card.Title>Twinset</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
<Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://cdn.shopify.com/s/files/1/0144/7827/8739/products/AY5A8295_grande.jpg?v=1618575527" />
  <Card.Body>
    <Card.Title>Twinset</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>     
</Row>     



<Row>     
<Col md={3}>
  <Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://reviewit.pk/wp-content/uploads/2018/11/Screenshot_2018-11-24-01-07-47-1_1543005266762.jpg" />
  <Card.Body>
    <Card.Title>Waistcoat</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://i.pinimg.com/564x/27/bf/5c/27bf5c0cb86f854a9122bf2ce37ad0a4.jpg " />
  <Card.Body>
    <Card.Title>Waistcoat</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://reviewit.pk/wp-content/uploads/2018/11/muneebb777.jpg" />
  <Card.Body>
    <Card.Title>Bridal Dress</Card.Title>
    <Button  className="cardBtn"> Quick View</Button>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
<Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://xoom.pk/wp-content/uploads/2020/11/3_6d3b48d8-72c1-4e44-9785-a2822126e290_600x.jpg" />
  <Card.Body>
    <Card.Title>Bridal Dress</Card.Title>
    <Button className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>     
</Row>     
</Container>
</div>  
        ) 
    }
}
export default MainComponent;