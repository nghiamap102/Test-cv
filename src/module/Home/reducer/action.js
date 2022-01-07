import axios from 'axios'
import * as Type from './constant'



export const fetchUser = ()=>{
    return async(dispatch) =>{
        dispatch(getRequest())
        await axios.get(`https://reqres.in/api/users`)
        .then((res)=> { 
            dispatch({type : Type.GET_USER , data : res.data.data})
            // dispatch(getRequestSuccess(res.data.data))
        })
        .catch((er) => getRequestFail(er))
        // setTimeout( 
        // },1000)
        
    }
}


const getRequest = ()=>{
    return{
        type : Type.GET_REQUEST
    }
}

const getRequestFail = (err)=>{
    return{
        type : Type.GET_REQUEST_FAIL,
        data: err
    }
}