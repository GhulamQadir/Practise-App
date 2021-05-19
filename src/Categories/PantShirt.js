import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../Components/Header';
import Links from '../Components/Links';



class PantShirt extends React.Component{
    render(){
        return(
            <div>
              <Header />
              <Links />
<Container>
<Row>     
<Col md={3}>
  <Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/474x/f3/9a/9a/f39a9a356fcc7e5d7f9a18c9e7407d08.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
    </Card.Body>
  </Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="data:image/jpeg;base64,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" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://i.pinimg.com/236x/7d/84/60/7d84602df9428d21f5ab4d6939c385dd--comment.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
<Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/236x/dd/1a/59/dd1a5962630c23fc7889c46cb0e638f9.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>     
</Row>     



<Row>     
<Col md={3}>
  <Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/236x/af/39/54/af39543ca10191b4c6415ea915e3297d--dramas-celebrities.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
    </Card.Body>
  </Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://i.pinimg.com/236x/ba/df/52/badf521768a71a0f38d0124a9a4f97bb.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://reviewit.pk/wp-content/uploads/2019/12/Aiman-Minal-2.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
<Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/736x/2f/e9/a2/2fe9a2102561d2150bd4757a45c4ab8e.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>     
</Row>     


<Row>     
<Col md={3}>
  <Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROf9gOnG2Jy8rW-oT0qWGZ6Oid-WU80Fo0tQ&usqp=CAU" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
    </Card.Body>
  </Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://reviewit.pk/wp-content/uploads/2019/04/Danish-Taimoor-9.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://digiterypk.com/wp-content/uploads/2021/03/1616410638_796_Aiman-Khan-and-Muneeb-Butt-at-Muree-with-Cute-Amal.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
<Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/originals/b6/5f/c4/b65fc4f70ed0fb02fe3130fc09d28c39.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>     
</Row>     


<Row>     
<Col md={3}>
  <Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="http://www.fashionuniverse.net/wp-content/uploads/2020/02/muneeb-1.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
    </Card.Body>
  </Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://i.pinimg.com/originals/b4/80/75/b48075913c64867d5b97d6131334e550.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>

<Col md={3}>
<Card className="mainCompCards">
  <Card.Img  className="cardImg" variant="top" src="https://i.pinimg.com/originals/8a/5f/b4/8a5fb4d2f91e08665dac9a2dfda3ed17.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card> 
</Col>
<Col md={3}>
<Card className="mainCompCards">
  <Card.Img className="cardImg" variant="top" src="https://i.pinimg.com/originals/ab/ea/88/abea88d88a02424478927d085885ea2d.jpg" />
  <Card.Body>
    <Card.Title>Pant Shirt</Card.Title>
    <Button  className="cardBtn">Quick View</Button>
  </Card.Body>
</Card>
</Col>     
</Row>     


</Container>
    </div>
        )
    }
}
export default PantShirt;