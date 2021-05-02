import { GET_ALL_TASK_TYPE } from "../constants/Cyberbugs/TaskTypeConstants";

const initialState = {
    arrTaskType: []
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {

    case GET_ALL_TASK_TYPE:
        return { ...state, arrTaskType: action.arrTaskType }

    default:
        return state
    }
}

export default reducer;
