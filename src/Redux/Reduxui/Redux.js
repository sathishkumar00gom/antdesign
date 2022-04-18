import React,{useEffect, useState} from "react";
import {Nav, Button,Form, NavDropdown, Container, Navbar,
     FormControl,Carousel, Card, CarouselItem, Row,Col } from "react-bootstrap"
import "./redux.css"
// import Slider from "react-slick";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { deleteproducts, fetchproducts,postproducts } from "../Action/Action";
import { useNavigate } from "react-router-dom";
import Add from "./createRedux"
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";





const Voot=()=>{
  let navigate=useNavigate()
  const [del,setDel]=useState('false')

  const products = useSelector((state)=> state.allproducts.products);
  
 console.log(products,"man")
//  const {id,title}=products;
 const dispatch=useDispatch();


 useEffect(()=>{
  dispatch(fetchproducts())
 },[dispatch]);
 console.log("products", products)


 useEffect(()=>{
  dispatch(fetchproducts())
 },[del,dispatch])

 
const handleChange =()=>{
 
  navigate("/Add")
}
const handleDelete=(product)=>{
  dispatch(deleteproducts(product))
  setDel(true)
}
  const handleEdit=()=>{
    navigate("/edit")
  }




 


   
  
 





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


 <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/tkks-18-ep-v3-1649165141656.jpg" />
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
<Button className="btn-primary" style={{width:"10rem"}} onClick={handleChange}>Add</Button>
  {products && 
  products.map((product)=>{

return(
  <Row>
    <Col>
   
    

 
    <Card 
    style={{ width: "18rem"}}>
    <Card.Img 
     src={product.url}>
    </Card.Img>
    <Card.Body >
    <div> {product.id}</div> 
    <div> {product.Name}</div>
    <div> {product.Releasedate}</div> 
    
    </Card.Body>

    <Button className="btn-warning" style={{width:"10rem"}} onClick=
    {()=>handleEdit(product.id)}>Edit</Button>
    <Button className="btn-danger" style={{width:"10rem"}} onClick=
    {()=>handleDelete(product.id)}>Delete</Button>

                            {/* <td><Button className="btn-primary" onClick={()=>handleEdit(demy.id)}>Edit</Button></td></tr> */}
   
  </Card>
 
  </Col>
  </Row>
  )
})}

   
</div>


    



</body>   
        </>
    )
}
export default Voot