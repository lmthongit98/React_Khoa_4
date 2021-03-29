import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import SlideDown from '../../HOC/Modal/SlideDown';
import Login from '../login/Login'
import Register from '../Register/Register';


export default function DemoHOCModal() {

    // const LoginWithSlideDown = new SlideDown(Register); //new muon dung component duoi dang object
    const LoginWithSlideDown =  () => { return new SlideDown(Register); }; //neu muon dung component duoi dang the JSX

    const dispatch = useDispatch();

    return (
        <div>
            {/* Button trigger modal */}
            <button onClick = {() => {
                dispatch({
                    type: 'OPEN_FORM',
                    Component: <Login/>
                })
            }} type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                Login
            </button> 

            {/* Button trigger modal */}
            <button onClick = {() => {
                dispatch({
                    type: 'OPEN_FORM',
                    Component: <Register/>
                })
            }} type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                Register
            </button> 
            
            {/* {LoginWithSlideDown} */}
            <LoginWithSlideDown/>
            
        </div>
    )
}
