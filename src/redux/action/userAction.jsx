import { GET_USER_REQUEST,GET_USER_SUCCESS,GET_USER_FAIL } from "../constants/userConstant";
import axios from "axios";

export const userAction =()=>async(dispatch)=>{
    try {
        dispatch({type:GET_USER_REQUEST})
        const {data} =await axios.get("https://jsonplaceholder.typicode.com/users")
        dispatch({type:GET_USER_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:GET_USER_FAIL,payload:error.data && error.response.data.message ? error.response.data.message : error.message })

    }
   

}