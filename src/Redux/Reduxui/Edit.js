import React from "react";
import {Form}from "react-bootstrap"

const Edit=()=>{

    const [update,setUpdate]=useState(
        {
            
        }
    )


    return(
        <Form >
        <Form.Label >
            Name
        </Form.Label>
        <Form.Control name="Name" value={change.Name} onChange={handleChange} type="text" placeholder="Name" >

        </Form.Control>
        <Form.Label >
            Releasedate
        </Form.Label>
        <Form.Control name="Releasedate" onChange={handleChange} value={change.Releasedate} type="number" placeholder="Release Date" >

        </Form.Control>

        <Form.Label >
            URL
        </Form.Label>
        <Form.Control name="url" onChange={handleChange} value={change.url} type="text" placeholder="url" >

        </Form.Control>
        <Button className="btn-danger" onClick={handleUpdate}>Add</Button>

    </Form>
    )
}