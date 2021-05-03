import { taskService } from "../../../services/TaskService";
import { call, put, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import {notifiFunction} from '../../../util/Notification/NotificationCyberbugs'


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
