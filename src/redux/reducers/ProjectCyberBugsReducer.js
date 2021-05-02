import { GET_ALL_PROJECT } from "../constants/Cyberbugs/ProjectCyberBugsContants";

const stateDefault = {
    projectList: [
    ],
    arrProject: [], //for create task
}




const reducer = (state = stateDefault,action) => {


    switch(action.type){

        case 'GET_LIST_PROJECT': {
                state.projectList = action.projectList;
                console.log("projectList",action.projectList)
                return {...state};
        }
        case GET_ALL_PROJECT: {
            return {...state, arrProject: action.arrProject};
        }

        default: return {...state}
    }
}

export default reducer;