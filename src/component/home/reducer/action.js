import axios from 'axios'
import * as Type from './constant'



export const fetchUser = ()=>{
    return async(dispatch) =>{
        dispatch(getRequest())
        await axios.get(`https://61dd5972f60e8f001766873d.mockapi.io/person/persons`)
        .then((res)=> { 
            dispatch({type : Type.GET_USER , data : res.data})
        })
        .catch((er) => getRequestFail(er))
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