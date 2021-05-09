/* eslint-disable default-case */
/* eslint-disable no-fallthrough */
import { taskService } from "../../../services/TaskService";
import { call, put, select, takeLatest } from "@redux-saga/core/effects";
import { STATUS_CODE } from "../../../util/constants/settingSystem";
import { notifiFunction } from '../../../util/Notification/NotificationCyberbugs'
import { CHANGE_ASSIGNESS, CHANGE_TASK_MODAL, GET_TASK_DETAIL, GET_TASK_DETAIL_SAGA, HANDLE_CHANGE_POST_API_SAGA, REMOVE_USER_ASSIGN, UPDATE_STATUS_TASK_SAGA, UPDATE_TASK_SAGA } from "../../constants/Cyberbugs/TaskConstant";


//Create Task
function* createTaskSaga(action) {
    try {
        const { data, status } = yield call(() => taskService.createTask(action.taskObject));
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data);
            notifiFunction('success', 'Create task successfully !');
        } else {
            console.log('error');
        }

    } catch (err) {
        console.log(err);
    }
}

export function* theoDoiCreateTaskSaga() {
    yield takeLatest('CREATE_TASK_SAGA', createTaskSaga);
}

//Get Task Detail
function* getTaskDetailSaga(action) {
    try {
        const { data, status } = yield call(() => taskService.getTaskDetail(action.taskId));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: GET_TASK_DETAIL,
                taskDetailModal: data.content
            })
        } else {
            console.log('error');
        }

    } catch (err) {
        console.log(err);
        console.log(err.response?.data);
    }
}

export function* theoDoiGetTaskDetailSaga() {
    yield takeLatest(GET_TASK_DETAIL_SAGA, getTaskDetailSaga);
}

//Update Task Status
function* updateTaskStatusSaga(action) {
    try {
        const { data, status } = yield call(() => taskService.updateStatusTask(action.taskUpdateStatus));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: 'GET_PROJECT_DETAIL',
                projectId: action.taskUpdateStatus.projectId
            })
            yield put({
                type: GET_TASK_DETAIL_SAGA,
                taskId: action.taskUpdateStatus.taskId
            })
        } else {
            console.log('error');
        }

    } catch (err) {
        console.log(err);
        console.log(err.response?.data);
    }
}

export function* theoDoiupdateTaskStatusSaga() {
    yield takeLatest(UPDATE_STATUS_TASK_SAGA, updateTaskStatusSaga);
}

//handleChange_postAPI - update task
export function* handleChange_postAPI(action) {
    debugger
    //Goi action lam thay doi task detail modal
    switch (action.actionType) {
        case CHANGE_TASK_MODAL: {
            const { name, value } = action;
            yield put({
                type: CHANGE_TASK_MODAL,
                name,
                value
            });
        };break;
        case CHANGE_ASSIGNESS: {
            const { userSelected } = action;
            yield put({
                type: CHANGE_ASSIGNESS,
                userSelected
            });
        };break;
        case REMOVE_USER_ASSIGN: {
            const { userId } = action;
            yield put({
                type: REMOVE_USER_ASSIGN,
                userId
            })
        };break;
    }
    //Save qua API updateTaskSaga
    //Lay du lieu  tu state.taskDetailModal
    let { taskDetailModal } = yield select(state => state.TaskReducer);
    //Bien doi du lieu state.TaskDetailModal thanh du lieu API can
    const listUserAsign = taskDetailModal.assigness?.map((user, index) => user.id);
    const taskUpdateAPI = { ...taskDetailModal, listUserAsign };
    try {
        const { data, status } = yield call(() => taskService.updateTask(taskUpdateAPI));
        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: 'GET_PROJECT_DETAIL',
                projectId: taskUpdateAPI.projectId
            })
            yield put({
                type: GET_TASK_DETAIL_SAGA,
                taskId: taskUpdateAPI.taskId
            })
        }
    } catch (error) {
        console.log(error.response?.data);
        console.log(error);
    }
}

export function* theoDoiHandleChange_postAPI() {
    yield takeLatest(HANDLE_CHANGE_POST_API_SAGA, handleChange_postAPI);
}


