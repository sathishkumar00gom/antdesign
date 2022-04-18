//     import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined, GoogleOutlined, TwitterOutlined, GooglePlusOutlined } from '@ant-design/icons';
// import { Row, Col } from 'antd';
// import { Divider } from 'antd';

// import { PresetColorTypes } from 'antd/lib/_util/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [userNameData, setUserNameData] = useState({
        email: "",
        password: ""
    })

    const [error, setError] = useState("")
    const [Success, setSuccess] = useState("")

    let Navigate = useNavigate()



    const handlechange = (e) => {
        setUserNameData({
            ...userNameData,
            [e.target.name]: e.target.value
        });
    }



    const errorvalue = (e) => {
        setError("")
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        Navigate("/b")


        const ocheck = () => {
            
            if (userNameData.email === "") {
                setError("Pls enter Valid Name")
                
            }
            else {
                setSuccess("Successfully name Validated")
                setError('')

            }

            
            
            if (userNameData.confirmpassword === "") {
                setError("Pls enter Valid password")
                
            }
            else if (userNameData.confirmpassword !== userNameData.password) 
                {setError("Password do not match")}
                
           

            setUserNameData("");

            
        }

       



        let datas = localStorage.getItem("dada")
        let newData = JSON.parse(datas)
        console.log("Main", newData)
        console.log(userNameData.email, userNameData.password)
        let Card = newData.find((val) => val.email === userNameData.email && val.password === userNameData.password)
        console.log(Card)
        if (Card) {
            alert("Successfully Validated")
            localStorage.setItem("Card", JSON.stringify(Card))

            Navigate('/b')
        }
        else {
            alert("sorry not valid details")
        }
    }
    return (

        <div className="container">
            <form>

                <h3>Log In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={userNameData.email} name="email"className="form-control" placeholder="Enter email" onChange={handlechange}/>
                </div>
                <p>{Success}</p>
                <p>{error}</p>


                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={userNameData.password} name="password"className="form-control" placeholder="Enter password"onChange={handlechange} />
                    <p>{Success}</p>
                <p>{error}</p>

                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" value={userNameData.confirmpassword} name="confirmpassword" className="form-control" placeholder="Enter Confirm password"onChange={handlechange} />
                </div>
                <p>{Success}</p>
                <p>{error}</p>


                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" onClick={handleSubmit}className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password</a>
                </p>
            </form>
        </div>

    );
}




//     return (
//         <>
//             <div className='container'>
//                 <h1>LOGINFORM</h1>
//                 <Form>
//                     <Form.Item
//                         name="fullname">
//                         <label>Fullname</label>
//                         <Input className="text1" type="text" name="fullname" value={userNameData.Fullname} placeholder="Fullname" onChange={handlecanchange}></Input>
//                         <div >{error && error}</div>
//                         <div>{Success && Success}</div>


//                     </Form.Item>
//                     <Form.Item
//                         name="password">
//                         <label>email</label>
//                         <Input type="email" name="email" value={userNameData.email} placeholder="email"
//                             onChange={handlecanchange}
//                         ></Input>
//                         <div >{error && error}</div>
//                         <div>{Success && Success}</div>


//                     </Form.Item>
//                     <Divider>
//                         <Button className='button' onClick={handlechange}>Login</Button></Divider>
//                     <h6 className='or'>or signed with</h6>
//                     <div className='icons'>
//                         <GoogleOutlined style={{ fontSize: "50px" }} />
//                         <TwitterOutlined style={{ fontSize: "50px" }} />
//                         <GooglePlusOutlined style={{ fontSize: "50px" }} />
//                     </div>
//                 </Form>

//             </div>

//         </>
//     )
// }

// import React, { Component } from "react";

// export default class Login extends Component {
//     render() {
//         return (
