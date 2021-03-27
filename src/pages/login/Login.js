import React, { useState } from 'react'
import { Prompt } from 'react-router'

export default function Login(props) {

    const [userLogin, setUserLogin] = useState({
        username: '',
        password: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        console.log(userLogin)
        setUserLogin({
            ...userLogin,
            [name]: value
        })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        if(userLogin.username === 'admin' && userLogin.password === "admin"){
            props.history.goBack();
            // props.history.push('/home')
            localStorage.setItem('userLogin', JSON.stringify(userLogin));
        }else{
            alert("Login fail !");
            return;
        }
    }

    return (
        <div className="container">
            <form>
                <h3 className="display-4">Login</h3>
                <div className="form-group">
                    <p>Username</p>
                    <input name="username" className="form-control" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <p>Password</p>
                    <input name="password" className="form-control" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <button onClick={handleLogin} className="btn btn-success">Đăng nhập</button>
                </div>
                <Prompt when={true} message={(location) => {
                    return "Bạn có chắc muốn rời khỏi trang này ?"
                }}/>
            </form>
        </div>
    )
}
