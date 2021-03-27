import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Axios from 'axios'
import { GET_TASK_API } from '../../redux/constants/ToDoListConstants';
import { addTaskApi, deleteTaskApi, doneTaskApi, getTaskListAPI, rejectTaskApi } from '../../redux/actions/ToDoListActions'

export default function ToDoListRedux(props) {

    //Lay taskList tu redux
    const { taskList } = useSelector(state => state.ToDoListReducer);
    const dispatch = useDispatch();

    let [state, setState] = useState({
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    });

    const handleChange = (e) => {
        let { value, name } = e.target;
        let newValues = { ...state.values };

        newValues = { ...newValues, [name]: value };

        let newErrors = { ...state.errors };

        let regexString = /^[a-z A-Z]+$/;

        if (!regexString.test(value) || value.trim() === '') {
            newErrors[name] = name + ' invalid !';
        } else {
            newErrors[name] = '';
        }


        setState({
            ...state,
            values: newValues,
            errors: newErrors
        })
    }


    const getTaskList = () => {
        dispatch(getTaskListAPI());
    }

    const addTask = (e) => {
        e.preventDefault();
        //Xu ly nhan du lieu tu nguoi dung nhap => goi action addTaskApi()
        dispatch(addTaskApi(state.values.taskName));
    }

    const deleteTask = (taskName) => {
        if(window.confirm("Do you want to delete " + taskName + " task ?")){
            dispatch(deleteTaskApi(taskName));
        }
    }

    const doneTask = (taskName) => {
       dispatch(doneTaskApi(taskName));
    }

    const rejectTask = (taskName) => {
        dispatch(rejectTaskApi(taskName));
    }


    useEffect(() => {
        getTaskList();


        return () => {

        }
    }, [])


    const renderTaskToDo = () => {
        return taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => {
                        deleteTask(item.taskName);
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className="complete" onClick={() => {
                        doneTask(item.taskName);
                    }}>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }


    const renderTaskToDoDone = () => {
        return taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => {
                        deleteTask(item.taskName);
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button type="button" className="complete" onClick={() => {
                        rejectTask(item.taskName);
                    }}>
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }


    return (
        <div className="card">
            <div className="card__header">
                <img src={require('./bg.png').default} />
            </div>
            {/* <h2>hello!</h2> */}
            <form className="card__body" onSubmit={addTask}>
                <div className="card__content">
                    <div className="card__title">
                        <h2>My Tasks</h2>
                        <p>September 9,2020</p>
                    </div>
                    <div className="card__add">
                        <input name="taskName" onChange={handleChange} id="newTask" type="text" placeholder="Enter an activity..." />
                        <button id="addItem">
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <div className="card__todo">
                        {/* Uncompleted tasks */}
                        <ul className="todo" id="todo">
                            {renderTaskToDo()}
                        </ul>
                        {/* Completed tasks */}
                        <ul className="todo" id="completed">
                            {renderTaskToDoDone()}
                        </ul>
                    </div>
                </div>
            </form>
        </div>

    )
}
