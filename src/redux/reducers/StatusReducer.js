import {GET_ALL_STATUS} from '../constants/Cyberbugs/StatusConstant';

const initialState = {
    arrStatus: []
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {

    case GET_ALL_STATUS:
        return { ...state, arrStatus: action.arrStatus }

    default:
        return state
    }
}

export default reducer;
