import React from "react";
import './Style/COMCards.css'

const COMCards = (props) => {
    return(
        <>
            <div className="COMMain">
                <div className="COMTop">
                    <embed className="embed" src={props.embed} type="" />
                </div>
                <div className="COMDown">
                    <h1 className="COMHeading">{props.heading}</h1>
                </div>
            </div>
        </>
    )
}

export { COMCards }