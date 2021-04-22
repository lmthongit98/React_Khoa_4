import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberBugsService } from "../../../services/CyberBugsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PROJECT_CATEGORY_SAGA } from "../../constants/Cyberbugs/Cyberbugs";
import {history} from '../../../util/lib/history'
import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";
import { projectService } from "../../../services/ProjectService";
import { notifiFunction } from "../../../util/Notification/NotificationCyberbugs";



//CREATE PROJECT

function* createProjectSaga(action) {


    try {

        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => cyberBugsService.createProjectAuthorize(action.newProject))
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            history.push('/projectmanagement')
        }


    } catch (err) {
        console.log(err);
    }

}

export function* theoDoiCreateProjectSaga() {
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga);
}


//GET APP PROJECTS FROM API

function* getListProjectSaga(action) {

    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(100);
    try {
        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => cyberBugsService.getListProjectSaga());
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: 'GET_LIST_PROJECT',
                projectList: data.content
            })

            yield put({
                type: 'CLOSE_DRAWER'
            })
        }
        yield put({
            type: HIDE_LOADING
        })


    } catch (err) {
        console.log(err);
        yield put({
            type: HIDE_LOADING
        })
    }

}

export function* theoDoiGetListProjectSaga() {
    yield takeLatest('GET_LIST_PROJECT_SAGA', getListProjectSaga);
}



// UPDATE PROJECT

function* updateProjectSaga(action) {

    try {
        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => cyberBugsService.updateProject(action.projectUpdate));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
           //thanh cong goi lai action saga getList de cap nhat tren UI
           //1. dung put
           yield put({
               type: 'GET_LIST_PROJECT_SAGA'
           })
           //2.dung call goi truc tieu function
        //    yield call(getListProjectSaga);
        }

    } catch (err) {
        console.log(err);
      
    }

}

export function* theoDoiUpdateProjectSaga() {
    yield takeLatest('UPDATE_PROJECT_SAGA', updateProjectSaga);
}




//DELETE PROJECT


function* deleteProjectSaga(action) {

    try {
        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => projectService.deleteProject(action.projectId));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            notifiFunction('success', 'Delete  project sucessfully !');
           //thanh cong goi lai action saga getList de cap nhat tren UI
           //1. dung put
           yield put({
               type: 'GET_LIST_PROJECT_SAGA'
           })
           //2.dung call goi truc tieu function
        //    yield call(getListProjectSaga);
        }else{
            notifiFunction('error', 'Delete  project fail !');
        }

    } catch (err) {
        console.log(err);
        notifiFunction('error   ', 'Delete  project fail !');
    }

}

export function* theoDoiDeleteProject() {
    yield takeLatest('DELETE_PROJECT_SAGA', deleteProjectSaga);
}