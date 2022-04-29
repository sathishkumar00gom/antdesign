import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Editpremium = () => {
    const navigate = useNavigate()
    const [state, setState] = useState()
    const [up, setUp] = useState({
        title: state?.title,
        author: state?.author,
        url: state?.url
    })

    let { id } = useParams()
    console.log(id, "id")

    useEffect(() => {
        const Mecci = () => {
            axios.get(`http://localhost:3008/premium/${id}`)
                .then((res) => {
                    console.log("getcall=>", res.data)
                    setState(res.data)
                })
                .catch((err) => {
                    console.log(err, "err")
                })
        }
        Mecci()
    }, [])
    console.log("state=>", state)

    useEffect(() => {
        if (state) {
            setUp(state)
        }
        console.log("erre=>", state)

    }, [state])

    const handleChange = (e) => {
        setUp({
            ...up,
            [e.target.name]: e.target.value,
        })
    }

    const handleUpdate = () => {
        axios.put(`http://localhost:3008/premium/${id}`, up)
            .then(_update => {

                console.log("update", up)

                    .catch(err => {
                        console.log("err", err)

                    })


            })


        navigate("/premium")



    }

    return (
        <>
            <Form >
                <Form.Label >
                    Name
                </Form.Label>
                <Form.Control name="title" value={up.title} onChange={handleChange} type="text" placeholder="title" >

                </Form.Control>
                <Form.Label >
                    Releasedate
                </Form.Label>
                <Form.Control name="author" onChange={handleChange} value={up.author} type="number" placeholder="author" >

                </Form.Control>

                <Form.Label >
                    URL
                </Form.Label>
                <Form.Control name="url" onChange={handleChange} value={up.url} type="text" placeholder="url" >

                </Form.Control>
                <Button className="btn-danger" onClick={handleUpdate}>Post</Button>

            </Form>
            )
        </>
    )
}
export default Editpremium