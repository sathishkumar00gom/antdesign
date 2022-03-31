import React, { useReducer, useState } from "react"
import { Table, Button } from "react-bootstrap"
import { useEffect } from "react"
import axios from "axios"
import Create from "../Create/Create"
import Example from "./Modalpopup"
import Home from "../Home/Home"
import { BrowserRouter,useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ACTION={
    GET_USER:"add-user",
    POST_USER:"Post-user",
    EDIT_USER:"edit-user",
    DELETE_USER:"delete-user"
}

const reducer=(state,action)=>{

 
        switch(action.type){
           
            case ACTION.GET_USER:
                return[...action.payload]
            
            case ACTION.DELETE_USER:
              return state.filter((main)=>main.id!==action.payload)
               

            case ACTION.EDIT_USER:
                console.log(action.payload,"action")
                
               let org= state.findIndex((update)=>update.id===action.payload.id)
               state.splice(org,1,action.payload)
               console.log(state,"main")
               return [...state]
              

              
    }}

const Tables = () => {
    let navigate=useNavigate()

    const [modifydata,dispatch]=useReducer(reducer,[])
    const [show,setShow]=useState(false)
    const [value,setValue]=useState({})
    const [method,setMethod]=useState([])
    const [error,setError]=useState(null)
    

    useEffect(()=>{
        if(modifydata.length>0){
        setMethod(modifydata)}
        console.log(modifydata, "modifydata")
    },[modifydata])
    console.log(modifydata, "moni")



    const get=()=>{
        axios.get("http://localhost:3006/posts")
            .then(getData => {
                console.log("Seme", getData)
                setError("")
                dispatch({type:ACTION.GET_USER, payload: getData.data})
            })
            .catch(err =>{
                toast("sorry you can't edit without admin permission")
                setError(err.message)
            })
           
        }  

    useEffect(() => {
        get()
    },[])



     
   

    // const sentToApi = (data) => {
    //     axios.post("http://localhost:3006/posts", data)
    //         .then((res) => {
    //             //console.log("apipost", data,res)
    //             dispatch({type:ACTION.POST_USER, payload:res.data})  
    //         })
    //         .catch((err) => {
    //             console.log("err", err)
    //         })
    // }

    const handleSubmit=(e,demy)=>{
        e.preventDefault();
        axios.delete(`http://localhost:3006/posts/${demy}`)

        .then(deleteData => {
            console.log("sama", deleteData)
            setError("")
            dispatch({type:ACTION.DELETE_USER, payload: demy})
        })
        .catch(err =>{
            toast("sorry you can't delete without admin permission")
            setError(err.message)})
            {error !== "" && <h1>err.message</h1>}
            
    }

    const handleOpen=()=>{
        setShow(true);
    }

    const handleClose=()=>{
        setShow(false);
    }

    const handleSent=(e,demy)=>{
        e.preventDefault();
        handleOpen();
        setValue(demy);
        Medium();
       
    }


    
    
 const Medium=(Mara)=>{
        console.log(Mara, "mdf")
        axios.put(`http://localhost:3006/posts/${Mara.id}`,Mara)
        .then(update=>{
            
            console.log("update",update)
            setError("")
            // dispatchtype:ACTION.EDIT_USER, payload:update})
            get()
          
            .catch(err=>{
                toast("sorry you can't edit without admin permission")
                setError(err.message)
            })
            
            
        })}
        

    

    const Mara=(migration)=>{
        Medium(migration)
        setShow(false)
    }
  

    
  
     
    
  


    return (
        <>
       <ToastContainer/>
        <Table striped bordered hover>
            <thead>
                <tr>
                    
                    <th>Id</th>
                    <th>Nameid</th>
                    <th>Phonenumber</th>

                </tr>
            </thead>
            <tbody>
                {method.map((demy) => {
                    return (
                       
                        <tr>
                             
                            <td>{demy.id}</td>
                            <td>{demy.name}</td>
                            <td>{demy.Phonenumber}</td>
                            <td><Button className="btn-danger" 
                           onClick={(e)=>handleSubmit(e,demy.id)}>Delete</Button></td>
                            <td><Button className="btn-primary" 
                          
                         
                         onClick={(e)=>handleSent(e,demy)}>Edit</Button></td></tr>
                         
                        
                    )

                })}



            </tbody>
              {/* {error !== "" && <h1>err.message</h1>} */}
            <Example model={show} close={handleClose} moral={value}
            update={Mara}
                />
        </Table>
        {/* <Button onClick={navigate("/Home")}>Sumbit</Button> */}
        {/* <Create /> */}
        
        </>
    )
            }

export default Tables


