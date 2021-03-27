import React from 'react'
import { Redirect } from 'react-router';

export default function Profile(props) {

    if(localStorage.getItem('userLogin')) {
        return (
            <div>
                profile
            </div>
        )
    }else{
        alert("Please login !");
        return <Redirect to="/login"/>
    }

    
}
