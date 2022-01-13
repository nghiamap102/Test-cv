import axios from 'axios'
import * as Type from './constant'






export const getUserById = (userID)=>{
    return (dispatch) =>{
        dispatch(getRequest())
        setTimeout( async()=>{
            await axios.get(`https://61dd5972f60e8f001766873d.mockapi.io/person/persons/${userID}`)
            .then((res)=> { 
                // dispatch({type : Type.GET_USER , data : res.data.data})
                dispatch(getRequestSuccess(res.data))
            })
            .catch((er) => getRequestFail(er))
        },1000)
    }
}

export const getListInspection = ()=>{
    return async (dispatch)=>{
        await axios.get('https://61dd5972f60e8f001766873d.mockapi.io/person/inspection')
        .then(res=>{
            dispatch({type : Type.GET_LIST , data : res.data})
        })
        .catch((err) =>getRequestFail(err))
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




