import React from "react";
import './style/absme.css'

const Abme = () => {
    return (
        <>
            <div className="abBody">
                <div className="abtop"> 
                    <h1 className='fw-bold' id='selected_heading'>About </h1>
                    <div className="abheadimg"></div>
                </div>
                <div className="abbottom">
                    <div className="ableft">
                        <h5 className="h5 text-center">Nothing to show here will be updated soon.</h5>
                    </div>
                    <div className="abright">
                    <h5 className="h5 text-center">Nothing to show here will be updated soon.</h5>

                    </div>
                </div>
            </div>
        </>
    )
}

export { Abme }