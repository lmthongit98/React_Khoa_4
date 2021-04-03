import { GET_ALL_PROJECT_CATEGORY } from "../constants/Cyberbugs/Cyberbugs";



const stateDefault = {
    arrProjectCategory: []
}  

const reducer = (state = stateDefault, action) => {
   
    switch(action.type){
        case GET_ALL_PROJECT_CATEGORY: {
            state.arrProjectCategory = action.data;
            return {...state};
        }
        default:
            return state;
    }
}

export default reducer;