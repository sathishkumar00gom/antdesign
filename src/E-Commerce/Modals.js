import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { fileContext } from './Ecom';



const Modals = (props) => {


    const Mainfile = useContext(fileContext);

    console.log("Mains", Mainfile.name)
    console.log("pro", props.main)
    const initial = {
        id: Mainfile.Tick.id,
        name: Mainfile.Tick.name,
        Price: Mainfile.Tick.Price
    }

    const [data, setData] = useState(initial)



    useEffect(() => {

        if (Mainfile.Tick) {
            setData(Mainfile.Tick)
        }


    }, [Mainfile.Tick])

    const handleinit = (_e) => {
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
