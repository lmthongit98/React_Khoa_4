import React, { Component } from 'react';
import axios from 'axios'
import './todolist.css'

class ToDoListRCC extends Component {

    state = {
        taskList: [],
        values: {
            taskName: ''
        },
        errors: {
            taskName: ''
        }
    }

    getTaskList() {
        let promise = axios({
            url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
            method: "GET"
        });
        promise.then(res => {
            this.setState({
                taskList: res.data
            })
        });
        promise.catch(err => {
            alert(err);
        })
    }

    deleteTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE'
        })
        promise.then(res => {
            this.getTaskList();
            alert("Deleted " + taskName);
        })
        promise.catch(err => {
            alert(err);
        })
    }

    addTask = (e) => {
        e.preventDefault();
        let promise = axios({
            url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
            method: 'POST',
            data: { taskName: this.state.values.taskName }
        })

        promise.then(res => {
            this.getTaskList();
            alert("Add task successfully!");
        })
        promise.catch(err => {
            alert(err);
        })

    }

    doneTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'PUT'
        })

        promise.then(res => {
            this.getTaskList();
        })
        promise.catch(err => {
            alert(err);
        })
    }

    rejectTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'PUT'
        })

        promise.then(res => {
            this.getTaskList();
        })
        promise.catch(err => {
            alert(err);
        })
    }

    //Ham se tu dong thuc thi sau khi noi dung component duoc render
    componentDidMount() {
        this.getTaskList();
    }

    renderTaskToDo() {
        return this.state.taskList.filter(item => !item.status).map((item, index) => {
            return (
                <li key={index}>
                    <span>{item.taskName}</span>
                    <div className="buttons">
                        <button onClick={() => { this.deleteTask(item.taskName) }} type="button" className="remove">
                            <i className="fa fa-trash-alt" />
                        </button>
                        <button onClick={() => {this.doneTask(item.taskName)}} type="button" className="complete">
                            <i className="far fa-check-circle" />
                            <i className="fas fa-check-circle" />
                        </button>
                    </div>
                </li>
            )
        })
    }


    renderTaskToDoDone() {
        return this.state.taskList.filter(item => item.status).map((item, index) => {
            return (
                <li key={index}>
                    <span>{item.taskName}</span>
                    <div className="buttons">
                        <button onClick={() => {this.deleteTask(item.taskName)}} type="button" className="remove">
                            <i className="fa fa-trash-alt" />
                        </button>
                        <button onClick={() => this.rejectTask(item.taskName)} type="button" className="complete">
                            <i className="far fa-undo" />
                            <i className="fas fa-undo" />
                        </button>
                    </div>
                </li>
            )
        })
    }


    handleChange = (e) => {
        let { value, name } = e.target;
        let newValues = { ...this.state.values };
        newValues = { ...newValues, [name]: value };
        let newErrors = { ...this.state.errors };
        let regexString = /^[a-z A-Z]+$/;
        if (!regexString.test(value) || value.trim() === '') {
            newErrors[name] = name + " invalid !";
        } else {
            newErrors[name] = '';
        }
        this.setState({
            ...this.state,
            values: newValues,
            errors: newErrors
        })
    }

    render() {
        return (
            <form onSubmit={(e) => { this.addTask(e) }}>
                {/* <button className="btn btn-success" onClick={() => { this.getTaskList() }}>Get task list</button> */}
                <div className="card">
                    <div className="card__header">
                        <img src={require('./bg.png').default} alt="hinh" />
                    </div>
                    {/* <h2>hello!</h2> */}
                    <div className="card__body">
                        <div className="card__content">
                            <div className="card__title">
                                <h2>My Tasks</h2>
                                <p>September 9,2020</p>
                            </div>
                            <div className="card__add">
                                <input name="taskName" onChange={this.handleChange} id="newTask" type="text" placeholder="Enter an activity..." />
                                <button id="addItem">
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <p className="text-danger">{this.state.errors.taskName}</p>
                            <div className="card__todo">
                                {/* Uncompleted tasks */}
                                <ul className="todo" id="todo">
                                    {this.renderTaskToDo()}
                                </ul>
                                {/* Completed tasks */}
                                <ul className="todo" id="completed">
                                    {this.renderTaskToDoDone()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default ToDoListRCC;