import axios from 'axios'
import {DOMAIN_CYBERBUG, TOKEN} from '../util/constants/settingSystem'

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

    getAllProjectCategory = (taskName) => {
        return  axios({
            url: `${DOMAIN_CYBERBUG}/ProjectCategory`,
            method: 'GET'
        })
    }

    createProject  = (newProject) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Project/createProject`,
            method: 'POST',
            data: newProject
        })
    }

    createProjectAuthorize = (newProject) => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Project/createProjectAuthorize`,
            method: 'POST',
            data: newProject,
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        })
    }
    
    getListProjectSaga = () => {
        return axios({
            url: `${DOMAIN_CYBERBUG}/Project/getAllProject`,
            method: 'GET',
            headers: {'Authorization': 'Bearer ' + localStorage.getItem(TOKEN)} //JWT
        })
    }
}

export const cyberBugsService = new CyberBugsService();