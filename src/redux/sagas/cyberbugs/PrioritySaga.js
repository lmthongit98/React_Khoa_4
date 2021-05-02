import { priorityService } from "../../../services/PriorityService";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { GET_ALL_PRIORITY, GET_ALL_PRIORITY_SAGA } from "../../constants/Cyberbugs/PriorityConstants";

function * getAllPriority(action){
    try{
        const {data, status} = yield call(() => priorityService.getAllPriority());
        yield put({
            type: GET_ALL_PRIORITY,
            arrPriority: data.content
        })
    }catch(err){
        console.log(err);
    }
}


export function * theoDoigetAllPriority(){
    yield takeLatest(GET_ALL_PRIORITY_SAGA, getAllPriority);
}
