import React from "react";
import { Navbar, Container, Nav, Form, InputGroup, 
  FontAwesomeIcon, Carousel, Card, Button, Row, Col} from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';



const Ecom = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Amazon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form.Control type="text" placeholder="Search" />
          

        </Container>
      </Navbar>


      {/* <Main> */}
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://theoutletmall66.com/img/bg/theoutlet_homeslide5.jpg"
      alt="First slide"
    />
   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.templatesnext.org/icreate/wp-content/uploads/2018/07/shopping-slide-1.jpg"
      alt="Second slide"
    />

   
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.grandhotelgardone.it/images/slide/shopping/slide_shopping.jpg"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
 {/* </Main> */}

{/* <Products> */}
<Container className="container">
  <Row>
    <Col xs={12} sm={12} Me={8} xl={3} xxl={6}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Buy</Button>
  </Card.Body>
</Card>
</Col>


<Col xs={12} sm={12} Me={8} xl={3} xxl={6}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://5.imimg.com/data5/NX/SU/ZM/SELLER-8778811/gold-jewelry-500x500.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Buy</Button>
  </Card.Body>
</Card>
</Col>
</Row>


<Row>
<Col xs={12} sm={12} Me={8} xl={3} xxl={6}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://m.media-amazon.com/images/I/717-04wVceL._UL1500_.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Buy</Button>
  </Card.Body>
  
</Card>
</Col>



<Col xs={12} sm={12} Me={8} xl={3} xxl={6}>
<Card style={{ width: '18rem' }}>
  
  <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61StKt0X+tS._SL1000_.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Buy</Button>
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
<Col xs={12} sm={12} Me={8} xl={3} xxl={6}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://m.media-amazon.com/images/I/71rs3Xde80S._SL1500_.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Buy</Button>
  </Card.Body>
</Card>
</Col>

<Col xs={12} sm={12} Me={8} xl={3} xxl={6}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://ii1.pepperfry.com/media/catalog/product/r/o/800x880/royal-wing-chair-in-blue-colour-by-dreamzz-furniture-royal-wing-chair-in-blue-colour-by-dreamzz-furn-pitcjr.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Buy</Button>
  </Card.Body>
</Card>
</Col>
</Row>

<Row>
<Col xs={12} sm={12} Me={8} xl={3} xxl={6}>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://3.imimg.com/data3/XV/XB/MY-11927507/img_0829-500x500.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Add to Buy</Button>
  </Card.Body>
</Card>
</Col>
</Row>
</Container>
{/* </Products> */}
     
    </>
  )
}
export default Ecom