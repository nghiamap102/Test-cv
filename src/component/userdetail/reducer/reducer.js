import * as Type from './constant';


const defaultState = {
    user : null,
    loading : true ,
    err : null,
    listInspection : null
}

const userReducer = (state = defaultState , action)=>{
    
    switch(action.type){
        case Type.GET_USER_BY_ID:
            state.loading= false
            state.user = action.data
            return { ...state }
        case Type.GET_REQUEST:
            state.loading = true
            return { ...state }
        case Type.GET_REQUEST_FAIL:
            state.loading = false
            state.err = action.data
            return { ...state }
        case Type.GET_LIST:
            state.loading = false
            state.listInspection = action.data
            return { ...state }
        default:
            return state
    }
}

export default userReducer 