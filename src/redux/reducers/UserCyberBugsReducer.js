import { USER_LOGIN } from "../../util/constants/settingSystem";
import { USLOGIN } from "../constants/Cyberbugs/Cyberbugs";
import { GET_USER_BY_PROJECT_ID } from "../constants/Cyberbugs/UserConstant";

let _userLogin = {
    name: '',
    avatar: ''
};

if(localStorage.getItem(USER_LOGIN)){
    _userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: _userLogin,
    userSearch: [],
    arrUser: [], //Cho the select create task
}  

const reducer = (state = stateDefault, action) => {
   
    switch(action.type){
        case USLOGIN: {
            state.userLogin = action.userLogin;
            console.log(state);
            return {...state};
        }
        case 'GET_USER_SEARCH': {
            state.userSearch = action.lstUserSearch;
            console.log('state', state)
            return {...state};
        }
        case GET_USER_BY_PROJECT_ID: {
            return {...state, arrUser: action.arrUser};
        }
        default:
            return state;
    }
}

export default reducer;