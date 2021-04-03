import { USER_SIGNIN_API } from "../constants/Cyberbugs/Cyberbugs";

export const signinCyberBugAction = ({ email, password }) => {
    return {
        type: USER_SIGNIN_API,
        userLogin: {
            email,
            password
        }
    }
}