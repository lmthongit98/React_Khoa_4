import { all, fork, put, take, takeLatest } from 'redux-saga/effects'
import * as ToDoListSaga from './ToDoListSaga'


export function* rootSaga() {
   yield all([
        //Nghiep vu theo doi cac action saga  todolist
        ToDoListSaga.theoDoiActionGetTaskApi(),
        ToDoListSaga.theoDoiActionAddTaskApi(),
        ToDoListSaga.theoDoiActionDeleteTaskApi(),
        ToDoListSaga.theoDoiActionDoneTaskApi(),
        ToDoListSaga.theoDoiActionRejectTaskApi(),
   ])
}