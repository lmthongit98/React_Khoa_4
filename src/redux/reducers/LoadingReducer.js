import { DISPLAY_LOADING, HIDE_LOADING } from "../constants/LoadingConst"

const initialState = {
    isLoading: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

    case DISPLAY_LOADING:
        return {...state, isLoading: true}
    
    case HIDE_LOADING:
        return {...state, isLoading: false}

    default:
        return state
    }
}

export default reducer;
