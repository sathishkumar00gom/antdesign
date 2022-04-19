import {ActionTypes} from "../Action/Actiontype"
import axios from "axios"


export const fetchproducts =()=>{
    return async(dispatch)=>{
     await axios
        .get("http://localhost:3006/products")
        .then(res=>{
          console.log("res",res.data)
          dispatch({
              type:ActionTypes.SET_PRODUCTS,
              payload: res.data
          })
        })
        .catch((err)=>{
          console.log("err",err)
        }); 
       // console.log(response,"response")
    }
  }

export const postproducts=(data)=>{
  return async(dispatch)=>{
      await axios 
      .post("http://localhost:3006/products",data)
      .then(res=>{
          console.log("rr",res)
          dispatch({
            type:ActionTypes.SELECTED_PRODUCTS,
            payload: res.data
        }) 
       // navigate("/voot")
        .catch((err)=>{
            console.log("err",err)
          }); 
      })
  }
}

export const deleteproducts=(product)=>{

    return async (dispatch)=>{
    await axios
    .delete(`http://localhost:3006/products/${product}`)

    .then(deleteData => {
        console.log("sama", deleteData)
       
        // dispatch({type:ActionTypes.REMOVE_SELECTED_PRODUCTS, 
        //     payload: product})
    })
    .catch(err =>{
        console.log("nan", err)
    })}
}

export const editpremium=(Premium)=>{

    return async (dispatch)=>{
    await axios
    .put(`http://localhost:3008/premium/${Premium.id}`)

    .then(editData => {
        console.log("sama", editData)
       
       
    })
    .catch(err =>{
        console.log("nan", err)
    })}
}
  