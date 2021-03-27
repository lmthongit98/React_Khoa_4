import { GET_TASK_API } from "../constants/ToDoListConstants";
import Axios from 'axios';

// Action co 2 loai:
//Action thuc thi ngay lam thay doi reducer (action 1)
//Action phai thuc hien xu ly logic roi moi goi action 1 thuc thi (async action)(redux-thunk)

export const getTaskListAPI = () => {

    //Tien xu ly du lieu => xu ly function

    return async dispatch => {
        try{
            let {data} = await Axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'GET'
            });
            console.log(data);
            //Nếu gọi api lấy về kết quả thành công 
            //=> dispatch to redux
            dispatch({
                type: GET_TASK_API,
                taskList: data
            })
            console.log('thành công')
        }catch(err){
            console.log(err);
        }
    }
}

export const addTaskApi = (taskName) => {
    //tham so dispatch co tu redux thunk tra ve khi goi ham dispatch tu useDispatch hoac tu ham dispatch nay
    return async dispatch => {
       try{
            //Xu ly truoc khi dispatch
        await Axios({
            url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
            method: 'POST',
            data: { taskName: taskName }
        })
        dispatch(getTaskListAPI());
       }catch(err){
           console.log(err);
       }
    }
}


export const deleteTaskApi = (taskName) => {
    return dispatch => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE'
        })
        promise.then(res => {
            dispatch(getTaskListAPI());
        })
        promise.catch(err => {
            alert(err);
        })
    }   
}

export const doneTaskApi = (taskName) => {
    return (dispatch) => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT'
        })

        promise.then(res => {
            dispatch(getTaskListAPI());
        })
        promise.catch(err => {
            alert(err);
        })
    }
}

export const rejectTaskApi = (taskName) => {
    return dispatch => {
        let promise = Axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT'
        })

        promise.then(res => {
            dispatch(getTaskListAPI());
        })
        promise.catch(err => {
            alert(err);
        })
    }
}