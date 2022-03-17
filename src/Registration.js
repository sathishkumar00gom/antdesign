import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import { useState } from 'react';


function Registration() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [nationality, setNationality] = useState("")
  const [address, setAddress] = useState("")
  const [error, setError] = useState("")

  const enterusername = (e) => {
    setName(e.target.value)
    console.log(name);
  }


  const entermail = (e) => {
    setEmail(e.target.Value)
    console.log(email);
  }

  const enterPhoneNumber = (e) => {
    setPhoneNumber(e.target.Value)
  }

  const enterNationality = (e) => {
    setNationality(e.target.value)
  }

  const enterAddress = (e) => {
    setAddress(e.target.value)
  }


  const handleChange = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setPhoneNumber('')
    setNationality('')
    setAddress('')
    console.log(name)
    if (name === "") {
      setError("please fill the username")
    }
    if (email === "") {
      setError("please fill the validmailid")
    }
    if (phoneNumber.length === "") {
      setError("please enter the Phonenumber")
    }
    if (nationality === "") {
      setError("please enter the Nationality")
    }
    if (address === "") {
      setError("please fill the Address")
    }
  }

    return (
      <>
       <div className='container-fluid'>
        <h1>Registration Form</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicFullname">
            <Form.Label>Fullname</Form.Label>
            <Form.Control type="text" placeholder="Enter Fullname" onChange={enterusername} />
            {error.length >0 && {error}}
            <Form.Text className="text-muted">
            </Form.Text>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={entermail} />
            <Form.Text className="text-muted">

            </Form.Text>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhonenumber">
            <Form.Label>Phonenumber</Form.Label>
            <Form.Control type="number" placeholder="Enter Phonenumber" onChange={enterPhoneNumber} />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nationality</Form.Label>
            <Form.Control type="text" placeholder="Enter Nationality" onchange={enterNationality}/>
              
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Enter Address" onchange={enterAddress}
          />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <div className='d-flex justify-content-center'>
            <Button onClick={handleChange} className='button ' variant="light" type="submit" >
              Submit
            </Button>
          </div>
        </Form>
      </div>
      </>
    );

}

export default Registration;