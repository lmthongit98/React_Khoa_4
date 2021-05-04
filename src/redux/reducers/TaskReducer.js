import { GET_TASK_DETAIL } from "../constants/Cyberbugs/TaskConstant";

const initialState = {
    taskDetailModal:  {
        "priorityTask": {
          "priorityId": 1,
          "priority": "High"
        },
        "taskTypeDetail": {
          "id": 1,
          "taskType": "bug"
        },
        "assigness": [
          {
            "id": 40,
            "avatar": "https://ui-avatars.com/api/?name=thoa",
            "name": "thoa",
            "alias": "thoa"
          },
          {
            "id": 41,
            "avatar": "https://ui-avatars.com/api/?name=khải",
            "name": "khải",
            "alias": "khai"
          }
        ],
        "lstComment": [],
        "taskId": 41,
        "taskName": "task 1",
        "alias": "task-1",
        "description": "<h1>task 1</h1>",
        "statusId": "3",
        "originalEstimate": 10,
        "timeTrackingSpent": 10,
        "timeTrackingRemaining": 10
      }
}

const reducer =  (state = initialState, action) => {
    switch (action.type) {

    case GET_TASK_DETAIL:
        return { ...state, taskDetailModal: action.taskDetailModal};

    default:
        return state
    }
}

export default reducer;
