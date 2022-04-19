import React, { useEffect,useState } from "react";
import {Nav, Button,Form,Navbar,
     FormControl,Carousel, Card, Container} from "react-bootstrap"
import { useDispatch,useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchpremium } from "../PremiumAction/PremiumAction";
import { deletepremium } from "../PremiumAction/PremiumAction";





const Premium=()=>{


 const navigate=useNavigate()
 let dispatch=useDispatch()
 const [del,setDel]=useState(false)

 useEffect(()=>{
    dispatch(fetchpremium())
   },[dispatch]);

   useEffect(()=>{
    dispatch(fetchpremium())
   },[del,dispatch]);

 let Premium = useSelector((state)=> state.allpremium.Premium);
 

 

   const handleSubmit=()=>{
         navigate("/premium/Addpremium")
   }

   const handleDelete=(premium)=>{
       dispatch(deletepremium(premium))
       setDel(true)}

    const handleEdit=(Premium)=>{
        navigate(`/Editpremium/${Premium}`)
    }      
 

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
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/the-first-lady-16x9-1649999723424.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>
  <Carousel.Item>
  <Card>
    <Card.Img style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/kimg/kimg/af0f41cb5f324ce38ee1c646eba08d52_1280X720.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

 <Carousel.Item>
  <Card>
    <Card.Img style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/london-files-trailer-out-16x9-1649865035103.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>


 <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/apaharan2-16x9-1-1647539127422.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>


 <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/halo-16x9-7-apr-1649321432267.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/uber16x99new-1649828345447.png" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/ggg(2)-1648893824599.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/st16x9-1648743843738.png" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/affair16x9-1647314594753.png" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

  <Carousel.Item>
  <Card>
    <Card.Img  style={{width:"900px", padding:"10px"}} src="https://v3img.voot.com/resizeMedium,w_845,h_475/v3Storage/assets/why%20women%20kill-1647831949423.jpg" />
    <Card.Body>
     
    </Card.Body>
  </Card>
  </Carousel.Item>

    

</Carousel>
<Button className="btn-success" style={{width: "20rem"}} onClick={handleSubmit}>Add</Button>

{Premium && Premium.length >0 && Premium.map((premium)=>{
return(
  <Card 
    style={{ width: "18rem"}}>
    <Card.Img 
     src={premium.url}>
    </Card.Img>
    <Card.Body >
    <div> {premium.id}</div> 
    <div> {premium.title}</div>
    <div> {premium.author}</div> 
    
    </Card.Body>
    <Button className="btn-primary" style={{width: "10rem"}} 
    onClick={()=>handleEdit(premium.id)}>Edit</Button>
    <Button className="btn-danger" style={{width: "10rem"}} onClick={()=>handleDelete(premium.id)}>Delete</Button>
</Card>)})}
 </>
  )
}
export default Premium