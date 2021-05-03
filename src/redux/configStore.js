import {applyMiddleware, combineReducers, createStore} from 'redux';
import ToDoListReducer from './reducers/ToDoListReducer'
import LoadingReducer from './reducers/LoadingReducer'
import ModalReducer from './reducers/ModalReducer'
import UserCyberBugsReducer from './reducers/UserCyberBugsReducer'
import ProjectCategoryReducer from './reducers/ProjectCategoryReducer'
import ProjectCyberBugsReducer from './reducers/ProjectCyberBugsReducer'
import drawerReducer from './reducers/DrawerCyberbugsReducer'
import ProjectReducer from './reducers/ProjectReducer'
import TaskTypeReducer from './reducers/TaskTypeReducer'
import PriorityReducer from './reducers/PriorityReducer'
import StatusReducer from './reducers/StatusReducer'
import reduxThunk from 'redux-thunk'

//middleWare saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';

const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    //khai bao reducer
    ToDoListReducer,
    LoadingReducer,
    ModalReducer,
    UserCyberBugsReducer,
    ProjectCategoryReducer,
    ProjectCyberBugsReducer,
    drawerReducer,
    ProjectReducer,
    TaskTypeReducer,
    PriorityReducer,
    StatusReducer,

})

const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));

//Goi saga
middleWareSaga.run(rootSaga);

export default store;