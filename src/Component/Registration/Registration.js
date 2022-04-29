import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function Registration() {



  const [userData, setUserData] = useState({})



  const handlechange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }





  const handlesubmit = (e) => {
    e.prevent.Default()




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
            <Form.Control value={userData.fullname} data-testid="Fullname" name="fullname" type="text" placeholder="Enter fullname" onChange={handlechange} />
            <Form.Text className="text-muted">
            </Form.Text>

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' data-testid="email-id" value={userData.email} placeholder="Enter email" onChange={handlechange} />
            {userData.email && !(/\S+@\S+\.\S+/).test(userData.email) &&
              <span className="error" data-testid="error-msg">
                Please enter a valid email.</span>}

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhonenumber">
            <Form.Label>Phonenumber</Form.Label>
            <Form.Control type="number" name='phonenumber' data-testid="Phonenumber-id" value={userData.phonenumber} placeholder="Enter Phonenumber" onChange={handlechange} />
            <Form.Text className="text-muted">

            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' data-testid="Password-id" value={userData.password} placeholder="Enter password" onChange={handlechange} />
            {userData.password && !/^(?=.*?[A-Za-z])(?=.*?\d).{8,}$/.test(userData.password) && <span className="error" data-testid="error-msg">Please enter a valid password</span>}

          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type="password" name='Confirm Password' data-testid="Password-ids" value={userData.confirmpassword}
              placeholder="Enter Confirm password" onChange={handlechange} />
            {userData.confirmpassword && !/^(?=.*?[A-Za-z])(?=.*?\d).{8,}$/.test(userData.confirmpassword) && <span className="error" data-testid="error-msgs">Please enter a Confirm password</span>}


          </Form.Group>
          <div className='d-flex justify-content-center'>

            <Button onClick={handlesubmit} data-testid="button" className='button' variant="primary" type="submit" >
              Submit
            </Button>

          </div>
        </Form>
      </div>


    </>

  );

}

export default Registration;