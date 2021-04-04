import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberBugsService } from "../../../services/CyberBugsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PROJECT_CATEGORY_SAGA } from "../../constants/Cyberbugs/Cyberbugs";
import {history} from '../../../util/lib/history'


//CREATE PROJECT

function* createProjectSaga(action) {


    try {

        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => cyberBugsService.createProjectAuthorize(action.newProject));
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


    try {
        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => cyberBugsService.getListProjectSaga());
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: 'GET_LIST_PROJECT',
                projectList: data.content
            })
        }


    } catch (err) {
        console.log(err);
    }

}

export function* theoDoiGetListProjectSaga() {
    yield takeLatest('GET_LIST_PROJECT_SAGA', getListProjectSaga);
}