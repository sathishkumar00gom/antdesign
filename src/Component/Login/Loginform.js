import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, TwitterOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Divider } from 'antd';
import './Login.module.css';
import { PresetColorTypes } from 'antd/lib/_util/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Login() {
    const [userNameData, setUserNameData] = useState({
        Fullname:"",
        email:""
    })

    const [error, setError] = useState("")
    const [Success, setSuccess] = useState("")

    let Navigate=useNavigate()



    const handlecanchange = (e) => {
        setUserNameData({
            ...userNameData,
            [e.target.name]: e.target.value
        });
    }



    // const errorvalue=(e)=>{
    //     setError("")
    // }

    const handlechange = (e) => {
        e.preventDefault();


        // const ocheck = () => {
        //     let action = true
        //     if (userNameData.username === "") {
        //         setError("Pls enter Valid Name")
        //         action = false
        //     }
        //     else {
        //         setSuccess("Successfully name Validated")
        //         setError('')

        //     }

        //     if (userNameData.email === "") {
        //         setError("Pls enter Valid password")
        //         action = false
        //     }
        //     else {
        //         setSuccess("Successfully password Validated")
        //         setError('')
        //     }

        //     setUserNameData("");

        //     return action
        // }



        let datas = localStorage.getItem("dada")
        let newData = JSON.parse(datas) 
        console.log("Main",newData)
        console.log(userNameData.email,userNameData.Fullname)
        let Card = newData.find((val) => val.Fullname === userNameData.Fullname && val.email === userNameData.email)
        console.log(Card)
        if (Card) {
            alert("Successfully Validated")
            localStorage.setItem("Card",JSON.stringify(Card))

            Navigate('/b')
        }
        else {
            alert("sorry not valid details")
        }
    }



    return (
        <>
            <div className='container'>
                <h1>LOGINFORM</h1>
                <Form>
                    <Form.Item
                        name="fullname">
                        <label>Fullname</label>
                        <Input type="text" name="Fullname" value={userNameData.Fullname} placeholder="Fullname" onChange={handlecanchange}></Input>
                        <div >{error && error}</div>
                        <div>{Success && Success}</div>


                    </Form.Item>
                    <Form.Item
                        name="password">
                        <label>email</label>
                        <Input type="email" name="email" value={userNameData.email} placeholder="email"
                            onChange={handlecanchange}
                        ></Input>
                        <div >{error && error}</div>
                        <div>{Success && Success}</div>


                    </Form.Item>
                    <Divider>
                        <Button className='button' onClick={handlechange}>Login</Button></Divider>
                    <h6 className='or'>or signed with</h6>
                    <div className='icons'>
                        <GoogleOutlined style={{ fontSize: "50px" }} />
                        <TwitterOutlined style={{ fontSize: "50px" }} />
                        <GooglePlusOutlined style={{ fontSize: "50px" }} />
                    </div>
                </Form>

            </div>

        </>
    )
}