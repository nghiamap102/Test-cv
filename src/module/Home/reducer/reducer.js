import * as Type from './constant';


const defaultState = {
    loading  : true,
    error : null,
    arrUser : [],
    arrToAction : []
}

const homePageReducer = (state = defaultState , action)=>{
    switch(action.type){
        case Type.GET_USER:
            state.loading = false;
            state.arrUser = action.data
            state.error =null
            return { ...state }
        case Type.GET_REQUEST:
            state.loading = true
            return { ...state }
        case Type.DEL_EMPLOY:
            state.loading = false
            state.arrUser = state.arrUser.filter(e => e.id !== action.id)
            return { ...state }
        case Type.FILTER_EMPLOY_BYID:
            state.loading = false
            state.arrUser = state.arrUser.filter(e => e.id === action.id)
            return { ...state }
        case Type.FILTER_EMPLOY_BYEMAIL:
            state.loading = false
            state.arrUser = state.arrUser.filter(e => e.email === action.email)
            return { ...state }
        case Type.FILTER_EMPLOY_BYNAME:
            state.loading = false
            state.arrUser = state.arrUser.filter(e => e.first_name.includes(action.first_name))
            return { ...state }
      
        default:
            return state
    }
}

export default homePageReducer 