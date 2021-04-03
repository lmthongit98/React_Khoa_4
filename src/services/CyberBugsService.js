import axios from 'axios'
import {DOMAIN_CYBERBUG} from '../util/constants/settingSystem'

export class CyberBugsService{
    constructor(){ 

    }

    signinCyberBugs = (userLogin) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Users/signin`,
            method: 'POST',
            data: userLogin
        })
    }

    // addTaskApi = (taskName) => {
    //     return  axios({
    //         url: `${DOMAIN_CYBERBUG}/ToDoList/AddTask`,
    //         method: 'POST',
    //         data: { taskName: taskName }
    //     })
    // }

    // deleteTaskApi = (taskName) => {
    //     return axios({
    //         url: `${DOMAIN_CYBERBUG}/ToDoList/deleteTask?taskName=${taskName}`,
    //         method: 'DELETE'
    //     })
    // }

    // doneTaskApi = (taskName) => {
    //     return axios({
    //         url: `${DOMAIN_CYBERBUG}/ToDoList/doneTask?taskName=${taskName}`,
    //         method: 'PUT'
    //     })
    // }
    
    // rejectTaskApi = (taskName) => {
    //     return axios({
    //         url: `${DOMAIN_CYBERBUG}/ToDoList/rejectTask?taskName=${taskName}`,
    //         method: 'PUT'
    //     })
    // }
}

export const cyberBugsService = new CyberBugsService();