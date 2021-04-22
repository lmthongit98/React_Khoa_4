  
import { baseService } from "./baseService";

export class UserService extends baseService {

    getUser = (keyWord) => {
        
       return this.get(`Users/getUser?keyword=${keyWord}`);
    }

    assignUserProject = (userProject) => {
        return this.post(`Project/assignUserProject`, userProject);
    }

    deleteUserFromProject = (userProject) => {
        return this.post('Project/removeUserFromProject', userProject);
    }


}


export const userService = new UserService();