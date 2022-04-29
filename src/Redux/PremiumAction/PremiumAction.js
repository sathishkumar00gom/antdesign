import { ActionPremiumTypes } from "./PremiumActiontype";
import axios from "axios";


export const fetchpremium = () => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3008/premium")
      .then(res => {
        console.log("res", res.data)
        dispatch({
          type: ActionPremiumTypes.SET_PREMIUM,
          payload: res.data
        })
      })
      .catch((err) => {
        console.log("err", err)
      });

  }
}


export const postpremium = (data) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:3008/premium", data)
      .then(res => {
        console.log("res", res.data)
        dispatch({
          type: ActionPremiumTypes.SELECTED_PREMIUM,
          payload: res.data
        })
      })
      .catch((err) => {
        console.log("err", err)
      });

  }
}

export const deletepremium = (premium) => {
  return async (_dispatch) => {
    await axios
      .delete(`http://localhost:3008/premium/${premium}`)

      .then(deleteData => {
        console.log("sama", deleteData)

      })
      .catch(err => {
        console.log("nan", err)
      })
  }
}


export const editpremium = (Premium) => {
  return async (_dispatch) => {
    await axios
      .put(`http://localhost:3008/premium/${Premium}`)
      .then(editData => {
        console.log("main", editData)
      })
      .catch(err => {
        console.log("err", err)
      })
  }
}




