import { call, fork, put, take, takeLatest, delay } from 'redux-saga/effects'
import { toDoListService } from '../../services/ToDoListService';
import { STATUS_CODE } from '../../util/constants/settingSystem';
import { DISPLAY_LOADING, HIDE_LOADING } from '../constants/LoadingConst';

import { ADD_TASK_API, DELETE_TASK_API, DONE_TASK_API, GET_TASKLIST_API, GET_TASK_API, REJECT_TASK_API } from '../constants/ToDoListConstants'
/**
 * redux co 2 loai action:
 * Loai 1: action => object (action thuong)
 * Loai 2: action => function (thuong dung de xu ly api hoac goi cac action khac)
 * 
 */

/**
 * 
 */


// ----------GET TASKS--------------
function* getTaskApiAction(action) {

    try {
        //block khi goi api, unblock khi ket qua tra ve
        yield delay(300);
        const { data, status } = yield call(toDoListService.getTaskApi);
        if (status === STATUS_CODE.SUCCESS) {
            //sau khi lay gia tri thanh cong dung put(giong dispatch ben thunk)
            yield put({
                type: GET_TASK_API,
                taskList: data
            })
        } else {
            console.log("error with wrong status code!");
            yield put({
                type: HIDE_LOADING
            })
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: HIDE_LOADING
        })
    }

    //hide loading
    //put giong dispatch action
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiActionGetTaskApi() {
    //Goi ham getTaskApiAction khi nhan duoc mot action co type = GET_TASKLIST_API
    yield takeLatest(GET_TASKLIST_API, getTaskApiAction); //lay action saga (loai 2) cuoi cung
}



// ----------ADD TASK--------------

export function* addTaskApiAction(action) {
    const { taskName } = action
    //Hien thi loading
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        //Goi api
        yield delay(100);
        try {
            const {status} = yield call(() => { return toDoListService.addTaskApi(taskName) });
            if (status === STATUS_CODE.SUCCESS) {
                 //thanh cong => goi action saga to reload tasklist
                yield put({
                    type: GET_TASKLIST_API
                })
            } else {
                console.log("Error with wrong status code!");
                yield put({
                    type: HIDE_LOADING
                })
            }
        } catch (error) {
            console.log(error);
            yield put({
                type: HIDE_LOADING
            })
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: HIDE_LOADING
        })
    }
}

export function* theoDoiActionAddTaskApi(action) {
    //Goi ham addTaskApiAction khi nhan duoc mot action co type = ADD_TASK_API
    yield takeLatest(ADD_TASK_API, addTaskApiAction);
}


// ----------DELETE TASK--------------

export function* deleteTaskApiAction(action) {
    const { taskName } = action
    //Hien thi loading
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        //Goi api
        yield delay(100);
        try {
            const {status} = yield call(() => { return toDoListService.deleteTaskApi(taskName) });
            if (status === STATUS_CODE.SUCCESS) {
                 //thanh cong => goi action saga to reload tasklist
                yield put({
                    type: GET_TASKLIST_API
                })
            } else {
                console.log("Error with wrong status code!");
                yield put({
                    type: HIDE_LOADING
                })
            }
        } catch (error) {
            console.log(error);
            yield put({
                type: HIDE_LOADING
            })
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: HIDE_LOADING
        })
    }
}

export function* theoDoiActionDeleteTaskApi(action) {
    //Goi ham addTaskApiAction khi nhan duoc mot action co type = ADD_TASK_API
    yield takeLatest(DELETE_TASK_API, deleteTaskApiAction);
}

// ----------DONE TASK--------------

export function* doneTaskApiAction(action) {
    const { taskName } = action
    //Hien thi loading
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        //Goi api
        yield delay(100);
        try {
            const {status} = yield call(() => { return toDoListService.doneTaskApi(taskName) });
            if (status === STATUS_CODE.SUCCESS) {
                 //thanh cong => goi action saga to reload tasklist
                yield put({
                    type: GET_TASKLIST_API
                })
            } else {
                console.log("Error with wrong status code!");
                yield put({
                    type: HIDE_LOADING
                })
            }
        } catch (error) {
            console.log(error);
            yield put({
                type: HIDE_LOADING
            })
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: HIDE_LOADING
        })
    }
}

export function* theoDoiActionDoneTaskApi(action) {
    //Goi ham addTaskApiAction khi nhan duoc mot action co type = ADD_TASK_API
    yield takeLatest(DONE_TASK_API, doneTaskApiAction);
}


// ----------REJECT TASK--------------

export function* rejectTaskApiAction(action) {
    const { taskName } = action
    //Hien thi loading
    yield put({
        type: DISPLAY_LOADING
    })
    try {
        //Goi api
        yield delay(100);
        try {
            const {status} = yield call(() => { return toDoListService.rejectTaskApi(taskName) });
            if (status === STATUS_CODE.SUCCESS) {
                 //thanh cong => goi action saga to reload tasklist
                yield put({
                    type: GET_TASKLIST_API
                })
            } else {
                console.log("Error with wrong status code!");
                yield put({
                    type: HIDE_LOADING
                })
            }
        } catch (error) {
            console.log(error);
            yield put({
                type: HIDE_LOADING
            })
        }
    } catch (error) {
        console.log(error);
        yield put({
            type: HIDE_LOADING
        })
    }
}

export function* theoDoiActionRejectTaskApi(action) {
    //Goi ham addTaskApiAction khi nhan duoc mot action co type = ADD_TASK_API
    yield takeLatest(REJECT_TASK_API, rejectTaskApiAction);
}