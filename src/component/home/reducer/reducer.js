import * as Type from './constant';


const defaultState = {
    loading  : true,
    error : null,
    arrUser : [],
    arrToAction : [],
    arrPosition : [],
    arrDepartment: [],
}

const homePageReducer = (state = defaultState , action)=>{
    switch(action.type){
        case Type.GET_USER:
            state.loading = false;
            state.arrUser = action.data
           
            var a = []
            var b = []
            b = action.data.map((u)=>{
                if(a.indexOf(u.department) === -1){
                    a.push(u.department)
                }
                return a
            })
            state.arrDepartment = b[0]
            var c = []
            var d = []
            d = action.data.map((u)=>{
                if(c.indexOf(u.position ) === -1){
                    c.push(u.position)
                }
                return c
            })
            state.arrPosition = d[0]
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
            state.arrUser = state.arrUser.filter(e => e.id == action.id)
            return { ...state }
        case Type.FILTER_EMPLOY_BYPOSIION:
            state.loading = false
            state.arrUser = state.arrUser.filter(e => e.position === action.position)
            return { ...state }
        case Type.FILTER_EMPLOY_BYDEPARTMENT:
            state.loading = false
            state.arrUser = state.arrUser.filter(e => e.department === action.department)
            return { ...state }
        case Type.FILTER_EMPLOY_BYNAME:
            state.loading = false
            state.arrUser = state.arrUser.filter(e => e.name.includes(action.name))
            return { ...state }
      
        default:
            return state
    }
}

export default homePageReducer 