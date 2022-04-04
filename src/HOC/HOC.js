import React, { useEffect, useState } from "react";
import axios from "axios";

const Userlist = () => {
    const [state, setState] = useState([])
    const [term,setTerm]=useState("")
    const [filter,setFilter]=useState([])
    const[effect,setEffect]=useState(false)


    useEffect(() => {
        const fetchingdata = () => {

            axios.get("http://localhost:3006/posts")
                .then(res => {
                    console.log("hai", res)
                    setState(res.data)

                })
                .catch(err => err.message)
        }

        fetchingdata()
    }, [])
    useEffect(()=>{
        if(term.length>3){
            console.log(term)
            let filter=state && state.filter((item)=>{
                console.log(item, "itemname")
                return item.name.toLowerCase().startsWith(term.toLowerCase())
            })
            console.log("filters",filter)
         setFilter(filter)
        }
    },[term])

    const handleEdit=(e)=>{
        setTerm(e.target.value)
        console.log("t",term)
        //setEffect(true)
        //setFilter(filter)
    }

    return (
        <>
            <input type="text" placeholder="searchterm" value={term} onChange={handleEdit}>
            </input>
            {/* {state.filter(({name})=>{
                // console.log("name",name)
                return(
                    
                    name.indexOf(term)>=0)})
                   
                   
                   .map((user) => {

                        return (
                            <>
                                <div>{user.id}</div>
                                <div>{user.name}</div>
                                <div>{user.Phonenumber}</div>
                            </>
                        )
                
            })} */}
            

   
    
                            <div>
                                {
                                    (filter.length!==0?filter:state.map((user)=>{
                                        return (
                                            <React.Fragment key={user.id}>
                                                <div>{user.id}</div>
                                                <div>{user.name}</div>
                                                <div>{user.Phonenumber}</div>
                                            </React.Fragment>
                                        )
                                    }))
                                }
                            </div>
                         
                        </>

                    )

                }

export default Userlist;