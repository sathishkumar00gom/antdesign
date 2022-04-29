import React, { useReducer, useState } from "react";
import "./Create.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios"
import { useNavigate } from "react-router-dom";

export const ACTION = {
    POST_USER: "Post-user"
}

const reducer = (_state, action) => {


    switch (action.type) {
        case ACTION.POST_USER:
            return [...action.payload]
    }
}







const Create = (_props) => {
    let navigate = useNavigate()


    const [data, setData] = useState({});
    console.log("dasa", data)


    const sentToApi = (e) => {
        e.preventDefault()

        axios.post("http://localhost:3006/posts", data)

            .then((res) => {
                console.log("apipost", data)
                dispatch({ type: ACTION.POST_USER, payload: res.data })
            })

            .catch((err) => {
                console.log("err", err)
            }
            )

        navigate('/Tables')
    }

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
                <Form.Control name="name" value={data.names} onChange={handleChange} type="text" placeholder="Name" >

                </Form.Control>
                <Form.Label >
                    Phone Number
                </Form.Label>
                <Form.Control name="Phonenumber" onChange={handleChange} value={data.phonenumber} type="number" placeholder="Number" >

                </Form.Control>
                <Button className="btn-danger" onClick={sentToApi}>Create  </Button>

            </Form>
        </>)
}

export default Create;