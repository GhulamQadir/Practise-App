import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'

class MainComponent extends React.Component{
    render(){
        return(
            <div>
              <Container>
<Row>     
<Col md={3}>
  <Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/originals/f1/da/65/f1da655d36b313f69a8a2ee324a240bb.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://i.pinimg.com/564x/9c/de/3d/9cde3d55cca207e2964867e831fa0875.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://img.wattpad.com/dbe2f3abf43c3c5951afaf054dd18a76fa229481/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f496a41346c5571655753574374673d3d2d3337323837343735372e313461333838613037653132613961663936373533313738303736322e6a7067?s=fit&w=720&h=720" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
<Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://pbs.twimg.com/media/Cvywlq3XYAAd_Bk.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
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