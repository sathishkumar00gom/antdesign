import React from "react";


export default function Child(props){
    const changes=()=>{
        props.changeName("hai child")
    }
    return(
        <>
        <h2>Yes, We Welcomes You and {props.data}</h2>
        <button onClick={changes}>Clickme</button>
        </>)
}