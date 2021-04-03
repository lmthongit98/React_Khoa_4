import {applyMiddleware, combineReducers, createStore} from 'redux';
import ToDoListReducer from './reducers/ToDoListReducer'
import LoadingReducer from './reducers/LoadingReducer'
import ModalReducer from './reducers/ModalReducer'
import UserCyberBugsReducer from './reducers/UserCyberBugsReducer'
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
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));

//Goi saga
middleWareSaga.run(rootSaga);

export default store;