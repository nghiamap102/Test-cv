import axios from 'axios'
import * as Type from './constant'






export const getUserById = (userID)=>{
    return (dispatch) =>{
        dispatch(getRequest())
        setTimeout( async()=>{
            await axios.get(`https://reqres.in/api/users/${userID}`)
            .then((res)=> { 
                // dispatch({type : Type.GET_USER , data : res.data.data})
                dispatch(getRequestSuccess(res.data.data))
            })
            .catch((er) => getRequestFail(er))
        },1000)
    }
}
const getRequest = ()=>{
    return{
        type : Type.GET_REQUEST
    }
}
const getRequestSuccess = (data)=>{
    return{
        type : Type.GET_USER_BY_ID,
        data : data
    }
}
const getRequestFail = (err)=>{
    return{
        type : Type.GET_REQUEST_FAIL,
        data: err
    }
}




