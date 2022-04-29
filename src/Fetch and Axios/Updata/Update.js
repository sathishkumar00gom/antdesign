import React, { useState, useEffect, useReducer } from "react"
import { Form, Butto } from "react-bootstrap";
import axios from "axios"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useParams } from "react-router-dom";



export const ACTION = {
    EDIT_USER: "edit-user",
}


const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.EDIT_USER:
            console.log(action.payload, "action")

            let org = state.findIndex((update) => update.id === action.payload.id)
            state.splice(org, 1, action.payload)
            console.log(state, "main")
            return [...state]
    }
}


const Update = () => {
    const navigate = useNavigate()



    const [state, setState] = useState({})

    console.log(state, "state")

    const [migration, setMigration] = useState({

        name: state.name,
        Phonenumber: state.Phonenumber
    })



    let { id } = useParams()
    console.log(id, "id")

    useEffect(() => {
        const Mecci = () => {
            axios.get(`http://localhost:3006/posts/${id}`)
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

    useEffect(() => {
        if (state) {
            setMigration(state)
        }
        console.log("erre", state)

    }, [state])






    const handleChange = (e) => {
        setMigration({
            ...migration, [e.target.name]: e.target.value,
        })
    }






    const handleSent = (_e) => {
        axios.put(`http://localhost:3006/posts/${id}`, migration)
            .then(update => {

                console.log("update", update)


                    .catch(_err => {
                        toast("sorry you can't edit without admin permission")

                    })


            })

        setValue();
        navigate("/Tables")



    }







    return (
        <>
            <h1 className="Main">
                Edit the user
            </h1>
            <Form>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name="name" value={migration.name} onChange={handleChange}></Form.Control>
                <Form.Label>phonenumber</Form.Label>
                <Form.Control type="number" placeholder="phonenumber" name="Phonenumber" value={migration.Phonenumber} onChange={handleChange}></Form.Control>
            </Form>
            <Button className="btn-primary" onClick={(_e) => handleSent(e)}

            >Submit</Button>
        </>)




}
export default Update;