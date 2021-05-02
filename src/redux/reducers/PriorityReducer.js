import { GET_ALL_PRIORITY } from "../constants/Cyberbugs/PriorityConstants";

const initialState = {
    arrPriority: []
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {

    case GET_ALL_PRIORITY:
        return { ...state, arrPriority: action.arrPriority }

    default:
        return state
    }
}

export default reducer;
