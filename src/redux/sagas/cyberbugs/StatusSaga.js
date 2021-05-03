import { statusService } from "../../../services/StatusService";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { GET_ALL_STATUS, GET_ALL_STATUS_SAGA } from "../../constants/Cyberbugs/StatusConstant";


function * getAllStatusSaga(action){
    try {
        const {data, status} = yield call(() => statusService.getAllStatus());
        yield put({
            type: GET_ALL_STATUS,
            arrStatus: data.content
        })

    } catch (error) {
        console.log(error);
        console.log(error.response?.data);
    }
}

export function * theoDoiGetAllStatusSaga(){
    yield takeLatest(GET_ALL_STATUS_SAGA, getAllStatusSaga);
}