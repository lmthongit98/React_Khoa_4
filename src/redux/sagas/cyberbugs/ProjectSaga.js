import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberBugsService } from "../../../services/CyberBugsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { GET_ALL_PROJECT_CATEGORY_SAGA } from "../../constants/Cyberbugs/Cyberbugs";



function* createProjectSaga(action) {


    try {

        //Gọi api lấy dữ liệu về
        const { data, status } = yield call(() => cyberBugsService.createProjectAuthorize(action.newProject));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)
        }


    } catch (err) {
        console.log(err);
    }

}





export function* theoDoiCreateProjectSaga() {
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga);
}