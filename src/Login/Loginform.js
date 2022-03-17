import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, TwitterOutlined,GooglePlusOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Divider } from 'antd';
import './Login.css';
import { PresetColorTypes } from 'antd/lib/_util/colors';
import { useState } from 'react';


export default function Login() {
const [username, setUserName]=useState("")
const [password, setPassword]=useState("")
const [error, setError]=useState("")


    const enterusername=(e)=>{
        setUserName(e.target.value)
    }

    const enterpassword=(e)=>{
        setPassword(e.target.value)
    }

    const errorvalue=(e)=>{
        setError("")
    }

    const handlechange=()=>{
        
setUserName("")
setPassword("")


if (username===""){
     setError="Pls enter Valid Name"
}

if (password===""){
 setError="Pls enter Valid Name"
}
    }



    return (
        <>
            <div className='container'>
                <h1>LOGINFORM</h1>
                <Form>
                    <Form.Item
                        name="username">
                        <label>username</label>
                        <Input type="text" placeholder="Username" onChange={enterusername}></Input>
                        
                       

                    </Form.Item>
                    <Form.Item
                        name="password">
                        <label>password</label>
                        <Input type="password" placeholder="password"
                        onChange={enterpassword}
                       ></Input>

                    </Form.Item>
                    <Button className='button' onClick={handlechange}>Login</Button>
                    <h6 className='or'>or signed with</h6>
                    <div className='icons'>
                    <GoogleOutlined style={{fontSize:"50px"}}/>
                    <TwitterOutlined style={{fontSize:"50px"}}/>
                    <GooglePlusOutlined style={{fontSize:"50px"}}/>
                    </div>
                </Form>

            </div>
        </>
    )
}