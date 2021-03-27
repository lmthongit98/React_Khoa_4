import React from 'react'

export default function PageNotFound(props) {
    return (
        <div>
            <h1 className="text-danger">{props.match.url} Not Found</h1>
        </div>
    )
}
