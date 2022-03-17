import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, TwitterOutlined, GooglePlusOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Divider } from 'antd';
import './Login.css';
import { PresetColorTypes } from 'antd/lib/_util/colors';
import { useState } from 'react';


export default function Login() {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [Success, setSuccess] = useState("")


    const enterusername = (e) => {
        setUserName(e.target.value)
    }

    const enteremail = (e) => {
        setEmail(e.target.value)
    }




    // const errorvalue=(e)=>{
    //     setError("")
    // }

    const handlechange = (e) => {
        e.preventDefault();


        const ocheck = () => {
            let action = true
            if (username === "") {
                setError("Pls enter Valid Name")
                action = false
            }
            else {
                setSuccess("Successfully name Validated")
                setError('')

            }

            if (email === "") {
                setError("Pls enter Valid password")
                action = false
            }
            else {
                setSuccess("Successfully password Validated")
                setError('')
            }

            setUserName("");
            setEmail("");
            return action
        }


        const newcheck = ocheck()
if(newcheck){
    let datas = localStorage.getItem("RegisterData")
    let newData = JSON.parse(datas)
    if(newData.fname === username && newData.autoemail === email){
        console.log("ok success")
    }
    else{
        console.log("baddd")
    }
}
    };





    return (
        <>
            <div className='container'>
                <h1>LOGINFORM</h1>
                <Form>
                    <Form.Item
                        name="username">
                        <label>username</label>
                        <Input type="text" placeholder="Username" onChange={enterusername}></Input>
                        <div >{error && error}</div>
                        <div>{Success && Success}</div>


                    </Form.Item>
                    <Form.Item
                        name="password">
                        <label>email</label>
                        <Input type="email" placeholder="email"
                            onChange={enteremail}
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
