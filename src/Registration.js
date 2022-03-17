import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Registration.css';
import { useState } from 'react';
import Login from './Login/Loginform';

function Registration() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [nationality, setNationality] = useState("")
  const [address, setAddress] = useState("")
  const [error, setError] = useState("")
  const [Success, setSuccess] = useState("")
  const [change, setChange] = useState("sathish")

  const enterusername = (e) => {
    setName(e.target.value)
    console.log(name);
  }


  // const entermail = (e) => {
  //   setEmail(e.target.Value)
  //   console.log(email);
  // }

  const enterPhoneNumber = (e) => {
    setPhoneNumber(e.target.Value)
  }

  const enterNationality = (e) => {
    setNationality(e.target.value)
  }

  const enterAddress = (e) => {
    setAddress(e.target.value)
  }

  const validations=()=>{
    let checks=true
    if (name === "") {
      setError("please fill the username")
      checks=false
    }
    else {
      setSuccess("Succesfully Validate the Name")
      setError('')
    }

    if (email === "") {
      setError("please fill the validmailid")
      checks=false
    }
    else {
      setSuccess("Succesfully Validate the email")
      setError('')
    }

    if (phoneNumber=== "") {
      setError("please enter the Phonenumber")
      checks=false
    }
    else {
      setSuccess("Succesfully Validate the Phonenumber")
      setError('')
    }

    if (nationality === "") {
      setError("please enter the Nationality")
      checks=false
    }
    else {
      setSuccess("Succesfully Validate the Nationality")
      setError('')
    }


    if (address === "") {
      setError("please fill the Address")
      checks=false
    }
    else {
      setSuccess("Succesfully Validate the Address")
      setError('')
    }

    setName('')
    setEmail('')
    setPhoneNumber('')
    setNationality('')
    setAddress('')
    return checks
  }


  const handleChange = (e) => {
    e.preventDefault() 
    const check=validations()
    console.log("sathis",email)
    if(check){
      const FormData={
        fname:name,
        autoemail:email
      };
      localStorage.setItem("RegisterData",JSON.stringify(FormData));
        setChange(false)
    }
  }

  return (
    <>
      {
        change ? (

          <div className='container-fluid'>
            <h1>Registration Form</h1>

            <Form>
              <Form.Group className="mb-3" controlId="formBasicFullname">
                <Form.Label>Fullname</Form.Label>
                <Form.Control value={name} type="text" placeholder="Enter Fullname" onChange={enterusername} />
                <div>{error && error}</div>
                <div>{Success && Success}</div>
                <Form.Text className="text-muted">
                </Form.Text>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" value={email} placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
                <div>{error && error}</div>
                <div>{Success && Success}</div>
                <Form.Text className="text-muted">


                </Form.Text>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPhonenumber">
                <Form.Label>Phonenumber</Form.Label>
                <Form.Control type="number" placeholder="Enter Phonenumber" onChange={enterPhoneNumber} />
                <div>{error && error}</div>
                <div>{Success && Success}</div><Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nationality</Form.Label>
                <Form.Control type="text" placeholder="Enter Nationality" onChange={enterNationality} />

                <div>{error && error}</div>
                <div>{Success && Success}</div><Form.Text className="text-muted">

                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Address" onChange={enterAddress}
                />  <div>{error && error}</div>
                <div>{Success && Success}</div>
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
        ) : <Login /> 
}
      </>
        
  );

}

export default Registration;