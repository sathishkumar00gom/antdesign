import React, {useState, useEffect}from "react";
import {Form, Button}from "react-bootstrap"
import {useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit=()=>{
    const navigate=useNavigate()

       const [state,setState]=useState()

    const [update,setUpdate]=useState(
        {
            Name:state?.Name,
            Releasedate:state?.Releasedate,
            url:state?.url
        }
    )

    let {id}= useParams()
   console.log(id,"id")

    useEffect(()=>{
        const Mecci=()=>{
            axios.get(`http://localhost:3006/products/${id}`)
            .then((res)=>{  
                console.log("getcall=>",res.data) 
                setState(res.data)
            })
                .catch((err)=>{
                    console.log(err,"err")
                })
        }
        Mecci()
    },[])
    console.log("state=>",state)

    useEffect(()=>{
        if(state){
            setUpdate(state)
        }
        console.log("erre=>",state)
       
    },[state])

    const handleChange=(e)=>{
        setUpdate({
            ...update,
            [e.target.name]: e.target.value,
        })
    }


    const handleUpdate = (e) =>{
        axios.put(`http://localhost:3006/products/${id}`,update)
                .then(update => {
    
                    console.log("update", update)
    
            .catch(err => {
                    console.log("err",err)
    
                        })
    
    
                })
    
     
      navigate("/Voot")
      
      

    }


    return(
        <Form >
        <Form.Label >
            Name
        </Form.Label>
        <Form.Control name="Name" value={update?.Name} onChange={handleChange} type="text" placeholder="Name" >

        </Form.Control>
        <Form.Label >
            Releasedate
        </Form.Label>
        <Form.Control name="Releasedate" onChange={handleChange} value={update?.Releasedate} type="number" placeholder="Release Date" >

        </Form.Control>

        <Form.Label >
            URL
        </Form.Label>
        <Form.Control name="url" onChange={handleChange} value={update.url} type="text" placeholder="url" >

        </Form.Control>
        <Button className="btn-danger" onClick={handleUpdate}>Update</Button>

    </Form>
    )
}

export default Edit