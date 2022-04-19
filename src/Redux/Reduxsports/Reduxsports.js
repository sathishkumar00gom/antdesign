import React from "react";
import {Nav, Button,Form,Navbar,
     FormControl,Carousel, Card, Container} from "react-bootstrap"





const Sports=()=>{
  return(
    <>
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
<Nav.Link style={{color:"white"}} href="/voot">My Voot</Nav.Link>
<Nav.Link style={{color:"white"}} href="/premium">Premium</Nav.Link>
<Nav.Link style={{color:"white"}} href="/Sports">Sports</Nav.Link>
<Nav.Link style={{color:"white"}} href="#pricing">Shows</Nav.Link>
<Nav.Link style={{color:"white"}} href="#pricing">Movies</Nav.Link>
<Nav.Link style={{color:"white"}} href="#pricing">Channels</Nav.Link>
<Nav.Link style={{color:"white"}} href="#pricing">News</Nav.Link>

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
       
     <Carousel className="carousel">
            <Carousel.Item>
  
  
    
  
  <Card >
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/cod_5909-1650289117362.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
    <Card.Img style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/kimg/kimg/5ff9da636e47464f83d763fe6dc8d053_1280X720.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

 <Carousel.Item>
  <Card>
    <Card.Img style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/kimg/kimg/a82f43c262944682812936788f73a94a_1280X720.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>


 <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/kimg/kimg/4693ea1dcab243d2b13c02459f12949d_1280X720.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>


 <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/kimg/kimg/a2feb905aba848588fdbda67a00e2f8a_1280X720.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/kimg/kimg/41f9058d8ada40dda52a4e604aa01d4a_1280X720.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/boxing-errol-spence-vs-yordenis-ugas-tv-carouse-1650192509720.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>
</Carousel>



   



    




        </>
    )
}
export default Sports