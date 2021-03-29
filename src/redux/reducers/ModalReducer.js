import React from 'react'

const stateDefault = {
    Component: <p>Noi dung mac dinh</p>
}


const reducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'OPEN_FORM': {
            return {...state, Component: action.Component};
        }
        default:
            return state;
    }
}

export default reducer;