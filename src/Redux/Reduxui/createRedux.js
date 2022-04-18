import {react, useState} from "react"
import {Button, Form} from "react-bootstrap"
import { postproducts } from "../Action/Action"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchproducts } from "../Action/Action"

const Add=()=>{
    let navigate = useNavigate()
    let dispatch=useDispatch();
     const[change,setChange]=useState('')
     console.log("change",change)


     const handleChange = (e) => {
        setChange({
            ...change,
            [e.target.name]: e.target.value,
        })
    }   

    const handleUpdate=(e)=>{
    e.preventDefault()
            dispatch (postproducts(change))
            // navigate("/voot")
           
          
    }


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

export default Add