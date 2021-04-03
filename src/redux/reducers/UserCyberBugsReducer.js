import { USER_LOGIN } from "../../util/constants/settingSystem";
import { USLOGIN } from "../constants/Cyberbugs/Cyberbugs";

let _userLogin = {
    name: '',
    avatar: ''
};

if(localStorage.getItem(USER_LOGIN)){
    _userLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}


const stateDefault = {
    userLogin: _userLogin
}  

const reducer = (state = stateDefault, action) => {
   
    switch(action.type){
        case USLOGIN: {
            state.userLogin = action.userLogin;
            console.log(state);
            return {...state};
        }
        default:
            return state;
    }
}

export default reducer;