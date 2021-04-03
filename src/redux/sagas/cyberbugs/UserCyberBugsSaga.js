import { call, fork, put, take, takeLatest, delay, select } from 'redux-saga/effects'
import { cyberBugsService } from '../../../services/CyberBugsService';
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';
import { USER_SIGNIN_API, USLOGIN } from '../../constants/Cyberbugs/Cyberbugs';
import {history} from '../../../util/lib/history'


//Quan ly cac action saga

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