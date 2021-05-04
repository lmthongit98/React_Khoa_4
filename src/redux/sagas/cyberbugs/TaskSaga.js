import { taskService } from "../../../services/TaskService";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import {notifiFunction} from '../../../util/Notification/NotificationCyberbugs'
import { GET_TASK_DETAIL, GET_TASK_DETAIL_SAGA } from "../../constants/Cyberbugs/TaskConstant";


//Create Task
function * createTaskSaga(action){
    try{
        const {data, status} = yield call(() => taskService.createTask(action.taskObject));
        if(status === STATUS_CODE.SUCCESS){
            console.log(data);
            notifiFunction('success', 'Create task successfully !');
        }else{
            console.log('error');
        }

    }catch(err){
        console.log(err);
    }
}

export function * theoDoiCreateTaskSaga(){
    yield takeLatest('CREATE_TASK_SAGA', createTaskSaga);
}

//Get Task Detail
function * getTaskDetailSaga(action){
    try{
        const {data, status} = yield call(() => taskService.getTaskDetail(action.taskId));
        if(status === STATUS_CODE.SUCCESS){
            yield put({
                type: GET_TASK_DETAIL,
                taskDetailModal: data.content
            })
        }else{
            console.log('error');
        }

    }catch(err){
        console.log(err);
        console.log(err.response?.data);
    }
}

export function * theoDoiGetTaskDetailSaga(){
    yield takeLatest(GET_TASK_DETAIL_SAGA, getTaskDetailSaga);
}