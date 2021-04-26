import { all, fork, put, take, takeLatest } from 'redux-saga/effects'
import * as ToDoListSaga from './ToDoListSaga'
import * as CyberBugs from './cyberbugs/UserCyberBugsSaga'
import * as ProjectCategorySaga from '../sagas/cyberbugs/ProjectCategorySaga'
import * as ProjectSaga from './cyberbugs/ProjectSaga'

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
        CyberBugs.theoDoiGetUser(),
        CyberBugs.theoDoiAddUserToProject(),
        CyberBugs.theoDoiRemoveUserFromProject(),
        ProjectCategorySaga.theoDoigetAllProjectCategory(),
        ProjectSaga.theoDoiCreateProjectSaga(),
        ProjectSaga.theoDoiGetListProjectSaga(),
        ProjectSaga.theoDoiUpdateProjectSaga(),
        ProjectSaga.theoDoiDeleteProject(),
        ProjectSaga.theoDoiGetProjectDetail(),

   ])
}