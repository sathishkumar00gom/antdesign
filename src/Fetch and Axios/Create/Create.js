import React, { useState } from "react";
import "./Create.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios"




const Create = () => {
    const [data, setData] = useState({});
    console.log("dasa", data)

    const sentToApi = (temp) => {
        axios.post("http://localhost:3006/posts",data)
            .then((res) => {
                console.log("apipost", data)
            })
            .catch((err)=>{
                console.log("err", err)
            })
    }
    
//    const handleSubmit=(e)=>{
//        e.preventDefault();
//         let temp={
//             id:Date.now(),
//             name:data.name,
//             phonenumber:data.phonenumber,
//         }
//         sentToApi(temp)
//     }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }


    return (


        <>
            <h1 className="Main">
                CRUD OPEARATION
            </h1>
            <Form className="Mainbody">
                <Form.Label >
                    Names
                </Form.Label>
                <Form.Control name="name" value={data.names} onChange={handleChange} type="text" Placeholder="Name" >

                </Form.Control>
                <Form.Label >
                    Phone Number
                </Form.Label>
                <Form.Control name="Phonenumber" onChange={handleChange} value={data.phonenumber} type="number" Placeholder="Number" >

                </Form.Control>
                <Button className="btn-danger" onClick={sentToApi}>Create  </Button>

            </Form>
        </>
    )
}

export default Create