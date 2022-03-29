import React, { useReducer, useState } from "react"
import { Table } from "react-bootstrap"
import { useEffect } from "react"
import axios from "axios"

export const ACTION={
    GET_USER:"add-user",
    POST_USER:"Post-user",
    EDIT_USER:"edit-user",
    DELETE_USER:"delete-user"
}
const reducer=(state,action)=>{
    switch (action.type){
        case ACTION.GET_USER:
            return[...state,...action.payload]
        }
}




const Tables = () => {



    

    const [modifydata,dispatch]=useReducer(reducer,[{}])

    //const [tabledata, setTabledata] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3006/posts")
            .then((getData) => {
                console.log("Seme", getData)
            })
            dispatch({type:ACTION.GET_USER, payload: getData.data})
            
    }, [])
  
  


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Phonenumber</th>

                </tr>
            </thead>
            <tbody>
                {modifydata.map((demy) => {
                    return (
                        <tr>
                            <td>{demy.id}</td>
                            <td>{demy.name}</td>
                            <td>{demy.phonenumber}</td>

                        </tr>
                    )
                })}



            </tbody>
        </Table>
    )
}

export default Tables


