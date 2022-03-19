import { Form, Button } from 'react-bootstrap';
import './Registration.css';
import { useState } from 'react';
import Login from '../Login/Loginform';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

function Registration() {

  let Navigate = useNavigate()

  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")
  // const [phoneNumber, setPhoneNumber] = useState("")
  // const [nationality, setNationality] = useState("")
  // const [address, setAddress] = useState("")
  const [userData, setUserData] = useState({})
  const [error, setError] = useState("")
  const [Success, setSuccess] = useState("")
  const [change, setChange] = useState("sathish")


  const handlechange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }


  // const enterusername = (e) => {

  //   console.log(name);
  // }

  // const entermail = (e) => {
  //   setEmail(e.target.Value)
  //   console.log(email);
  // }

  // const enterPhoneNumber = (e) => {
  //   setPhoneNumber(e.target.Value)
  // }

  // const enterNationality = (e) => {
  //   setNationality(e.target.value)
  // }

  // const enterAddress = (e) => {
  //   setAddress(e.target.value)
  // }



  const handlesubmit = (e) => {
    Navigate('/a')
    const validations = (e) => {
      let checks = true
      if (userData.name === "") {
        setError("please fill the username")
        checks = false
      }
      else {
        setSuccess("Succesfully Validate the Name")
        setError('')
      }

      if (userData.email === "") {
        setError("please fill the validmailid")
        checks = false
      }
      else {
        setSuccess("Succesfully Validate the email")
        setError('')
      }

      if (userData.phoneNumber === "") {
        setError("please enter the Phonenumber")
        checks = false
      }
      else {
        setSuccess("Succesfully Validate the Phonenumber")
        setError('')
      }

      if (userData.nationality === "") {
        setError("please enter the Nationality")
        checks = false
      }
      else {
        setSuccess("Succesfully Validate the Nationality")
        setError('')
      }


      if (userData.address === "") {
        setError("please fill the Address")
        checks = false
      }
      else {
        setSuccess("Succesfully Validate the Address")
        setError('')
      }

      // setName('')
      // setEmail('')
      // setPhoneNumber('')
      // setNationality('')
      // setAddress('')
      setUserData('')
      return checks
    }


    
    e.preventDefault()
    // const check = validations()
    // // console.log("sathis",email)
    // if (check) {
    //   const FormData = [{
    //     fname: userData.name,
    //     autoemail: userData.email
    //   }];
    //   localStorage.setItem("RegisterData", JSON.stringify(FormData));
    //   setChange(false)
    // }
    const datastore = localStorage.getItem("dada")
    if (datastore) {
      let localData = JSON.parse(datastore)
      localData.push(userData)
      localStorage.setItem('dada', JSON.stringify(localData))
    }


    else {
      localStorage.setItem("dada", JSON.stringify([userData]))
    }
  }

  return (
    <>


      <div className='container'>
        <h1>Registration Form</h1>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicFullname">
            <Form.Label>Fullname</Form.Label>
            <Form.Control value={userData.Fullname} name="Fullname"type="text" placeholder="Enter Fullname" onChange={handlechange} />
            <div>{error && error}</div>
            <div>{Success && Success}</div>
            <Form.Text className="text-muted">
            </Form.Text>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' value={userData.email} placeholder="Enter email" onChange={handlechange} />
            <div>{error && error}</div>
            <div>{Success && Success}</div>
            <Form.Text className="text-muted">


            </Form.Text>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhonenumber">
            <Form.Label>Phonenumber</Form.Label>
            <Form.Control type="number" name='phonenumber' value={userData.phonenumber} placeholder="Enter Phonenumber" onChange={handlechange} />
            <div>{error && error}</div>
            <div>{Success && Success}</div><Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nationality</Form.Label>
            <Form.Control type="text" name='nationality' value={userData.nationality} placeholder="Enter Nationality" onChange={handlechange} />

            <div>{error && error}</div>
            <div>{Success && Success}</div><Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" name='address' value={userData.address} placeholder="Enter Address" onChange={handlechange}
            />  <div>{error && error}</div>
            <div>{Success && Success}</div>
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <div className='d-flex justify-content-center'>

            <Button onClick={handlesubmit} className='button ' variant="light" type="submit" >
              Submit
            </Button>

          </div>
        </Form>
      </div>


    </>

  );

}

export default Registration;