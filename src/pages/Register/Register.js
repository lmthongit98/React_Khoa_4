import React from 'react'

export default function Register() {
    return (
        <div className="container">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2 className="text-center">Registation Form - Input User's Detail Information</h2>
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label htmlFor="usr">Name:</label>
                        <input required="true" type="text" className="form-control" id="usr" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input required="true" type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="birthday">Birthday:</label>
                        <input type="date" className="form-control" id="birthday" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                        <input required="true" type="password" className="form-control" id="pwd" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmation_pwd">Confirmation Password:</label>
                        <input required="true" type="password" className="form-control" id="confirmation_pwd" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="text" className="form-control" id="address" />
                    </div>
                    <button className="btn btn-success">Register</button>
                </div>
            </div>
        </div>

    )
}
