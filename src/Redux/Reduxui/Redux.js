import React from "react";
import {Nav, Button,Form, NavDropdown, Container, Navbar,
     FormControl,Carousel, Card, CarouselItem } from "react-bootstrap"
     import "./redux.css"
// import Slider from "react-slick";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";



const Voot=()=>{
    


    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "100px",
    //     slidesToShow: 3,
        
    //   };
  

    return(
        <>
        <body style={{background:"https://images.unsplash.com/photo-1610208956588-61f6c2e6136a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}}>
        <div>
           <Navbar collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand  style={{fontsize:"100px",color:"white"}}><strong>Voot</strong></Navbar.Brand>
  <Button className="btn-success">Upgrade</Button>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link href="#features"></Nav.Link>
    <Nav.Link href="#features"></Nav.Link>
    <Nav.Link href="#features"></Nav.Link>
    <Nav.Link href="#features"></Nav.Link>
    <Nav.Link href="#features"></Nav.Link>
    <Nav.Link href="#features"></Nav.Link>
      <Nav.Link style={{color:"white"}} href="#features">My Voot</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#pricing">Premium</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#features">Sports</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#pricing">Shows</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#pricing">Movies</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#pricing">Channels</Nav.Link>
      <Nav.Link style={{color:"white"}} href="#pricing">News</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Nav>
     
      <Form>
         
         
          <FormControl type="text"  placeholder="search" >
          
          </FormControl>
          
      </Form>
      
      <Nav.Link  href="logout">
        logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>

        {/* // reactcarousel */}
        <Carousel className="carousel">
            <Carousel.Item>
  
  
    
  
  <Card >
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/fifa-16x9-1-apr-1648805690282.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
    <Card.Img style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/apharan-2-reviews-creative-1648183942902.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

 <Carousel.Item>
  <Card>
    <Card.Img style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/naagini6-tamil-1920x1080-1646477521113.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>


 <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/pprur-16x9-carousel-new-show-label-1649108344092.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

    

</Carousel>
<div className="button"> 
    <Button className="btn-light">Premium</Button>
    <Button className="btn-light">Freepass</Button>
    <Button className="btn-light">Sports</Button>
    <Button className="btn-light">Originals</Button>
    <Button className="btn-light">Movies</Button>
    <Button className="btn-light">International Shows</Button>
    <Button className="btn-light">News</Button>
</div>
<div>
    <Card>
        <Card.Img className="img"style={{width:"300px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_810,h_1080/v3Storage/assets/brochara-3x4-1648897041731.jpg"/>

        
    </Card>
</div>


    



</body>   
        </>
    )
}
export default Voot