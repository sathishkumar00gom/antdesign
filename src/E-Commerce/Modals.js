import React, { useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useState } from 'react';



const Modals = (props) => {
    console.log("pro", props.main)
    const initial = {
        id: props.main.id,
        name: props.main.name,
        Price: props.main.Price
    }

    const [data, setData] = useState(initial)
    const [edit, setEdit] = useState(false)


    useEffect(() => {

        if (props.main) {
            setData(props.main)
        }


    }, [props.main])

    const handleinit = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handleUpdate = (e) => {

        console.log('update data', data)
        props.showcase(data)
        setEdit(true)
    }

    return (
        <Modal show={props.model} onHide={props.close}>
            <Modal.Header closeButton>
                <Modal.Title>Product Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Label>id</Form.Label>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name="name" type="text" value={data.name} onChange={handleinit} placeholder="Product Name"></Form.Control>
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control name="Price" value={data.Price} onChange={handleinit} type="number" placeholder="Product Price"></Form.Control>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.close}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleUpdate}>
                    Update
                </Button>

            </Modal.Footer>
        </Modal>)
}

export default Modals;
