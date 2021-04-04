const initialState = {
    projectEdit: {
        "id": 0,
        "projectName": "string",
        "creator": 0,
        "description": "string",
        "categoryId": "2"
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'EDIT_PROJECT': {
            state.projectEdit = action.projectEdit;
            return {...state};
        }
        default:
            return state
    }
}

export default reducer;