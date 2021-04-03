import React from 'react';
import { Route } from 'react-router';
import Header from '../../components/home/header/Header';


export const HomeTemplate = (props) => {

    const {Component, ...restParam} = props;

    //propsRoute chua cac thuoc tinh cua the Route: history, put, ...
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <Header/>
            <Component {...propsRoute}/>
        </>
    }} />
}