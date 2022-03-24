import React, { useReducer, useState } from "react";
import {
  Navbar, Nav, Form, InputGroup,
  FontAwesomeIcon, Carousel, Card, Button, Row, Col
} from "react-bootstrap";
import { ArrowRight, Laptop } from 'react-bootstrap-icons';
import Tabletime from "./Table"
import { Modal } from "react-bootstrap"

const reducer = (state, action) => {
  switch (action.type) {
    case 'Add':
      console.log("up", state)
      return [...state, action.payload]
    default:
      return state
    case "Delete":
      return state.filter((product) => product.id !== action.payload)

    case "edit":
      console.log("up", state)
      return state

    // case 'edit':
    // return{...[], action.payload}
    // case "delete":
    // return{...[], action.payload}
  }

}


const Ecom = () => {
  //use state
  const [reduerData, dispatch] = useReducer(reducer, [])
  const [show, setShow] = useState(false)
  const [pass, setPass] = useState({})
  const [data, setData] = useState({
    id: 1,
    name: pass.name,
    price: pass.price
  })

  const handleinit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  const handleUpdate = () => {
    console.log('update data', data)
    dispatch({ type: "edit", payload: data })
  }
  const handleClose = () => {
    setShow(false)
  }
  const handleOpen = () => {
    setShow(true)
  }

  const HandleDelete = (item, e) => {
    e.preventDefault()

    console.log("item", item)
    dispatch({ type: 'Delete', payload: item.id })
  }
  const HandleSubmit = (item) => {
    dispatch({ type: 'Add', payload: item })
  }
  const HandleEdit = (item, e) => {
    console.log("edited=>", item)
    handleOpen();
    setPass(item)
  }


  const product = [

    {
      id: 1,
      name: "Labtop",
      Price: 60000,
      url: "https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg",
    },

    {
      id: 2,
      name: "Bangle",
      Price: 600,
      url: "https://5.imimg.com/data5/NX/SU/ZM/SELLER-8778811/gold-jewelry-500x500.jpg",
    },

    {
      id: 3,
      name: "Spectacls",
      Price: 2000,
      url: "https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg",
    },


    {
      id: 4,
      name: "Cycle",
      Price: 5000,
      url: "https://m.media-amazon.com/images/I/61StKt0X+tS._SL1000_.jpg",
    },

    {
      id: 5,
      name: "Cooker",
      Price: 3000,
      url: "https://m.media-amazon.com/images/I/71rs3Xde80S._SL1500_.jpg",
    },

    {
      id: 6,
      name: "Furniture",
      Price: 15000,
      url: "https://3.imimg.com/data3/XV/XB/MY-11927507/img_0829-500x500.jpg",
    },

    {
      id: 7,
      name: "Bero",
      Price: 7000,
      url: "https://m.media-amazon.com/images/I/718ETwvLVOL._SL1500_.jpg",
    },

  ]







  return (
    <>
      <Navbar bg="dark" variant="dark">

        <Navbar.Brand>Amazon</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form.Control type="text" placeholder="Search" />

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
      <div className="container">
        <Row>
          <Col xs={6}>
            <Row>
              <Col xs={12} sm={12} md={8} lg={12} xl={12} xxl={12}>


                {
                  product.map((item) => {
                    return (
                      <>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={item.url} />
                          <Card.Body>
                            <Card.Title>{item.id}</Card.Title>
                            <Card.Text>
                              {item.name}
                            </Card.Text>
                            <p>{item.Price}</p>
                            <Button onClick={() => HandleSubmit(item)} variant="primary">Add to Buy</Button>
                            <Button onClick={(e) => HandleDelete(item, e)} variant="danger">Delete</Button>
                            <Button onClick={(e) => HandleEdit(item, e)} variant="success">edit</Button>
                            <Modal show={show} onHide={handleClose}>
                              <Modal.Header closeButton>
                                <Modal.Title>Product Details</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <Form>
                                  <Form.Label>id</Form.Label>
                                  <Form.Label>Product Name</Form.Label>
                                  <Form.Control name="name" type="text" value={data.name} onChange={handleinit} placeholder="Product Name"></Form.Control>
                                  <Form.Label>Product Price</Form.Label>
                                  <Form.Control name="price" value={data.price} onChange={handleinit} type="number" placeholder="Product Price"></Form.Control>
                                </Form>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                  Close
                                </Button>
                                <Button variant="primary" onClick={handleUpdate}>
                                  Update
                                </Button>
                              </Modal.Footer>
                            </Modal>


                          </Card.Body>
                        </Card>

                      </>
                    )
                  })
                }


              </Col>
            </Row>

          </Col>
      


          <Col xs={6}>
            <Row>
              <Col xs={12} sm={12} md={8} xl={6} xxl={6}>
                <Tabletime reduerData={reduerData} />

              </Col>
            </Row>
          </Col>
        </Row>


      </div>
    </>
  )
}
export default Ecom


{/* <Col xs={12} sm={12} Me={8} xl={6} xxl={6} >
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src=" />
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
            <Col xs={12} sm={12} Me={8} xl={6} xxl={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
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



            <Col xs={12} sm={12} Me={8} xl={6} xxl={6}>
              <Card style={{ width: '18rem' }}>

                <Card.Img variant="top" src="" />
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
            <Col xs={12} sm={12} Me={8} xl={6} xxl={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
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

            <Col xs={12} sm={12} Me={8} xl={6} xxl={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
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
            <Col xs={12} sm={12} Me={8} xl={6} xxl={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="" />
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
        </Col>
        <Col xs={6}>
          <Tabletime />
        </Col>
      </Row> */}

{/* </Products> */ }



