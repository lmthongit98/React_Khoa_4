import { all, fork, put, take, takeLatest } from 'redux-saga/effects'
import * as ToDoListSaga from './ToDoListSaga'
import * as CyberBugs from './cyberbugs/UserCyberBugsSaga'


export function* rootSaga() {
   yield all([
        //Nghiep vu theo doi cac action saga  todolist
        ToDoListSaga.theoDoiActionGetTaskApi(),
        ToDoListSaga.theoDoiActionAddTaskApi(),
        ToDoListSaga.theoDoiActionDeleteTaskApi(),
        ToDoListSaga.theoDoiActionDoneTaskApi(),
        ToDoListSaga.theoDoiActionRejectTaskApi(),

        //Cyberbugs
        CyberBugs.theoDoiSignIn(),
   ])
}