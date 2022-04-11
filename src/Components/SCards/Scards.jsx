import React from "react";
import './style/scards.css'

const Scards = (props) => {
    return(
        <>
            <a href={props.anchor} className="Smain bg-primary text-white">
                <h3 className="h3">{props.head}</h3>
            </a>
        </>
    )
}

export { Scards }