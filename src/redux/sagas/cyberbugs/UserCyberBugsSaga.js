import { call, fork, put, take, takeLatest, delay, select } from 'redux-saga/effects'
import { cyberBugsService } from '../../../services/CyberBugsService';
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';
import { USER_SIGNIN_API, USLOGIN } from '../../constants/Cyberbugs/Cyberbugs';
import {history} from '../../../util/lib/history'
import { userService } from '../../../services/UserService';


//--------SINGIN

function * signinSaga(action){
    try{
        //call api
        const {data, status} =  yield call(() => cyberBugsService.signinCyberBugs(action.userLogin));
        //Luu token vao local storage
        localStorage.setItem(TOKEN, data.content.accessToken);
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content))
        
        
        yield put({
            type: USLOGIN,
            userLogin: data.content
        })

        
        history.push('/home');

      
       

    }catch(err){
        console.log(err.response.data);
    }
}

export function * theoDoiSignIn(){
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}

//--------GET USER SEATCH AUTOCOMPLETE

function * getUserSaga(action){
    try{
        //call api
        const {data, status} =  yield call(() => userService.getUser(action.keyWord));
        
        console.log(data);

        yield put({
            type: 'GET_USER_SEARCH',
            lstUserSearch: data.content
        })

      
       

    }catch(err){
        console.log(err);
    }
}


export function * theoDoiGetUser () {
    yield takeLatest('GET_USER_API', getUserSaga);
}

//--------ADD/ASSIGN USER TO PROJECT


function * addUserToProjectSaga(action){
    try{
        //call api
        const {data, status} =  yield call(() => userService.assignUserProject(action.userProject));
        
        yield put({
            type: 'GET_LIST_PROJECT_SAGA'
        })

    }catch(err){
        console.log(err.response.data);
    }
}


export function * theoDoiAddUserToProject () {
    yield takeLatest('ADD_USER_PROJECT_API', addUserToProjectSaga);
}

//--------REMOVE USER TO PROJECT


function * removeUserFromProjectSaga(action){
    try{
        //call api
        const {data, status} =  yield call(() => userService.deleteUserFromProject(action.userProject));
        
        yield put({
            type: 'GET_LIST_PROJECT_SAGA'
        })

    }catch(err){
        console.log(err.response.data);
    }
}


export function * theoDoiRemoveUserFromProject () {
    yield takeLatest('REMOVE_USER_PROJECT_API', removeUserFromProjectSaga);
}


