import React, { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { postpremium } from "../PremiumAction/PremiumAction"

const Addpremium = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [model, setModel] = useState("")
    console.log("mod", model)



    const handleChange = (e) => {
        setModel({
            ...model,
            [e.target.name]: e.target.value,
        })
    }

    const handleUpdate = () => {
        dispatch(postpremium(model, navigate))
        navigate("/Premium")

    }



    return (
        <Form >
            <Form.Label >
                Name
            </Form.Label>
            <Form.Control name="title" value={model.title} onChange={handleChange} type="text" placeholder="title" >

            </Form.Control>
            <Form.Label >
                Releasedate
            </Form.Label>
            <Form.Control name="author" onChange={handleChange} value={model.author} type="number" placeholder="author" >

            </Form.Control>

            <Form.Label >
                URL
            </Form.Label>
            <Form.Control name="url" onChange={handleChange} value={model.url} type="text" placeholder="url" >

            </Form.Control>
            <Button className="btn-danger" onClick={handleUpdate}>Post</Button>

        </Form>
    )
}

export default Addpremium;