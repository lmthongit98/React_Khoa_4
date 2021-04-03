import React from 'react';
import { Route } from 'react-router';
import MenuCyberbugs from '../../components/Cyberbugs/MenuCyberbugs';
import ModalCyberBugs from '../../components/Cyberbugs/ModalCyberBugs/ModalCyberbugs';
import SidebarCyberbugs from '../../components/Cyberbugs/SidebarCyberbugs';
import Header from '../../components/home/header/Header';
import '../../index.css'

export const CyberBugsTemplate = (props) => {

    const {Component, ...restParam} = props;

    //propsRoute chua cac thuoc tinh cua the Route: history, put, ...
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="jira">
                <SidebarCyberbugs />
                <MenuCyberbugs />
                    <Component {...propsRoute} />
                <ModalCyberBugs />
            </div>
        </>
    }} />
}