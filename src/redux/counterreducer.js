import { DECREASE_COUNT, INCREASE_COUNT } from "./counteraction"

const initialstate = {
    num:0
}
export const countReducer =  (state = initialstate,action)=>{
    switch(action.type){
        case INCREASE_COUNT:
            
            return {
                ...state,
                num : state.num +1
            }
        case DECREASE_COUNT:
            return {
                ...state,
                num:state.num>0 ? state.num-1:state.num
            }    
            default :return state
    }

}