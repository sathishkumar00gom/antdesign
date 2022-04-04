import React, { createContext, useEffect, useReducer, useState } from "react";
import {
  Navbar, Nav, Form, InputGroup,
  FontAwesomeIcon, Carousel, Card, Button, Row, Col
} from "react-bootstrap";
import { ArrowRight, Laptop } from 'react-bootstrap-icons';
import Tabletime from "./Table"
import { Modal } from "react-bootstrap"
import Modals from "./Modals";





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
      console.log("updated data", state)
      //findIndex
      console.log(action)
      let temp = state.findIndex((product) => product.id === action.payload.id)
      state.splice(temp, 1, action.payload)
      console.log("method", state)
      return state
  }

}


export const fileContext = createContext({})

const Ecom = (props) => {
  const [reduerData, dispatch] = useReducer(reducer, [])
  const [show, setShow] = useState(false)
  const [date, setDate] = useState({})
  console.log("medium--==>", date)
  const [padge, setPadge] = useState("")



  const HandleDelete = (item, e) => {
    e.preventDefault()
    console.log("item", item)
    dispatch({ type: 'Delete', payload: item.id })
  }
  const HandleSubmit = (item, e) => {
    e.preventDefault()
    dispatch({ type: 'Add', payload: item })
  }
  const HandleEdit = (item) => {
    console.log("item--==>", item)
    handleOpen();
    setDate(item)
    setPadge(item)

  }

  const Passedupdate = (data) => {
    console.log("date", data)

    dispatch({ type: 'edit', payload: data })
    setShow(false)
  }

  const handleOpen = () => {
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
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
  
    <fileContext.Provider value={{Tick:date}}>
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
                    console.log("item--==>", item)
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
                            <Button onClick={(e) => HandleSubmit(item, e)} variant="primary">Add to Buy</Button>
                            <Button onClick={(e) => HandleDelete(item, e)} variant="danger">Delete</Button>
                            <Button onClick={(e) => HandleEdit(item, e)} variant="success">edit</Button>


                          </Card.Body>
                        </Card>


                      </>
                    )
                  })
                }

                <Modals model={show} close={handleClose}
                showcase={Passedupdate} />


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
      </fileContext.Provider>
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



