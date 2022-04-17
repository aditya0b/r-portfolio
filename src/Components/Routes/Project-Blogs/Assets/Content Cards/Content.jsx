import React from 'react'
import './CSS/Content.css'

const ContentB = (props) => {
    return (
        <>
            <div className="BC-Body">
                <h2 className="h2">{props.heading}</h2>
            </div>
        </>
    )
}

export { ContentB }