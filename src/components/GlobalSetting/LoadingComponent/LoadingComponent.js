import React from 'react'
import styleLoading from './LoadingComponent.module.css';
import { useSelector } from 'react-redux'


export default function LoadingComponent() {

    const { isLoading } = useSelector(state => state.LoadingReducer)

    if (isLoading) {
        return (
            // <div className={styleLoading.bgLoading}>
            //     <img src={require('../../../assets/imgs/loading.gif').default} alt="loading" />

            // </div>
            <div className="d-flex">
                <div className="spinner-border text-primary m-auto" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    return ''
}
