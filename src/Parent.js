import React, { useState } from "react";
import Child from "./Child"



export default function Parent(){
    
    const [ChangeTitle, setChangeTitle]=useState("");
    
     const Title=(data)=>{
        setChangeTitle(data);
    }
    return(
        <>
        <div>
            <h1>Hi, Welcome to My Website</h1>
            {ChangeTitle}
        </div>
        <Child data="We really Appreaciate you" changeName={Title}/>
        </>
    )
}